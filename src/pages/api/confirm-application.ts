export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const i18n: Record<string, Record<string, string>> = {
  en: {
    headerTitle: 'Application received!',
    headerSub: "We'll be in touch soon.",
    greeting: 'Hi',
    thanks: 'Thank you for your application!',
    dogInterest: "We're so happy you're interested in <strong>%DOG%</strong>.",
    dogGeneric: "We're so happy you're interested in giving a rescue dog a loving home.",
    viewProfile: "View %DOG%'s full profile",
    nextTitle: 'What happens next',
    step1Title: 'We review your application',
    step1Text: "We'll contact you via WhatsApp within 24 hours.",
    step2Title: 'Home check',
    homeCheckUK: "In the UK, this is usually a friendly video call. It's quick and friendly.",
    homeCheckDE: "In Germany and Austria, the home check is usually done in person. It's quick and friendly.",
    step3Title: 'Transport to your door',
    step3Text: 'Once approved, we organise licensed transport directly to you.',
    waitTitle: 'While you wait',
    blog1: 'What to buy before your rescue dog arrives',
    blog2: 'Your first week with a rescue dog',
    ctaText: 'Have a question? Reach us on Facebook:',
    ctaButton: 'Message us on Facebook',
    footer: 'Rescuing dogs in Bosnia, finding families across Europe.',
    subjectDog: "We've received your application for %DOG%!",
    subjectGeneric: "We've received your adoption application!",
  },
  de: {
    headerTitle: 'Bewerbung eingegangen!',
    headerSub: 'Wir melden uns bald bei dir.',
    greeting: 'Hallo',
    thanks: 'Vielen Dank für deine Bewerbung!',
    dogInterest: 'Wir freuen uns sehr, dass du dich für <strong>%DOG%</strong> interessierst.',
    dogGeneric: 'Wir freuen uns sehr, dass du einem Rettungshund ein liebevolles Zuhause geben möchtest.',
    viewProfile: '%DOG%s vollständiges Profil ansehen',
    nextTitle: 'Was passiert als nächstes',
    step1Title: 'Wir prüfen deine Bewerbung',
    step1Text: 'Wir kontaktieren dich innerhalb von 24 Stunden per WhatsApp.',
    step2Title: 'Hausbesuch',
    homeCheckUK: 'In Großbritannien ist es meistens ein Videoanruf. Kurz und freundlich.',
    homeCheckDE: 'In Deutschland und Österreich findet der Hausbesuch in der Regel persönlich statt. Kurz und freundlich.',
    step3Title: 'Transport zu dir nach Hause',
    step3Text: 'Nach der Genehmigung organisieren wir den lizenzierten Transport direkt zu dir.',
    waitTitle: 'Während du wartest',
    blog1: 'Was du kaufen solltest, bevor dein Rettungshund ankommt',
    blog2: 'Deine erste Woche mit einem Rettungshund',
    ctaText: 'Hast du eine Frage? Schreib uns auf Facebook:',
    ctaButton: 'Nachricht auf Facebook',
    footer: 'Wir retten Hunde in Bosnien und finden Familien in ganz Europa.',
    subjectDog: 'Wir haben deine Bewerbung für %DOG% erhalten!',
    subjectGeneric: 'Wir haben deine Adoptionsbewerbung erhalten!',
  },
  nl: {
    headerTitle: 'Aanvraag ontvangen!',
    headerSub: 'We nemen snel contact met je op.',
    greeting: 'Hallo',
    thanks: 'Bedankt voor je aanvraag!',
    dogInterest: 'We zijn zo blij dat je geïnteresseerd bent in <strong>%DOG%</strong>.',
    dogGeneric: 'We zijn zo blij dat je een reddingshond een liefdevol thuis wilt geven.',
    viewProfile: 'Bekijk het volledige profiel van %DOG%',
    nextTitle: 'Wat gebeurt er nu',
    step1Title: 'We beoordelen je aanvraag',
    step1Text: 'We nemen binnen 24 uur contact met je op via WhatsApp.',
    step2Title: 'Huiscontrole',
    homeCheckUK: 'In het VK is dit meestal een videogesprek. Kort en vriendelijk.',
    homeCheckDE: 'In Duitsland en Oostenrijk is de huiscontrole meestal persoonlijk. Kort en vriendelijk.',
    step3Title: 'Transport naar je deur',
    step3Text: 'Na goedkeuring regelen we gelicentieerd transport rechtstreeks naar jou.',
    waitTitle: 'Terwijl je wacht',
    blog1: 'Wat je moet kopen voordat je reddingshond aankomt',
    blog2: 'Je eerste week met een reddingshond',
    ctaText: 'Heb je een vraag? Neem contact op via Facebook:',
    ctaButton: 'Stuur ons een bericht',
    footer: 'We redden honden in Bosnië en vinden gezinnen in heel Europa.',
    subjectDog: 'We hebben je aanvraag voor %DOG% ontvangen!',
    subjectGeneric: 'We hebben je adoptieaanvraag ontvangen!',
  },
  fr: {
    headerTitle: 'Demande reçue !',
    headerSub: 'Nous vous contacterons bientôt.',
    greeting: 'Bonjour',
    thanks: 'Merci pour votre demande !',
    dogInterest: 'Nous sommes ravis que vous vous intéressiez à <strong>%DOG%</strong>.',
    dogGeneric: "Nous sommes ravis que vous souhaitiez offrir un foyer aimant à un chien de sauvetage.",
    viewProfile: 'Voir le profil complet de %DOG%',
    nextTitle: 'Et maintenant',
    step1Title: 'Nous examinons votre demande',
    step1Text: 'Nous vous contacterons via WhatsApp dans les 24 heures.',
    step2Title: 'Visite à domicile',
    homeCheckUK: "Au Royaume-Uni, c'est en général un appel vidéo. Rapide et convivial.",
    homeCheckDE: "En Allemagne et en Autriche, la visite se fait en personne. Rapide et convivial.",
    step3Title: 'Transport à votre porte',
    step3Text: "Une fois approuvé, nous organisons le transport agréé directement chez vous.",
    waitTitle: 'En attendant',
    blog1: "Que faut-il acheter avant l'arrivée de votre chien",
    blog2: 'Votre première semaine avec un chien de sauvetage',
    ctaText: 'Une question ? Contactez-nous sur Facebook :',
    ctaButton: 'Nous écrire sur Facebook',
    footer: 'Nous sauvons des chiens en Bosnie et trouvons des familles à travers l'Europe.',
    subjectDog: 'Nous avons reçu votre demande pour %DOG% !',
    subjectGeneric: "Nous avons reçu votre demande d'adoption !",
  },
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, dogName, dogSlug, country, lang: rawLang } = body;

    if (!email || !name) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const lang = (rawLang && rawLang in i18n) ? rawLang : 'en';
    const t = i18n[lang];
    const langPrefix = lang === 'en' ? '' : `/${lang}`;

    const isUK = country?.toLowerCase().includes('united kingdom') || country?.toLowerCase().includes('uk');
    const homeCheckText = isUK ? t.homeCheckUK : t.homeCheckDE;

    const hasDog = dogName && dogName !== 'Not sure yet';
    const dogLine = hasDog
      ? t.dogInterest.replace('%DOG%', dogName)
      : t.dogGeneric;

    const dogImageURL = dogSlug
      ? `https://mypawsbosnia.org/og/${dogSlug}.jpg`
      : null;

    const dogProfileLink = dogSlug
      ? `<a href="https://mypawsbosnia.org${langPrefix}/adopt/${dogSlug}" style="color: #2A9D8F; font-weight: 600; text-decoration: none; border-bottom: 1px solid #2A9D8F;">${t.viewProfile.replace('%DOG%', dogName)} &rarr;</a>`
      : '';

    const blog1Url = `https://mypawsbosnia.org${langPrefix}/blog/what-to-buy-before-your-rescue-dog-arrives`;
    const blog2Url = `https://mypawsbosnia.org${langPrefix}/blog/your-first-week-with-a-rescue-dog`;

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
                    <h1 style="color: #ffffff; font-size: 24px; margin: 0; font-weight: 700; letter-spacing: -0.3px;">${t.headerTitle}</h1>
                    <p style="color: rgba(255,255,255,0.85); font-size: 14px; margin: 8px 0 0;">${t.headerSub}</p>
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

                <!-- Greeting -->
                <tr>
                  <td style="padding: 28px 28px 0;">
                    <p style="font-size: 17px; color: #1E293B; margin: 0 0 16px; font-weight: 600;">${t.greeting} ${name},</p>
                    <p style="font-size: 15px; color: #475569; margin: 0 0 12px; line-height: 1.7;">${t.thanks}</p>
                    <p style="font-size: 15px; color: #475569; margin: 0; line-height: 1.7;">${dogLine}</p>
                    ${dogProfileLink ? `<p style="margin: 12px 0 0;">${dogProfileLink}</p>` : ''}
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
                    <h2 style="font-size: 12px; color: #1E293B; margin: 0 0 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${t.nextTitle}</h2>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="36" valign="top" style="padding-bottom: 20px;">
                          <div style="width: 28px; height: 28px; background-color: #2A9D8F; border-radius: 50%; color: #fff; font-size: 13px; font-weight: 700; text-align: center; line-height: 28px;">1</div>
                        </td>
                        <td style="padding-left: 12px; padding-bottom: 20px;">
                          <p style="font-size: 14px; color: #1E293B; margin: 0 0 2px; font-weight: 600;">${t.step1Title}</p>
                          <p style="font-size: 13px; color: #64748B; margin: 0; line-height: 1.5;">${t.step1Text}</p>
                        </td>
                      </tr>
                      <tr>
                        <td width="36" valign="top" style="padding-bottom: 20px;">
                          <div style="width: 28px; height: 28px; background-color: #2A9D8F; border-radius: 50%; color: #fff; font-size: 13px; font-weight: 700; text-align: center; line-height: 28px;">2</div>
                        </td>
                        <td style="padding-left: 12px; padding-bottom: 20px;">
                          <p style="font-size: 14px; color: #1E293B; margin: 0 0 2px; font-weight: 600;">${t.step2Title}</p>
                          <p style="font-size: 13px; color: #64748B; margin: 0; line-height: 1.5;">${homeCheckText}</p>
                        </td>
                      </tr>
                      <tr>
                        <td width="36" valign="top">
                          <div style="width: 28px; height: 28px; background-color: #2A9D8F; border-radius: 50%; color: #fff; font-size: 13px; font-weight: 700; text-align: center; line-height: 28px;">3</div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p style="font-size: 14px; color: #1E293B; margin: 0 0 2px; font-weight: 600;">${t.step3Title}</p>
                          <p style="font-size: 13px; color: #64748B; margin: 0; line-height: 1.5;">${t.step3Text}</p>
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
                    <h2 style="font-size: 12px; color: #1E293B; margin: 0 0 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${t.waitTitle}</h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 10px 14px; background-color: #FAF8F5; border-radius: 10px; margin-bottom: 8px;">
                          <a href="${blog1Url}" style="color: #2A9D8F; font-size: 14px; font-weight: 500; text-decoration: none;">${t.blog1} &rarr;</a>
                        </td>
                      </tr>
                      <tr><td style="height: 8px;"></td></tr>
                      <tr>
                        <td style="padding: 10px 14px; background-color: #FAF8F5; border-radius: 10px;">
                          <a href="${blog2Url}" style="color: #2A9D8F; font-size: 14px; font-weight: 500; text-decoration: none;">${t.blog2} &rarr;</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA -->
                <tr>
                  <td style="padding: 28px; text-align: center;">
                    <p style="font-size: 14px; color: #64748B; margin: 0 0 16px;">${t.ctaText}</p>
                    <a href="https://www.facebook.com/profile.php?id=61590021437450" style="display: inline-block; padding: 14px 32px; background-color: #1877F2; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 50px;">${t.ctaButton}</a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 28px 16px; text-align: center;">
              <p style="font-size: 12px; color: #94A3B8; margin: 0;">My Paws Bosnia</p>
              <p style="font-size: 12px; color: #94A3B8; margin: 4px 0 0;">${t.footer}</p>
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

    const subject = hasDog
      ? t.subjectDog.replace('%DOG%', dogName)
      : t.subjectGeneric;

    await resend.emails.send({
      from: 'My Paws Bosnia <hello@mypawsbosnia.org>',
      to: email,
      subject,
      html,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
};
