import type { Lang } from "../i18n/utils";
import type { Dog, DogTranslation } from "../data/current-dogs";
import type { SuccessStory, SuccessStoryTranslation } from "../data/success-stories";

type Translatable = Dog | SuccessStory;
type Translation = DogTranslation | SuccessStoryTranslation;

/**
 * Get the language-specific translation object from a dog or success story.
 * Returns undefined for English (use defaults).
 */
export function getLangTranslation(item: Translatable, lang: Lang): Translation | undefined {
  if (lang === "en") return undefined;
  if (lang === "de") return item.de;
  if (lang === "nl") return item.nl;
  if (lang === "fr") return item.fr;
  return undefined;
}

export function getLocalizedDog(dog: Dog, lang: Lang) {
  const tr = getLangTranslation(dog, lang);
  return {
    shortLine: tr?.shortLine ?? dog.shortLine,
    description: (tr as DogTranslation | undefined)?.description ?? dog.description,
    traits: tr?.traits ?? dog.traits,
  };
}

export function getLocalizedStory(story: SuccessStory, lang: Lang) {
  const tr = getLangTranslation(story, lang);
  return {
    shortLine: tr?.shortLine ?? story.shortLine,
    story: (tr as SuccessStoryTranslation | undefined)?.story ?? story.story,
    traits: tr?.traits ?? story.traits,
    adoptedTo: (tr as SuccessStoryTranslation | undefined)?.adoptedTo ?? story.adoptedTo,
  };
}
