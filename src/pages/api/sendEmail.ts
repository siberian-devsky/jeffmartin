import type { APIRoute } from "astro";
import emailjs from '@emailjs/nodejs';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, message } = body;

  try {
    await emailjs.send(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.EMAILJS_TEMPLATE_ID,
        {
            fromName: name,
            fromEmail: email,
            message: message
        },
        {
            publicKey: import.meta.env.EMAILJS_PUBLIC_KEY,
            privateKey: import.meta.env.EMAILJS_PRIVATE_KEY
        }
    );

    return new Response(JSON.stringify({ success: true}), {
        status: 200,
        headers: { 'Content-Type': 'application/json'}
    })
  } catch(error) {
    console.error('Server Error: failed to send email', error)
    return new Response(JSON.stringify({ success: false}), {
        status: 500,
        headers: { 'Content-Type': 'application/json'}
    })
  }
};