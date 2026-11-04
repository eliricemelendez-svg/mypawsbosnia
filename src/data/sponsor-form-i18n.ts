import type { Lang } from "../i18n/utils";

interface SponsorFormStrings {
  sponsorLabel: string;    // "Sponsor {name}"
  perMonth: string;        // "/mo"
  month1: string;          // "1 month"
  month3: string;          // "3 months"
  year1: string;           // "1 year"
  donateVia: string;       // "Donate via PayPal"
  alreadyDonated: string;  // "Already donated? Let us know..."
  firstName: string;       // "First name"
  email: string;           // "Your email"
  iDonated: string;        // "I donated"
  otherAmount: string;     // "Other amount"
  letUsKnow: string;       // "Let us know"
  thankYou: string;        // "Thank you! We'll be in touch..."
  error: string;           // "Something went wrong..."
}

const strings: Record<Lang, SponsorFormStrings> = {
  en: {
    sponsorLabel: "Sponsor {name}",
    perMonth: "/mo",
    month1: "1 month",
    month3: "3 months",
    year1: "1 year",
    donateVia: "Donate via PayPal",
    alreadyDonated: "Already donated? Let us know so we can thank you!",
    firstName: "First name",
    email: "Your email",
    iDonated: "I donated",
    otherAmount: "Other amount",
    letUsKnow: "Let us know",
    thankYou: "Thank you! We\u2019ll be in touch to say thanks properly.",
    error: "Something went wrong. Please try again.",
  },
  de: {
    sponsorLabel: "{name} sponsern",
    perMonth: "/Monat",
    month1: "1 Monat",
    month3: "3 Monate",
    year1: "1 Jahr",
    donateVia: "\u00dcber PayPal spenden",
    alreadyDonated: "Bereits gespendet? Lass es uns wissen!",
    firstName: "Vorname",
    email: "Deine E-Mail",
    iDonated: "Ich habe gespendet",
    otherAmount: "Anderer Betrag",
    letUsKnow: "Bescheid geben",
    thankYou: "Danke! Wir melden uns, um uns pers\u00f6nlich zu bedanken.",
    error: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
  },
  nl: {
    sponsorLabel: "Sponsor {name}",
    perMonth: "/maand",
    month1: "1 maand",
    month3: "3 maanden",
    year1: "1 jaar",
    donateVia: "Doneer via PayPal",
    alreadyDonated: "Al gedoneerd? Laat het ons weten!",
    firstName: "Voornaam",
    email: "Je e-mail",
    iDonated: "Ik heb gedoneerd",
    otherAmount: "Ander bedrag",
    letUsKnow: "Laat het weten",
    thankYou: "Bedankt! We nemen contact op om je persoonlijk te bedanken.",
    error: "Er is iets misgegaan. Probeer het opnieuw.",
  },
  fr: {
    sponsorLabel: "Parrainer {name}",
    perMonth: "/mois",
    month1: "1 mois",
    month3: "3 mois",
    year1: "1 an",
    donateVia: "Faire un don via PayPal",
    alreadyDonated: "D\u00e9j\u00e0 donn\u00e9 ? Faites-le nous savoir !",
    firstName: "Pr\u00e9nom",
    email: "Votre e-mail",
    iDonated: "J'ai fait un don",
    otherAmount: "Autre montant",
    letUsKnow: "Nous pr\u00e9venir",
    thankYou: "Merci ! Nous vous contacterons pour vous remercier personnellement.",
    error: "Une erreur est survenue. Veuillez r\u00e9essayer.",
  },
};

export function getSponsorFormStrings(lang: Lang) {
  return strings[lang];
}
