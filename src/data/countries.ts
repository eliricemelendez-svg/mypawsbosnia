import type { Lang } from "../i18n/utils";

const countryNames: Record<string, Record<string, string>> = {
  de: { "Austria": "Österreich", "United Kingdom": "Großbritannien", "Belgium": "Belgien", "England": "England" },
  nl: { "Austria": "Oostenrijk", "United Kingdom": "Verenigd Koninkrijk", "Belgium": "België", "England": "Engeland" },
  fr: { "Austria": "Autriche", "United Kingdom": "Royaume-Uni", "Belgium": "Belgique", "England": "Angleterre" },
};

export function translateCountry(country: string, lang: Lang): string {
  if (lang === "en") return country;
  return countryNames[lang]?.[country] ?? country;
}
