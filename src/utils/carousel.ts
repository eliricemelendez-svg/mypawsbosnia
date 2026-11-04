/**
 * Shared carousel controller for photo slideshows.
 * Used in ApplyForm (showcase + success) and DogCard.
 */
export class CarouselController {
  private current = 0;
  private count = 0;
  private track: HTMLElement;
  private dotsContainer: HTMLElement | null;
  private autoplayInterval: ReturnType<typeof setInterval> | null = null;

  constructor(
    track: HTMLElement,
    dotsContainer: HTMLElement | null,
    private autoplayMs = 0,
  ) {
    this.track = track;
    this.dotsContainer = dotsContainer;
  }

  loadImages(images: { src: string; alt: string }[]) {
    this.track.innerHTML = '';
    this.count = images.length;
    this.current = 0;

    images.forEach((img) => {
      const slide = document.createElement('div');
      slide.className = 'w-full h-full flex-shrink-0';
      const newImg = document.createElement('img');
      newImg.src = img.src;
      newImg.alt = img.alt;
      newImg.className = 'w-full h-full object-cover object-center';
      slide.appendChild(newImg);
      this.track.appendChild(slide);
    });

    this.track.style.transform = 'translateX(0)';
    this.buildDots();

    if (this.autoplayMs > 0) this.startAutoplay();
  }

  goTo(i: number) {
    this.current = ((i % this.count) + this.count) % this.count;
    this.track.style.transform = `translateX(-${this.current * 100}%)`;
    this.updateDots();
  }

  prev() { this.goTo(this.current - 1); this.restartAutoplay(); }
  next() { this.goTo(this.current + 1); this.restartAutoplay(); }

  startAutoplay() {
    this.stopAutoplay();
    if (this.autoplayMs > 0) {
      this.autoplayInterval = setInterval(() => this.goTo(this.current + 1), this.autoplayMs);
    }
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  private restartAutoplay() {
    if (this.autoplayMs > 0) this.startAutoplay();
  }

  private buildDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = '';
    for (let i = 0; i < this.count; i++) {
      const dot = document.createElement('span');
      dot.className = `block w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'} transition-colors`;
      this.dotsContainer.appendChild(dot);
    }
  }

  private updateDots() {
    this.dotsContainer?.querySelectorAll('span').forEach((d, idx) => {
      d.className = `block w-2.5 h-2.5 rounded-full ${idx === this.current ? 'bg-white' : 'bg-white/50'} transition-colors`;
    });
  }

  /** Attach prev/next buttons and touch swipe to a container */
  attachControls(prevBtn: HTMLElement | null, nextBtn: HTMLElement | null, swipeTarget: HTMLElement | null) {
    prevBtn?.addEventListener('click', () => this.prev());
    nextBtn?.addEventListener('click', () => this.next());

    if (swipeTarget) {
      let startX = 0;
      swipeTarget.addEventListener('touchstart', (e) => { startX = (e as TouchEvent).touches[0].clientX; }, { passive: true });
      swipeTarget.addEventListener('touchend', (e) => {
        const diff = startX - (e as TouchEvent).changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? this.next() : this.prev();
      });
    }
  }
}
