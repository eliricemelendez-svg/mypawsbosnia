import type { Lang } from "../i18n/utils";

interface AdoptPageStrings {
  titleTemplate: string;       // "Adopt {name} | ..."
  descTemplate: string;        // SEO description
  jsonLdName: string;          // "Adopt {name} - Rescue Dog"
  jsonLdOfferDesc: string;     // "Adoption - contact us..."
  leadPhotoAlt: string;        // "{name}, a ... rescue dog..."
  siblingText: string;         // "{name} has a sister, {sibling}..."
  applyBtn: string;            // "Apply to Adopt"
  emailSubject: string;        // "Adoption inquiry about {name}"
  shareTitle: string;          // "Adopt {name} | My Paws Bosnia"
  linkCopied: string;          // "Link copied!"
  photoAlt: string;            // "{name} photo {n}"
}

const strings: Record<Lang, AdoptPageStrings> = {
  en: {
    titleTemplate: "Adopt {name} | Rescue Dog Available in Europe | My Paws Bosnia",
    descTemplate: "{shortLine} {name} is a {age} {size} {sex} rescue dog in Bosnia, ready for adoption and transport to families across Europe.",
    jsonLdName: "Adopt {name} - Rescue Dog",
    jsonLdOfferDesc: "Adoption - contact us on Facebook",
    leadPhotoAlt: "{name}, a {size} rescue dog available for adoption from Bosnia",
    siblingText: "{name} has a sister, {siblingLink}. They'd love to be adopted together, but can go to separate homes too.",
    applyBtn: "Apply to Adopt",
    emailSubject: "Adoption inquiry about {name}",
    shareTitle: "Adopt {name} | My Paws Bosnia",
    linkCopied: "Link copied!",
    photoAlt: "{name} photo {n}",
  },
  de: {
    titleTemplate: "{name} adoptieren | Geretteter Hund aus Bosnien | My Paws Bosnia",
    descTemplate: "{shortLine} {name} ist ein geretteter Hund in Bosnien, bereit zur Adoption und zum Transport zu Familien in Europa.",
    jsonLdName: "{name} adoptieren \u2014 Geretteter Hund",
    jsonLdOfferDesc: "Adoption \u2014 kontaktieren Sie uns auf Facebook",
    leadPhotoAlt: "{name}, geretteter Hund zur Adoption aus Bosnien",
    siblingText: "{name} hat eine Schwester, {siblingLink}. Am liebsten werden sie zusammen adoptiert, aber sie k\u00f6nnen auch getrennt vermittelt werden.",
    applyBtn: "Adoptionsantrag stellen",
    emailSubject: "Adoptionsanfrage f\u00fcr {name}",
    shareTitle: "{name} adoptieren | My Paws Bosnia",
    linkCopied: "Link kopiert!",
    photoAlt: "{name} Foto {n}",
  },
  nl: {
    titleTemplate: "Adopteer {name} | Reddingshond uit Bosni\u00eb | My Paws Bosnia",
    descTemplate: "{shortLine} {name} is een reddingshond in Bosni\u00eb, klaar voor adoptie en transport naar gezinnen in Europa.",
    jsonLdName: "Adopteer {name} \u2014 Reddingshond",
    jsonLdOfferDesc: "Adoptie \u2014 neem contact op via Facebook",
    leadPhotoAlt: "{name}, reddingshond beschikbaar voor adoptie uit Bosni\u00eb",
    siblingText: "{name} heeft een zus, {siblingLink}. Ze worden het liefst samen geadopteerd, maar apart kan ook.",
    applyBtn: "Adoptieaanvraag indienen",
    emailSubject: "Adoptie aanvraag voor {name}",
    shareTitle: "Adopteer {name} | My Paws Bosnia",
    linkCopied: "Link gekopieerd!",
    photoAlt: "{name} foto {n}",
  },
  fr: {
    titleTemplate: "Adopter {name} | Chien sauv\u00e9 de Bosnie | My Paws Bosnia",
    descTemplate: "{shortLine} {name} est un chien sauv\u00e9 en Bosnie, pr\u00eat \u00e0 l\u2019adoption et au transport vers des familles en Europe.",
    jsonLdName: "Adopter {name} \u2014 Chien sauv\u00e9",
    jsonLdOfferDesc: "Adoption \u2014 contactez-nous sur Facebook",
    leadPhotoAlt: "{name}, chien sauv\u00e9 \u00e0 adopter depuis la Bosnie",
    siblingText: "{name} a une s\u0153ur, {siblingLink}. Elles aimeraient \u00eatre adopt\u00e9es ensemble, mais peuvent aussi aller s\u00e9par\u00e9ment.",
    applyBtn: "Faire une demande d'adoption",
    emailSubject: "Demande d'adoption pour {name}",
    shareTitle: "Adopter {name} | My Paws Bosnia",
    linkCopied: "Lien copi\u00e9 !",
    photoAlt: "{name} photo {n}",
  },
};

export function getAdoptStrings(lang: Lang): AdoptPageStrings {
  return strings[lang];
}
