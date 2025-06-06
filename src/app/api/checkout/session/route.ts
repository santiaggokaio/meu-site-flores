// app/api/checkout/session/route.ts

import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

// Inicializa o Stripe com a chave armazenada em ENV
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-05-28.basil',
});

interface CheckoutItem {
  id: string;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
}

export async function POST(request: NextRequest) {
  try {
    const { items } = (await request.json()) as { items: CheckoutItem[] };

    // Valida itens
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Carrinho vazio ou formato inválido.' },
        { status: 400 }
      );
    }

    // Constrói array de line_items para o Stripe
    const line_items = items.map((item) => ({
      price_data: {
        currency: 'brl',
        product_data: {
          name: item.name,
          images: [item.imageUrl],
        },
        unit_amount: Math.round(item.price * 100), // em centavos
      },
      quantity: item.quantity,
    }));

    const baseUrl = process.env.SITE_URL;
    if (!baseUrl) {
      return NextResponse.json(
        { error: 'Variável de ambiente SITE_URL não definida.' },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${baseUrl}/sucesso`,
      cancel_url: `${baseUrl}/carrinho`,
    });

    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (error) {
    console.error('Erro criando sessão de checkout:', error);
    return NextResponse.json(
      { error: 'Falha ao criar sessão de checkout.' },
      { status: 500 }
    );
  }
}
