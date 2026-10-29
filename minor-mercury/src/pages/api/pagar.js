import { MercadoPagoConfig, Preference } from 'mercadopago';

export const POST = async ({ request }) => {
  try {
    // 1. Recibimos los productos que el cliente tiene en su carrito
    const body = await request.json();
    
    // 2. Nos autenticamos de forma segura usando tu llave del .env
    const client = new MercadoPagoConfig({ 
      accessToken: import.meta.env.MERCADOPAGO_ACCESS_TOKEN 
    });

    // 3. Creamos la orden de cobro
    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: body.items, // Los productos formateados
        back_urls: {
          success: "https://www.herbium.cl/", // A donde vuelve si paga con éxito
          failure: "https://www.herbium.cl/", // A donde vuelve si falla la tarjeta
          pending: "https://www.herbium.cl/"
        },
        auto_return: "approved"
      }
    });

    // 4. Le enviamos la URL de pago segura (init_point) al navegador
    return new Response(JSON.stringify({ url: result.init_point }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });

  } catch (error) {
    console.error("Error en Mercado Pago:", error);
    return new Response(JSON.stringify({ error: "Error al generar el pago" }), { status: 500 });
  }
};