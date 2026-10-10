export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, dogName, dogSlug, country } = body;

    if (!email || !name) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const isUK = country?.toLowerCase().includes('united kingdom') || country?.toLowerCase().includes('uk');
    const homeCheckText = isUK
      ? 'In the UK, this is usually a friendly video call.'
      : 'In Germany and Austria, the home check is usually done in person.';

    const dogLine = dogName && dogName !== 'Not sure yet'
      ? `We're so happy you're interested in <strong>${dogName}</strong>.`
      : `We're so happy you're interested in giving a rescue dog a loving home.`;

    const dogImageURL = dogSlug
      ? `https://mypawsbosnia.org/og/${dogSlug}.jpg`
      : null;

    const dogProfileLink = dogSlug
      ? `<a href="https://mypawsbosnia.org/adopt/${dogSlug}" style="color: #2A9D8F; text-decoration: underline;">View ${dogName}'s full profile</a>`
      : '';

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin: 0; padding: 0; background-color: #FAF8F5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF8F5; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background-color: #2A9D8F; padding: 32px 24px; text-align: center;">
              <span style="font-size: 32px;">🐾</span>
              <h1 style="color: #ffffff; font-size: 22px; margin: 8px 0 0; font-weight: 600;">Application received!</h1>
            </td>
          </tr>

          ${dogImageURL ? `
          <!-- Dog photo -->
          <tr>
            <td style="padding: 24px 24px 0;">
              <img src="${dogImageURL}" alt="${dogName}" style="width: 100%; border-radius: 12px; display: block;" />
            </td>
          </tr>
          ` : ''}

          <!-- Greeting -->
          <tr>
            <td style="padding: 24px 24px 0;">
              <p style="font-size: 16px; color: #1E293B; margin: 0 0 8px;">Hi ${name},</p>
              <p style="font-size: 16px; color: #475569; margin: 0; line-height: 1.6;">
                Thank you for your application! ${dogLine}
              </p>
              ${dogProfileLink ? `<p style="margin: 8px 0 0;">${dogProfileLink}</p>` : ''}
            </td>
          </tr>

          <!-- What happens next -->
          <tr>
            <td style="padding: 24px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF8F5; border-radius: 12px; padding: 20px;">
                <tr>
                  <td>
                    <h2 style="font-size: 16px; color: #1E293B; margin: 0 0 16px; font-weight: 600;">What happens next?</h2>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="28" valign="top" style="padding-bottom: 12px;">
                          <div style="width: 24px; height: 24px; background-color: #2A9D8F; border-radius: 50%; color: #fff; font-size: 12px; font-weight: 700; text-align: center; line-height: 24px;">1</div>
                        </td>
                        <td style="padding-left: 8px; padding-bottom: 12px; font-size: 14px; color: #475569; line-height: 1.5;">
                          We'll review your application and <strong>contact you via WhatsApp within 24 hours</strong>.
                        </td>
                      </tr>
                      <tr>
                        <td width="28" valign="top" style="padding-bottom: 12px;">
                          <div style="width: 24px; height: 24px; background-color: #2A9D8F; border-radius: 50%; color: #fff; font-size: 12px; font-weight: 700; text-align: center; line-height: 24px;">2</div>
                        </td>
                        <td style="padding-left: 8px; padding-bottom: 12px; font-size: 14px; color: #475569; line-height: 1.5;">
                          We'll arrange a <strong>home check</strong>. ${homeCheckText}
                        </td>
                      </tr>
                      <tr>
                        <td width="28" valign="top">
                          <div style="width: 24px; height: 24px; background-color: #2A9D8F; border-radius: 50%; color: #fff; font-size: 12px; font-weight: 700; text-align: center; line-height: 24px;">3</div>
                        </td>
                        <td style="padding-left: 8px; font-size: 14px; color: #475569; line-height: 1.5;">
                          Once approved, we'll organise <strong>licensed transport</strong> directly to your door.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- While you wait -->
          <tr>
            <td style="padding: 0 24px 24px;">
              <h2 style="font-size: 16px; color: #1E293B; margin: 0 0 12px; font-weight: 600;">While you wait</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 8px;">
                    <a href="https://mypawsbosnia.org/blog/what-to-buy-before-your-rescue-dog-arrives" style="color: #2A9D8F; font-size: 14px; text-decoration: underline;">What to buy before your rescue dog arrives</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://mypawsbosnia.org/blog/your-first-week-with-a-rescue-dog" style="color: #2A9D8F; font-size: 14px; text-decoration: underline;">Your first week with a rescue dog</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding: 0 24px 24px; text-align: center;">
              <p style="font-size: 14px; color: #475569; margin: 0 0 12px;">Can't wait? Reach us directly:</p>
              <a href="https://wa.me/38765628636" style="display: inline-block; padding: 12px 28px; background-color: #25D366; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 50px;">Message us on WhatsApp</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 24px; border-top: 1px solid #f1f1f1; text-align: center;">
              <p style="font-size: 12px; color: #94A3B8; margin: 0;">My Paws Bosnia</p>
              <p style="font-size: 12px; color: #94A3B8; margin: 4px 0 0;">Rescuing dogs in Bosnia, finding families across Europe.</p>
              <p style="font-size: 12px; margin: 8px 0 0;">
                <a href="https://mypawsbosnia.org" style="color: #2A9D8F; text-decoration: none;">mypawsbosnia.org</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    await resend.emails.send({
      from: 'My Paws Bosnia <hello@mypawsbosnia.org>',
      to: email,
      subject: dogName && dogName !== 'Not sure yet'
        ? `We've received your application for ${dogName}!`
        : `We've received your adoption application!`,
      html,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
};
