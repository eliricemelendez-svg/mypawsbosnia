import { Resend } from 'resend';

const prerender = false;
const resend = new Resend(undefined                              );
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, dogName, dogSlug, country } = body;
    if (!email || !name) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }
    const isUK = country?.toLowerCase().includes("united kingdom") || country?.toLowerCase().includes("uk");
    const homeCheckText = isUK ? "In the UK, this is usually a friendly video call." : "In Germany and Austria, the home check is usually done in person.";
    const dogLine = dogName && dogName !== "Not sure yet" ? `We're so happy you're interested in <strong>${dogName}</strong>.` : `We're so happy you're interested in giving a rescue dog a loving home.`;
    const dogImageURL = dogSlug ? `https://mypawsbosnia.org/og/${dogSlug}.jpg` : null;
    const dogProfileLink = dogSlug ? `<a href="https://mypawsbosnia.org/adopt/${dogSlug}" style="color: #2A9D8F; font-weight: 600; text-decoration: none; border-bottom: 1px solid #2A9D8F;">View ${dogName}'s full profile &rarr;</a>` : "";
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
                  <td style="background: linear-gradient(135deg, #2A9D8F 0%, #1a7a6f 100%); padding: 36px 32px; text-align: center;">
                    <div style="width: 56px; height: 56px; background-color: rgba(255,255,255,0.2); border-radius: 50%; margin: 0 auto 16px; line-height: 56px; font-size: 28px;">&#10003;</div>
                    <h1 style="color: #ffffff; font-size: 24px; margin: 0; font-weight: 700; letter-spacing: -0.3px;">Application received!</h1>
                    <p style="color: rgba(255,255,255,0.85); font-size: 14px; margin: 8px 0 0;">We'll be in touch soon.</p>
                  </td>
                </tr>

                ${dogImageURL ? `
                <!-- Dog photo -->
                <tr>
                  <td style="padding: 28px 28px 0;">
                    <img src="${dogImageURL}" alt="${dogName}" style="width: 100%; border-radius: 14px; display: block;" />
                  </td>
                </tr>
                ` : ""}

                <!-- Greeting -->
                <tr>
                  <td style="padding: 28px 28px 0;">
                    <p style="font-size: 17px; color: #1E293B; margin: 0 0 16px; font-weight: 600;">Hi ${name},</p>
                    <p style="font-size: 15px; color: #475569; margin: 0 0 12px; line-height: 1.7;">Thank you for your application!</p>
                    <p style="font-size: 15px; color: #475569; margin: 0; line-height: 1.7;">${dogLine}</p>
                    ${dogProfileLink ? `<p style="margin: 12px 0 0;">${dogProfileLink}</p>` : ""}
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding: 24px 28px;">
                    <div style="height: 1px; background-color: #f1f1f1;"></div>
                  </td>
                </tr>

                <!-- What happens next -->
                <tr>
                  <td style="padding: 0 28px;">
                    <h2 style="font-size: 15px; color: #1E293B; margin: 0 0 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; font-size: 12px;">What happens next</h2>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="36" valign="top" style="padding-bottom: 20px;">
                          <div style="width: 28px; height: 28px; background-color: #2A9D8F; border-radius: 50%; color: #fff; font-size: 13px; font-weight: 700; text-align: center; line-height: 28px;">1</div>
                        </td>
                        <td style="padding-left: 12px; padding-bottom: 20px;">
                          <p style="font-size: 14px; color: #1E293B; margin: 0 0 2px; font-weight: 600;">We review your application</p>
                          <p style="font-size: 13px; color: #64748B; margin: 0; line-height: 1.5;">We'll contact you via WhatsApp within 24 hours.</p>
                        </td>
                      </tr>
                      <tr>
                        <td width="36" valign="top" style="padding-bottom: 20px;">
                          <div style="width: 28px; height: 28px; background-color: #2A9D8F; border-radius: 50%; color: #fff; font-size: 13px; font-weight: 700; text-align: center; line-height: 28px;">2</div>
                        </td>
                        <td style="padding-left: 12px; padding-bottom: 20px;">
                          <p style="font-size: 14px; color: #1E293B; margin: 0 0 2px; font-weight: 600;">Home check</p>
                          <p style="font-size: 13px; color: #64748B; margin: 0; line-height: 1.5;">${homeCheckText} It's quick and friendly.</p>
                        </td>
                      </tr>
                      <tr>
                        <td width="36" valign="top">
                          <div style="width: 28px; height: 28px; background-color: #2A9D8F; border-radius: 50%; color: #fff; font-size: 13px; font-weight: 700; text-align: center; line-height: 28px;">3</div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p style="font-size: 14px; color: #1E293B; margin: 0 0 2px; font-weight: 600;">Transport to your door</p>
                          <p style="font-size: 13px; color: #64748B; margin: 0; line-height: 1.5;">Once approved, we organise licensed transport directly to you.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding: 24px 28px;">
                    <div style="height: 1px; background-color: #f1f1f1;"></div>
                  </td>
                </tr>

                <!-- While you wait -->
                <tr>
                  <td style="padding: 0 28px;">
                    <h2 style="font-size: 12px; color: #1E293B; margin: 0 0 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">While you wait</h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 10px 14px; background-color: #FAF8F5; border-radius: 10px; margin-bottom: 8px;">
                          <a href="https://mypawsbosnia.org/blog/what-to-buy-before-your-rescue-dog-arrives" style="color: #2A9D8F; font-size: 14px; font-weight: 500; text-decoration: none;">What to buy before your rescue dog arrives &rarr;</a>
                        </td>
                      </tr>
                      <tr><td style="height: 8px;"></td></tr>
                      <tr>
                        <td style="padding: 10px 14px; background-color: #FAF8F5; border-radius: 10px;">
                          <a href="https://mypawsbosnia.org/blog/your-first-week-with-a-rescue-dog" style="color: #2A9D8F; font-size: 14px; font-weight: 500; text-decoration: none;">Your first week with a rescue dog &rarr;</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA -->
                <tr>
                  <td style="padding: 28px; text-align: center;">
                    <p style="font-size: 14px; color: #64748B; margin: 0 0 16px;">Have a question? Reach us on Facebook:</p>
                    <a href="https://www.facebook.com/profile.php?id=61590021437450" style="display: inline-block; padding: 14px 32px; background-color: #1877F2; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 50px;">Message us on Facebook</a>
                  </td>
                </tr>

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
    await resend.emails.send({
      from: "My Paws Bosnia <hello@mypawsbosnia.org>",
      to: email,
      subject: dogName && dogName !== "Not sure yet" ? `We've received your application for ${dogName}!` : `We've received your adoption application!`,
      html
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
