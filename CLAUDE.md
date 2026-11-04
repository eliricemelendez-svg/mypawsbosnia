# My Paws Bosnia Website

## Architecture

All pages use shared components in `src/components/pages/`. Each language page (EN/DE/NL/FR) is a thin wrapper that passes `lang` as a prop. **Never duplicate page content across languages.**

Key shared utilities:
- `src/utils/dog-i18n.ts` — `getLocalizedDog()`, `getLocalizedStory()` for accessing translated dog/story fields
- `src/data/countries.ts` — `translateCountry()` for country name translations
- `src/data/hero-slides.ts` — hero slideshow text per dog per language
- `src/utils/sanitize.ts` — `escapeHtml()`, `sanitizeField()`, `isValidEmail()` for API input safety

## When adding a new dog

1. Add the dog's data entry to `src/data/current-dogs.ts` (all 4 languages: EN + de/nl/fr objects)
2. Add the dog's photos to `src/assets/current-dogs/<slug>/`
3. Add the dog to the hero slideshow:
   - Add hero text in `src/data/hero-slides.ts` (all 4 languages)
   - Add the slug to the `heroSlugs` array in the same file
   - Import the lead photo and add to `heroImgMap` in `src/components/pages/HomePage.astro`

## When moving a dog to adopted (success stories)

1. Move the dog's data from `src/data/current-dogs.ts` to `src/data/success-stories.ts`
2. Move the dog's photos from `src/assets/current-dogs/<slug>/` to `src/assets/success-stories/<slug>/`
3. Remove the dog from `heroSlugs` in `src/data/hero-slides.ts`
4. Remove the image import from `heroImgMap` in `src/components/pages/HomePage.astro`

## Environment variables

Required in `.env` (local) and Vercel dashboard (production):
- `RESEND_API_KEY` — Resend email API key
- `GOOGLE_SHEET_APPLICATIONS_URL` — Google Apps Script URL for application logging
- `GOOGLE_SHEET_SPONSORS_URL` — Google Apps Script URL for sponsor logging
