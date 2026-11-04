import type { Lang } from "../i18n/utils";

interface AdoptStep {
  title: string;
  text: string;
}

interface TransportRegion {
  label: string;
  price: string;
}

interface AdoptListingStrings {
  howTitle: string;
  steps: AdoptStep[];
  transportTitle: string;
  transportIntro: string;
  regions: TransportRegion[];
  applyBtn: string;
  fbBtn: string;
}

const strings: Record<Lang, AdoptListingStrings> = {
  en: {
    howTitle: "How Adoption Works",
    steps: [
      { title: "Message us", text: "Tell us which dog you're interested in. We answer every message, usually within a day." },
      { title: "Home check", text: "We arrange a friendly home check. In the UK, it's usually a video call. In Germany and Austria, it will most likely be in person." },
      { title: "We arrange transport", text: "Once approved, we organise licensed transport directly to your door. Your dog travels safe and cared for." },
      { title: "Welcome home", text: "Your dog arrives neutered, vaccinated, dewormed, microchipped, and with a pet passport." },
    ],
    transportTitle: "Transport costs",
    transportIntro: "There is no adoption fee. The dog is free. You only cover the cost of transport to your home.",
    regions: [
      { label: "United Kingdom", price: "~\u00a3500" },
      { label: "Europe", price: "\u20ac300\u2013400" },
      { label: "Switzerland", price: "CHF 500\u2013550" },
    ],
    applyBtn: "Apply to Adopt",
    fbBtn: "Message us on Facebook",
  },
  de: {
    howTitle: "So funktioniert eine Adoption",
    steps: [
      { title: "Schreib uns", text: "Sag uns, welcher Hund dich interessiert. Wir antworten auf jede Nachricht, meistens innerhalb eines Tages." },
      { title: "Zuhause-Check", text: "Jemand in deinem Land macht einen Zuhause-Check, virtuell oder pers\u00f6nlich, um sicherzustellen, dass alles passt." },
      { title: "Wir organisieren den Transport", text: "Nach der Genehmigung organisieren wir einen genehmigten Transport direkt bis zu deiner T\u00fcr." },
      { title: "Willkommen zu Hause", text: "Dein Hund kommt kastriert, geimpft, entwurmt, gechipt und mit einem Heimtierausweis." },
    ],
    transportTitle: "Transportkosten",
    transportIntro: "Es gibt keine Adoptionsgeb\u00fchr. Du zahlst nur die Transportkosten.",
    regions: [
      { label: "Gro\u00dfbritannien", price: "~\u00a3500" },
      { label: "Europa", price: "\u20ac300\u2013400" },
      { label: "Schweiz", price: "CHF 500\u2013550" },
    ],
    applyBtn: "Adoptionsantrag stellen",
    fbBtn: "Schreib uns auf Facebook",
  },
  nl: {
    howTitle: "Hoe adoptie werkt",
    steps: [
      { title: "Stuur ons een bericht", text: "Vertel ons welke hond je interesse heeft. We beantwoorden elk bericht, meestal binnen een dag." },
      { title: "Thuiscontrole", text: "Iemand in jouw land doet een thuiscontrole, virtueel of persoonlijk, om te kijken of alles past." },
      { title: "Wij regelen het transport", text: "Na goedkeuring organiseren wij gelicentieerd transport rechtstreeks tot aan je deur." },
      { title: "Welkom thuis", text: "Je hond komt gecastreerd, gevaccineerd, ontwormd, gechipt en met een huisdierpaspoort." },
    ],
    transportTitle: "Transportkosten",
    transportIntro: "Er zijn geen adoptiekosten. Je betaalt alleen het transport.",
    regions: [
      { label: "Verenigd Koninkrijk", price: "~\u00a3500" },
      { label: "Europa", price: "\u20ac300\u2013400" },
      { label: "Zwitserland", price: "CHF 500\u2013550" },
    ],
    applyBtn: "Adoptieaanvraag indienen",
    fbBtn: "Stuur ons een bericht op Facebook",
  },
  fr: {
    howTitle: "Comment fonctionne l'adoption",
    steps: [
      { title: "\u00c9crivez-nous", text: "Dites-nous quel chien vous int\u00e9resse. Nous r\u00e9pondons \u00e0 chaque message, g\u00e9n\u00e9ralement en moins d'un jour." },
      { title: "V\u00e9rification du foyer", text: "Quelqu'un dans votre pays effectue une v\u00e9rification du foyer, virtuellement ou en personne, pour s'assurer que tout convient." },
      { title: "Nous organisons le transport", text: "Une fois approuv\u00e9, nous organisons un transport agr\u00e9\u00e9 directement jusqu'\u00e0 votre porte." },
      { title: "Bienvenue \u00e0 la maison", text: "Votre chien arrive st\u00e9rilis\u00e9, vaccin\u00e9, vermifug\u00e9, puc\u00e9 et avec un passeport pour animaux." },
    ],
    transportTitle: "Co\u00fbts de transport",
    transportIntro: "Il n'y a pas de frais d'adoption. Vous ne payez que le transport.",
    regions: [
      { label: "Royaume-Uni", price: "~\u00a3500" },
      { label: "Europe", price: "\u20ac300\u2013400" },
      { label: "Suisse", price: "CHF 500\u2013550" },
    ],
    applyBtn: "Faire une demande d'adoption",
    fbBtn: "\u00c9crivez-nous sur Facebook",
  },
};

export function getAdoptListingStrings(lang: Lang) {
  return strings[lang];
}
