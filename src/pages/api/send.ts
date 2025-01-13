import { Resend } from 'resend';
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }: { request: Request }) {
  try {

    const { recaptcha, ...dataRequest } = await request.json();

    /// Validar reCAPTCHA
    const isRecaptchaValid = await validateRecaptcha(recaptcha);
    if (!isRecaptchaValid) {
      return new Response(
        JSON.stringify({ success: false, error: 'reCAPTCHA validation failed' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Clean request data
    const sanitizedData = sanitizeRequestData(dataRequest);
    // Email Template
    const email = {
      from: 'VFH Portfolio <onboarding@resend.dev>',
      to: 'v.faundezh@gmail.com',
      subject: 'Mensaje desde tu portafolio VFH',
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${sanitizedData.full_name}</p>
        <p><strong>Asunto:</strong> ${sanitizedData.subject}</p>
        <p><strong>Correo electrónico:</strong> ${sanitizedData.email}</p>
        <p><strong>Mensaje:</strong> ${sanitizedData.message}</p>
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

function sanitizeValue(value: string): string {
  let sanitizedValue = value.trim();

  // Replace potentially malicious characters
  sanitizedValue = sanitizedValue
    .replace(/</g, "&lt;") // Replace '<' to '&lt;'
    .replace(/>/g, "&gt;") // Replace '>' to '&gt;'
    .replace(/"/g, "&quot;") // Replace '"' to '&quot;'
    .replace(/'/g, "&#39;"); // Replace "'" to '&#39;'

  return sanitizedValue;
}

function sanitizeRequestData(data: Record<string, string>): Record<string, string> {
  const sanitizedData: Record<string, string> = {};

  // Iterar sobre las claves del objeto y sanitizar los valores
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      sanitizedData[key] = sanitizeValue(data[key]);
    }
  }

  return sanitizedData;
}

async function validateRecaptcha(recaptchaToken: string): Promise<boolean> {
  try {

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: import.meta.env.RECAPTCHA_SECRET_KEY || '',
        response: recaptchaToken,
      }),
    });

    const result = await response.json();
    return result.success;

  } catch (error) {
    console.error('Error validating reCAPTCHA:', error);
    return false;
  }
}