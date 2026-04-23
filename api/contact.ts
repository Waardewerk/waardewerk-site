import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY, {
  baseUrl: 'https://api.eu.resend.com',
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method \!== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { voornaam, achternaam, bedrijf, email, gemeente, vraag } = req.body as Record<string, string>;

  if (\!voornaam || \!achternaam || \!email || \!vraag) {
    return res.status(400).json({ error: 'Verplichte velden ontbreken' });
  }

  try {
    const result = await resend.emails.send({
      from: 'Waardewerk formulier <noreply@waardewerk.org>',
      to: 'info@waardewerk.org',
      replyTo: email,
      subject: `Nieuwe aanvraag van ${voornaam} ${achternaam}`,
      html: `
        <h2>Nieuwe aanvraag via waardewerk.org</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td><strong>Naam</strong></td><td>${voornaam} ${achternaam}</td></tr>
          ${bedrijf ? `<tr><td><strong>Bedrijf</strong></td><td>${bedrijf}</td></tr>` : ''}
          <tr><td><strong>E-mail</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          ${gemeente ? `<tr><td><strong>Gemeente</strong></td><td>${gemeente}</td></tr>` : ''}
          <tr><td><strong>Vraag</strong></td><td style="white-space:pre-wrap">${vraag}</td></tr>
        </table>
      `,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return res.status(500).json({ error: result.error.message });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend exception:', err);
    return res.status(500).json({ error: 'Verzenden mislukt' });
  }
}
