# My Paws Bosnia Website

## When adding a new dog

1. Add the dog's data entry to `src/data/current-dogs.ts`
2. Add the dog's photos to `src/assets/current-dogs/<slug>/`
3. Add the dog to the hero slideshow in `src/pages/index.astro`:
   - Import the lead photo at the top
   - Add an entry to the `heroSlides` array with `img`, `slug`, `name`, `line`, and `alt`

## When moving a dog to adopted (success stories)

1. Move the dog's data from `src/data/current-dogs.ts` to `src/data/success-stories.ts`
2. Move the dog's photos from `src/assets/current-dogs/<slug>/` to `src/assets/success-stories/<slug>/`
3. Remove the dog from the `heroSlides` array in `src/pages/index.astro`
