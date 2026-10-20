export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const tierLabels: Record<string, Record<string, string>> = {
  en: { month: '\u00a314 \u2014 1 month', quarter: '\u00a342 \u2014 3 months', year: '\u00a3168 \u2014 1 year', other: 'Other amount' },
  de: { month: '\u20ac17 \u2014 1 Monat', quarter: '\u20ac51 \u2014 3 Monate', year: '\u20ac204 \u2014 1 Jahr', other: 'Anderer Betrag' },
  nl: { month: '\u20ac17 \u2014 1 maand', quarter: '\u20ac51 \u2014 3 maanden', year: '\u20ac204 \u2014 1 jaar', other: 'Ander bedrag' },
  fr: { month: '17\u00a0\u20ac \u2014 1 mois', quarter: '51\u00a0\u20ac \u2014 3 mois', year: '204\u00a0\u20ac \u2014 1 an', other: 'Autre montant' },
};

const thankYouEmail: Record<string, Record<string, string>> = {
  en: {
    subject: 'Thank you for sponsoring %DOG%!',
    heading: 'You are amazing!',
    body: 'Thank you so much for sponsoring <strong>%DOG%</strong>. Your donation goes directly to keeping %DOG% fed, healthy, and safe at our shelter in Bosnia.',
    update: 'We will send you monthly photo updates of %DOG% so you can see how your sponsorship makes a difference.',
    closing: 'From all of us (and all 60 dogs) at My Paws Bosnia, thank you.',
  },
  de: {
    subject: 'Danke f\u00fcr deine Patenschaft f\u00fcr %DOG%!',
    heading: 'Du bist gro\u00dfartig!',
    body: 'Vielen Dank, dass du <strong>%DOG%</strong> sponserst. Deine Spende hilft direkt dabei, %DOG% im Tierheim in Bosnien zu f\u00fcttern, gesund und sicher zu halten.',
    update: 'Wir senden dir monatlich Fotos von %DOG%, damit du sehen kannst, welchen Unterschied deine Patenschaft macht.',
    closing: 'Von uns allen (und allen 60 Hunden) bei My Paws Bosnia: Danke!',
  },
  nl: {
    subject: 'Bedankt voor het sponsoren van %DOG%!',
    heading: 'Je bent geweldig!',
    body: 'Heel erg bedankt voor het sponsoren van <strong>%DOG%</strong>. Je donatie gaat rechtstreeks naar het voeden, gezond en veilig houden van %DOG% in ons asiel in Bosni\u00eb.',
    update: 'We sturen je maandelijks foto-updates van %DOG% zodat je kunt zien hoe jouw sponsoring een verschil maakt.',
    closing: 'Van ons allemaal (en alle 60 honden) bij My Paws Bosnia: bedankt!',
  },
  fr: {
    subject: 'Merci de sponsoriser %DOG% !',
    heading: 'Vous \u00eates formidable !',
    body: 'Merci infiniment de sponsoriser <strong>%DOG%</strong>. Votre don va directement \u00e0 nourrir %DOG%, le garder en bonne sant\u00e9 et en s\u00e9curit\u00e9 dans notre refuge en Bosnie.',
    update: 'Nous vous enverrons des photos mensuelles de %DOG% pour que vous puissiez voir la diff\u00e9rence que votre parrainage fait.',
    closing: 'De nous tous (et des 60 chiens) de My Paws Bosnia : merci !',
  },
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { firstName, email, tier, dogName, dogSlug, lang: rawLang } = body;

    if (!email || !firstName) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const lang = (rawLang && rawLang in thankYouEmail) ? rawLang : 'en';
    const t = thankYouEmail[lang];
    const tierText = tierLabels[lang]?.[tier] || tier || '';
    const langPrefix = lang === 'en' ? '' : `/${lang}`;

    const dogImageURL = dogSlug ? `https://mypawsbosnia.org/og/${dogSlug}.jpg` : null;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin: 0; padding: 0; background-color: #FAF8F5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF8F5; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px;">

          <!-- Logo -->
          <tr>
            <td style="text-align: center; padding-bottom: 24px;">
              <span style="font-size: 28px; vertical-align: middle;">🐾</span>
              <span style="font-size: 18px; font-weight: 700; color: #1E293B; vertical-align: middle; margin-left: 6px; letter-spacing: -0.3px;">My Paws Bosnia</span>
            </td>
          </tr>

          <!-- Main card -->
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">

                <!-- Header banner -->
                <tr>
                  <td style="background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); padding: 36px 32px; text-align: center;">
                    <div style="font-size: 40px; margin-bottom: 12px;">💛</div>
                    <h1 style="color: #ffffff; font-size: 24px; margin: 0; font-weight: 700;">${t.heading}</h1>
                  </td>
                </tr>

                ${dogImageURL ? `
                <!-- Dog photo -->
                <tr>
                  <td style="padding: 28px 28px 0;">
                    <img src="${dogImageURL}" alt="${dogName}" style="width: 100%; border-radius: 14px; display: block;" />
                  </td>
                </tr>
                ` : ''}

                <!-- Body -->
                <tr>
                  <td style="padding: 28px;">
                    <p style="font-size: 17px; color: #1E293B; margin: 0 0 16px; font-weight: 600;">Hi ${firstName},</p>
                    <p style="font-size: 15px; color: #475569; margin: 0 0 16px; line-height: 1.7;">${t.body.replace(/%DOG%/g, dogName)}</p>
                    <p style="font-size: 15px; color: #475569; margin: 0 0 16px; line-height: 1.7;">${t.update.replace(/%DOG%/g, dogName)}</p>
                    <p style="font-size: 15px; color: #475569; margin: 0; line-height: 1.7;">${t.closing}</p>
                  </td>
                </tr>

                <!-- Dog profile link -->
                ${dogSlug ? `
                <tr>
                  <td style="padding: 0 28px 28px; text-align: center;">
                    <a href="https://mypawsbosnia.org${langPrefix}/adopt/${dogSlug}" style="display: inline-block; padding: 14px 32px; background-color: #2A9D8F; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 50px;">See ${dogName}'s profile</a>
                  </td>
                </tr>
                ` : ''}

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 28px 16px; text-align: center;">
              <p style="font-size: 12px; color: #94A3B8; margin: 0;">My Paws Bosnia</p>
              <p style="font-size: 12px; color: #94A3B8; margin: 4px 0 0;">Rescuing dogs in Bosnia, finding families across Europe.</p>
              <p style="font-size: 12px; margin: 12px 0 0;">
                <a href="https://mypawsbosnia.org" style="color: #2A9D8F; text-decoration: none; font-weight: 500;">mypawsbosnia.org</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const subject = t.subject.replace('%DOG%', dogName || 'a dog');

    // Send thank-you email to sponsor AND notification to admin in parallel
    const notificationHtml = `
      <h2>New Sponsor!</h2>
      <p><strong>Name:</strong> ${firstName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Dog:</strong> ${dogName || 'General'}</p>
      <p><strong>Tier:</strong> ${tierText}</p>
      <p><strong>Language:</strong> ${lang}</p>
      <p>Reply to this person to thank them personally!</p>
    `;

    // Log to Google Sheet, send thank-you email, and notify admin in parallel
    const sheetUrl = 'https://script.google.com/macros/s/AKfycbyw8WRcLhyNX1R7BNHtpadxZFR34UAvtPR8egneG8mXDGh_Teln4-GpSuTrDtox45OrJA/exec';

    const [thankYouResult, notifyResult, sheetResult] = await Promise.allSettled([
      resend.emails.send({
        from: 'My Paws Bosnia <hello@mypawsbosnia.org>',
        to: email,
        subject,
        html,
      }),
      resend.emails.send({
        from: 'My Paws Bosnia <hello@mypawsbosnia.org>',
        to: 'donate2mypaws@gmail.com',
        subject: `New sponsor: ${firstName} for ${dogName || 'general'} (${tierText})`,
        html: notificationHtml,
        replyTo: email,
      }),
      fetch(sheetUrl, {
        method: 'POST',
        body: JSON.stringify({ firstName, email, dogName: dogName || '', dogSlug: dogSlug || '', tier: tierText, lang }),
      }),
    ]);

    if (thankYouResult.status === 'rejected') {
      console.error('Thank-you email error:', thankYouResult.reason);
    }
    if (notifyResult.status === 'rejected') {
      console.error('Notification email error:', notifyResult.reason);
    }
    if (sheetResult.status === 'rejected') {
      console.error('Sheet log error:', sheetResult.reason);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Sponsor API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process' }), { status: 500 });
  }
};
