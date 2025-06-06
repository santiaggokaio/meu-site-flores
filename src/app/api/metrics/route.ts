// app/api/metrics/route.ts

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Web Vitals:', data);
  } catch (error) {
    console.error('Erro ao processar métricas:', error);
  }
  return new Response(null, { status: 204 });
}
