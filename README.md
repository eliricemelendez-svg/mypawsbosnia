# My Paws Bosnia

Website for My Paws Bosnia, a dog rescue shelter in Brcko, Bosnia and Herzegovina.

Built with Astro 6 and Tailwind CSS v4.

## Development

```sh
npm install
npm run dev        # starts dev server at localhost:4321
npm run build      # builds to ./dist/
npm run preview    # previews the production build locally
```

## Adding a new dog for adoption

1. Create a folder for photos: `src/assets/current-dogs/{slug}/`
2. Add the dog to `src/data/current-dogs.ts` following the `Dog` interface.
3. Required fields: `slug`, `name`, `sex`, `age`, `size`, `shortLine`, `description`.
4. Optional fields: `ageYears`, `weightKg`, `arrivedAt` (ISO date string).

Strict enum values:
- `sex`: `"male"` | `"female"`
- `age`: `"puppy"` | `"young"` | `"adult"` | `"senior"`
- `size`: `"small"` | `"medium"` | `"large"`

## Adding a past rescue

1. Create a folder for photos: `src/assets/past-rescues/{slug}/`
2. Add the dog to `src/data/past-rescues.ts` following the `PastRescue` interface.
3. Required fields: `slug`, `name`, `sex`, `age`, `size`, `yearRescued`, `adoptedTo`, `story`, `shortLine`.

Same strict enum values as above for `sex`, `age`, and `size`.

## Adding impact photos

Photos go in the corresponding `src/assets/` folder:
- Food photos: `src/assets/food/`
- Vet photos: `src/assets/vet/`
- Shelter photos: `src/assets/shelter/`

Then add an entry to the matching data file:
- `src/data/food-photos.ts`
- `src/data/vet-photos.ts`
- `src/data/shelter-photos.ts`

Each entry needs: `src` (path relative to assets), `caption`, and `date` (e.g. "Spring 2024").

## Asset locations

```
src/assets/logo/              Logo files
src/assets/current-dogs/      Photos of dogs currently at the shelter
src/assets/past-rescues/      Photos of dogs already adopted
src/assets/food/              Food delivery and feeding photos
src/assets/vet/               Veterinary care photos
src/assets/shelter/           Shelter improvement photos
src/assets/vesna/             Photos of Vesna
```

## Deployment

Run `npm run build` and deploy the `dist/` folder to any static hosting provider (Netlify, Vercel, Cloudflare Pages, etc.).
