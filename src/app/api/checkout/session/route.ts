// src/app/api/checkout/session/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';

interface CheckoutItem {
  id: string;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
}

export async function POST(request: NextRequest) {
  // Garante que só entre aqui se realmente for POST
  if (request.method !== 'POST') {
    return NextResponse.json(
      { error: 'Método não permitido.' },
      { status: 405 }
    );
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.error('STRIPE_SECRET_KEY não definida.');
    return NextResponse.json(
      { error: 'Problema de configuração interna.' },
      { status: 500 }
    );
  }

  // Aqui usamos o Stripe “normal” (import acima),
  // mas só em tempo de execução, pois runtime=nodejs
  const stripe = new Stripe(secretKey, { apiVersion: '2025-05-28.basil' });

  let body: { items: CheckoutItem[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Corpo JSON inválido ou ausente.' },
      { status: 400 }
    );
  }

  const { items } = body;
  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json(
      { error: 'Carrinho vazio ou formato inválido.' },
      { status: 400 }
    );
  }

  const line_items = items.map((item) => ({
    price_data: {
      currency: 'brl',
      product_data: { name: item.name, images: [item.imageUrl] },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  const baseUrl = process.env.SITE_URL;
  if (!baseUrl) {
    console.error('SITE_URL não definida.');
    return NextResponse.json(
      { error: 'Problema de configuração interna.' },
      { status: 500 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${baseUrl}/sucesso`,
      cancel_url: `${baseUrl}/carrinho`,
    });
    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (err) {
    console.error('Erro criando sessão de checkout:', err);
    return NextResponse.json(
      { error: 'Falha ao criar sessão de checkout.' },
      { status: 500 }
    );
  }
}

// Next.js dispara GET/HEAD durante o build para “coletar dados”.
// Aqui só devolvemos respostas simples sem tocar no Stripe.
export async function GET() {
  return NextResponse.json(
    { error: 'Método não permitido.' },
    { status: 405 }
  );
}

export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}
