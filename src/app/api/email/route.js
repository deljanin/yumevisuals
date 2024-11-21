import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request) {
  const { extra, name, email, message } = await request.json();
  if (extra !== undefined && extra.length > 0) {
    return;
  }

  const htmlContent = `
    <h3>Vebsajt kontakt</h3>
    <table style="width: 50%; border-collapse: collapse;">
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Ime</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Email</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Poruka</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${message}</td>
      </tr>

    </table>`;

  const msg = {
    to: 'pecadeljanin@gmail.com',
    from: 'yume.website@vanu.software',
    subject: 'Vebsajt kontakt',
    text: `Vebsajt kontakt informacije: ime: ${name}; email: ${email}; poruka: ${message}`,
    html: htmlContent,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json('Email sent');
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
