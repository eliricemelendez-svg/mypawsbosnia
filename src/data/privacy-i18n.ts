import type { Lang } from "../i18n/utils";

interface PrivacySection {
  heading: string;
  body: string;
  list?: string[];
  bodyAfterList?: string;
}

interface PrivacyStrings {
  title: string;
  description: string;
  pageHeading: string;
  lastUpdated: string;
  sections: PrivacySection[];
}

const strings: Record<Lang, PrivacyStrings> = {
  en: {
    title: "Privacy Policy | My Paws Bosnia",
    description: "How My Paws Bosnia handles your personal data when you submit an adoption application.",
    pageHeading: "Privacy Policy",
    lastUpdated: "Last updated: October 2026",
    sections: [
      {
        heading: "Who we are",
        body: 'My Paws Bosnia is a dog rescue charity based in Brcko, Bosnia and Herzegovina. We rescue stray and abandoned dogs and find them loving homes across Europe. If you have any questions about this policy, you can reach us at <a href="mailto:donate2mypaws@gmail.com" class="text-teal hover:underline">donate2mypaws@gmail.com</a>.',
      },
      {
        heading: "What data we collect",
        body: "When you fill out our adoption application form, we collect the following information:",
        list: [
          "Your name, email address, and phone number",
          "Your country and city",
          "Your home type, household composition, and whether you own or rent",
          "Your pet ownership history and daily routine",
          "Any free-text answers you provide (questions, messages, etc.)",
        ],
      },
      {
        heading: "Why we collect it",
        body: "We use this information to process your adoption application, arrange home checks, and coordinate transport of your dog to your home.",
      },
      {
        heading: "Legal basis",
        body: "We process your data based on your consent. You give this consent by checking the privacy consent box before submitting the adoption application form.",
      },
      {
        heading: "How your data is processed",
        body: 'When you submit the adoption form, your application is sent to us via <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" class="text-teal hover:underline">Web3Forms</a>. We also send you a confirmation email via <a href="https://resend.com" target="_blank" rel="noopener noreferrer" class="text-teal hover:underline">Resend</a>. Your data is not stored in any database beyond these services.',
      },
      {
        heading: "Who has access to your data",
        body: "Only the My Paws Bosnia team (Vesna and her family) has access to your application data.",
      },
      {
        heading: "Data sharing",
        body: "We do not sell, rent, or share your personal data with third parties. We may share your contact details with our licensed transport provider to arrange delivery of your dog.",
      },
      {
        heading: "Data retention",
        body: "We keep your application data for as long as needed to process the adoption. You can request deletion of your data at any time by emailing us.",
      },
      {
        heading: "Your rights",
        body: "You have the right to:",
        list: [
          "Access the personal data we hold about you",
          "Request correction of any inaccurate data",
          "Request deletion of your data",
          "Withdraw your consent at any time",
        ],
        bodyAfterList: 'To exercise any of these rights, contact us at <a href="mailto:donate2mypaws@gmail.com" class="text-teal hover:underline">donate2mypaws@gmail.com</a>.',
      },
      {
        heading: "Cookies",
        body: "This website does not use cookies or tracking technologies.",
      },
      {
        heading: "Changes to this policy",
        body: "We may update this privacy policy from time to time. The date at the top of this page shows when it was last updated.",
      },
    ],
  },
  de: {
    title: "Datenschutzerkl\u00e4rung | My Paws Bosnia",
    description: "Wie My Paws Bosnia mit Ihren pers\u00f6nlichen Daten umgeht, wenn Sie einen Adoptionsantrag stellen.",
    pageHeading: "Datenschutzerkl\u00e4rung",
    lastUpdated: "Zuletzt aktualisiert: Oktober 2026",
    sections: [
      {
        heading: "Wer wir sind",
        body: 'My Paws Bosnia ist eine Hunderettungsorganisation mit Sitz in Brcko, Bosnien und Herzegowina. Wir retten streunende und ausgesetzte Hunde und finden ihnen liebevolle Familien in ganz Europa. Bei Fragen zu dieser Erkl\u00e4rung erreichst du uns unter <a href="mailto:donate2mypaws@gmail.com" class="text-teal hover:underline">donate2mypaws@gmail.com</a>.',
      },
      {
        heading: "Welche Daten wir erheben",
        body: "Wenn du unser Adoptionsformular ausf\u00fcllst, erheben wir folgende Daten:",
        list: [
          "Dein Name, deine E-Mail-Adresse und Telefonnummer",
          "Dein Land und deine Stadt",
          "Deine Wohnsituation, Haushaltszusammensetzung und ob du Eigent\u00fcmer oder Mieter bist",
          "Deine Erfahrung mit Haustieren und dein Tagesablauf",
          "Alle Freitextantworten, die du angibst (Fragen, Nachrichten usw.)",
        ],
      },
      {
        heading: "Warum wir diese Daten erheben",
        body: "Wir verwenden diese Informationen, um deinen Adoptionsantrag zu bearbeiten, Hausbesuche zu organisieren und den Transport deines Hundes zu dir nach Hause zu koordinieren.",
      },
      {
        heading: "Rechtsgrundlage",
        body: "Wir verarbeiten deine Daten auf Grundlage deiner Einwilligung. Diese Einwilligung gibst du, indem du vor dem Absenden des Adoptionsformulars das Kontrollk\u00e4stchen zur Datenschutzeinwilligung aktivierst.",
      },
      {
        heading: "Wie deine Daten verarbeitet werden",
        body: 'Wenn du das Adoptionsformular absendest, wird dein Antrag \u00fcber <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" class="text-teal hover:underline">Web3Forms</a> an uns gesendet. Wir senden dir au\u00dferdem eine Best\u00e4tigungs-E-Mail \u00fcber <a href="https://resend.com" target="_blank" rel="noopener noreferrer" class="text-teal hover:underline">Resend</a>. Deine Daten werden \u00fcber diese Dienste hinaus in keiner Datenbank gespeichert.',
      },
      {
        heading: "Wer Zugang zu deinen Daten hat",
        body: "Nur das Team von My Paws Bosnia (Vesna und ihre Familie) hat Zugang zu deinen Antragsdaten.",
      },
      {
        heading: "Datenweitergabe",
        body: "Wir verkaufen, vermieten oder teilen deine personenbezogenen Daten nicht mit Dritten. Wir k\u00f6nnen deine Kontaktdaten an unseren lizenzierten Transportanbieter weitergeben, um die Lieferung deines Hundes zu organisieren.",
      },
      {
        heading: "Datenspeicherung",
        body: "Wir bewahren deine Antragsdaten so lange auf, wie es f\u00fcr die Bearbeitung der Adoption erforderlich ist. Du kannst jederzeit die L\u00f6schung deiner Daten per E-Mail beantragen.",
      },
      {
        heading: "Deine Rechte",
        body: "Du hast das Recht:",
        list: [
          "Auskunft \u00fcber die personenbezogenen Daten zu erhalten, die wir \u00fcber dich gespeichert haben",
          "Die Berichtigung unrichtiger Daten zu verlangen",
          "Die L\u00f6schung deiner Daten zu verlangen",
          "Deine Einwilligung jederzeit zu widerrufen",
        ],
        bodyAfterList: 'Um eines dieser Rechte auszu\u00fcben, kontaktiere uns unter <a href="mailto:donate2mypaws@gmail.com" class="text-teal hover:underline">donate2mypaws@gmail.com</a>.',
      },
      {
        heading: "Cookies",
        body: "Diese Website verwendet keine Cookies oder Tracking-Technologien.",
      },
      {
        heading: "\u00c4nderungen dieser Erkl\u00e4rung",
        body: "Wir k\u00f6nnen diese Datenschutzerkl\u00e4rung von Zeit zu Zeit aktualisieren. Das Datum oben auf dieser Seite zeigt, wann sie zuletzt aktualisiert wurde.",
      },
    ],
  },
  nl: {
    title: "Privacybeleid | My Paws Bosnia",
    description: "Hoe My Paws Bosnia omgaat met je persoonsgegevens wanneer je een adoptieaanvraag indient.",
    pageHeading: "Privacybeleid",
    lastUpdated: "Laatst bijgewerkt: oktober 2026",
    sections: [
      {
        heading: "Wie we zijn",
        body: 'My Paws Bosnia is een hondenreddingsorganisatie gevestigd in Brcko, Bosnie en Herzegovina. We redden zwerfhonden en achtergelaten honden en vinden voor hen een liefdevol thuis in heel Europa. Als je vragen hebt over dit beleid, kun je ons bereiken via <a href="mailto:donate2mypaws@gmail.com" class="text-teal hover:underline">donate2mypaws@gmail.com</a>.',
      },
      {
        heading: "Welke gegevens we verzamelen",
        body: "Wanneer je ons adoptieformulier invult, verzamelen we de volgende gegevens:",
        list: [
          "Je naam, e-mailadres en telefoonnummer",
          "Je land en stad",
          "Je woonsituatie, huishoudsamenstelling en of je eigenaar of huurder bent",
          "Je ervaring met huisdieren en je dagelijkse routine",
          "Alle vrije tekst die je invult (vragen, berichten, enz.)",
        ],
      },
      {
        heading: "Waarom we deze gegevens verzamelen",
        body: "We gebruiken deze informatie om je adoptieaanvraag te verwerken, huisbezoeken te regelen en het transport van je hond naar je huis te coordineren.",
      },
      {
        heading: "Rechtsgrondslag",
        body: "We verwerken je gegevens op basis van je toestemming. Je geeft deze toestemming door het privacyvinkje aan te vinken voordat je het adoptieformulier verstuurt.",
      },
      {
        heading: "Hoe je gegevens worden verwerkt",
        body: 'Wanneer je het adoptieformulier verstuurt, wordt je aanvraag via <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" class="text-teal hover:underline">Web3Forms</a> naar ons verzonden. We sturen je ook een bevestigingsmail via <a href="https://resend.com" target="_blank" rel="noopener noreferrer" class="text-teal hover:underline">Resend</a>. Je gegevens worden niet opgeslagen in een database buiten deze diensten.',
      },
      {
        heading: "Wie toegang heeft tot je gegevens",
        body: "Alleen het team van My Paws Bosnia (Vesna en haar familie) heeft toegang tot je aanvraaggegevens.",
      },
      {
        heading: "Gegevens delen",
        body: "We verkopen, verhuren of delen je persoonsgegevens niet met derden. We kunnen je contactgegevens delen met onze gelicenseerde transportaanbieder om de bezorging van je hond te regelen.",
      },
      {
        heading: "Bewaartermijn",
        body: "We bewaren je aanvraaggegevens zolang als nodig is om de adoptie te verwerken. Je kunt op elk moment verzoeken om verwijdering van je gegevens door ons te e-mailen.",
      },
      {
        heading: "Jouw rechten",
        body: "Je hebt het recht om:",
        list: [
          "Inzage te krijgen in de persoonsgegevens die we over je bewaren",
          "Correctie van onjuiste gegevens te vragen",
          "Verwijdering van je gegevens te vragen",
          "Je toestemming op elk moment in te trekken",
        ],
        bodyAfterList: 'Om een van deze rechten uit te oefenen, neem contact met ons op via <a href="mailto:donate2mypaws@gmail.com" class="text-teal hover:underline">donate2mypaws@gmail.com</a>.',
      },
      {
        heading: "Cookies",
        body: "Deze website maakt geen gebruik van cookies of trackingtechnologieen.",
      },
      {
        heading: "Wijzigingen in dit beleid",
        body: "We kunnen dit privacybeleid van tijd tot tijd bijwerken. De datum bovenaan deze pagina laat zien wanneer het voor het laatst is bijgewerkt.",
      },
    ],
  },
  fr: {
    title: "Politique de confidentialit\u00e9 | My Paws Bosnia",
    description: "Comment My Paws Bosnia traite vos donn\u00e9es personnelles lorsque vous soumettez une demande d'adoption.",
    pageHeading: "Politique de confidentialit\u00e9",
    lastUpdated: "Derni\u00e8re mise \u00e0 jour : octobre 2026",
    sections: [
      {
        heading: "Qui nous sommes",
        body: 'My Paws Bosnia est une association de sauvetage de chiens bas\u00e9e \u00e0 Brcko, en Bosnie-Herz\u00e9govine. Nous sauvons des chiens errants et abandonn\u00e9s et leur trouvons des familles aimantes \u00e0 travers l\'Europe. Si vous avez des questions sur cette politique, vous pouvez nous contacter \u00e0 <a href="mailto:donate2mypaws@gmail.com" class="text-teal hover:underline">donate2mypaws@gmail.com</a>.',
      },
      {
        heading: "Quelles donn\u00e9es nous collectons",
        body: "Lorsque vous remplissez notre formulaire d'adoption, nous collectons les informations suivantes :",
        list: [
          "Votre nom, adresse e-mail et num\u00e9ro de t\u00e9l\u00e9phone",
          "Votre pays et votre ville",
          "Votre type de logement, la composition de votre foyer et si vous \u00eates propri\u00e9taire ou locataire",
          "Votre exp\u00e9rience avec les animaux et votre routine quotidienne",
          "Toutes les r\u00e9ponses en texte libre que vous fournissez (questions, messages, etc.)",
        ],
      },
      {
        heading: "Pourquoi nous collectons ces donn\u00e9es",
        body: "Nous utilisons ces informations pour traiter votre demande d'adoption, organiser les visites \u00e0 domicile et coordonner le transport de votre chien jusqu'\u00e0 chez vous.",
      },
      {
        heading: "Base l\u00e9gale",
        body: "Nous traitons vos donn\u00e9es sur la base de votre consentement. Vous donnez ce consentement en cochant la case de consentement avant de soumettre le formulaire d'adoption.",
      },
      {
        heading: "Comment vos donn\u00e9es sont trait\u00e9es",
        body: 'Lorsque vous soumettez le formulaire d\'adoption, votre demande nous est envoy\u00e9e via <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" class="text-teal hover:underline">Web3Forms</a>. Nous vous envoyons \u00e9galement un e-mail de confirmation via <a href="https://resend.com" target="_blank" rel="noopener noreferrer" class="text-teal hover:underline">Resend</a>. Vos donn\u00e9es ne sont stock\u00e9es dans aucune base de donn\u00e9es en dehors de ces services.',
      },
      {
        heading: "Qui a acc\u00e8s \u00e0 vos donn\u00e9es",
        body: "Seule l'\u00e9quipe de My Paws Bosnia (Vesna et sa famille) a acc\u00e8s \u00e0 vos donn\u00e9es de candidature.",
      },
      {
        heading: "Partage des donn\u00e9es",
        body: "Nous ne vendons, ne louons et ne partageons pas vos donn\u00e9es personnelles avec des tiers. Nous pouvons partager vos coordonn\u00e9es avec notre transporteur agr\u00e9\u00e9 pour organiser la livraison de votre chien.",
      },
      {
        heading: "Conservation des donn\u00e9es",
        body: "Nous conservons vos donn\u00e9es de candidature aussi longtemps que n\u00e9cessaire pour traiter l'adoption. Vous pouvez demander la suppression de vos donn\u00e9es \u00e0 tout moment en nous envoyant un e-mail.",
      },
      {
        heading: "Vos droits",
        body: "Vous avez le droit de :",
        list: [
          "Acc\u00e9der aux donn\u00e9es personnelles que nous d\u00e9tenons \u00e0 votre sujet",
          "Demander la correction de donn\u00e9es inexactes",
          "Demander la suppression de vos donn\u00e9es",
          "Retirer votre consentement \u00e0 tout moment",
        ],
        bodyAfterList: 'Pour exercer l\'un de ces droits, contactez-nous \u00e0 <a href="mailto:donate2mypaws@gmail.com" class="text-teal hover:underline">donate2mypaws@gmail.com</a>.',
      },
      {
        heading: "Cookies",
        body: "Ce site web n'utilise pas de cookies ni de technologies de suivi.",
      },
      {
        heading: "Modifications de cette politique",
        body: "Nous pouvons mettre \u00e0 jour cette politique de confidentialit\u00e9 de temps en temps. La date en haut de cette page indique la derni\u00e8re mise \u00e0 jour.",
      },
    ],
  },
};

export function getPrivacyStrings(lang: Lang): PrivacyStrings {
  return strings[lang];
}
