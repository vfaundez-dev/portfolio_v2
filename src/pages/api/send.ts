import { Resend } from 'resend';
const resend = new Resend(import.meta.env.SECRET_RESEND_API_KEY);

export async function POST({ request }: { request: Request }) {
  try {
    const dataRequest = await request.json();
    // Email Template
    const email = {
      from: 'VFH Portfolio <onboarding@resend.dev>',
      to: 'v.faundezh@gmail.com',
      subject: `Nuevo mensaje de ${dataRequest.full_name}`,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${dataRequest.full_name}</p>
        <p><strong>Correo electrónico:</strong> ${dataRequest.email}</p>
        <p><strong>Mensaje:</strong> ${dataRequest.message}</p>
      `,
    };

    // Sending Email
    const { data, error } = await resend.emails.send(email);
    
    // Error sending email
    if (error) {
      console.error('Error sending email:', error);
      return new Response(
        JSON.stringify({ success: false, error: error }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(JSON.stringify({ success: true, data: data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error sending email:', error);

    let errorMessage = 'Error processing request...';
    let statusCode = 400;

    // Check authentication error (invalid token)
    if (error instanceof Error && error.message.includes('Authentication')) {
      errorMessage = 'Authentication error...';
      statusCode = 401;
    }

    return new Response(
      JSON.stringify({ success: false, message: errorMessage }),
      {
        status: statusCode,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}