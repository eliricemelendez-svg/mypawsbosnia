/**
 * Shared bubble-selector with +/- counters.
 * Used for household members and pet types in ApplyForm.
 */
export class BubbleSelector {
  private selected = new Set<string>();

  constructor(
    private bubbles: NodeListOf<HTMLButtonElement>,
    private countsDiv: HTMLElement | null,
    private hiddenInput: HTMLInputElement | null,
    private dataAttr: string,
    private defaultValue = '',
    private onChange?: (selected: Set<string>) => void,
  ) {
    this.bubbles.forEach((bubble) => {
      bubble.addEventListener('click', () => this.toggle(bubble));
    });
  }

  private toggle(bubble: HTMLButtonElement) {
    const value = bubble.dataset[this.dataAttr]!;
    if (this.selected.has(value)) {
      this.selected.delete(value);
      bubble.classList.remove('bg-teal', 'text-white', 'border-teal');
      bubble.classList.add('text-body', 'border-gray-200');
    } else {
      this.selected.add(value);
      bubble.classList.add('bg-teal', 'text-white', 'border-teal');
      bubble.classList.remove('text-body', 'border-gray-200');
    }
    this.updateCounts();
    this.onChange?.(this.selected);
  }

  clear() {
    this.selected.clear();
    this.bubbles.forEach((b) => {
      b.classList.remove('bg-teal', 'text-white', 'border-teal');
      b.classList.add('text-body', 'border-gray-200');
    });
    if (this.countsDiv) this.countsDiv.innerHTML = '';
    if (this.hiddenInput) this.hiddenInput.value = this.defaultValue;
  }

  private updateCounts() {
    if (!this.countsDiv) return;
    this.countsDiv.innerHTML = '';

    this.selected.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'flex items-center gap-3';
      const safeName = item.toLowerCase().replace(/[\s\/]/g, '_');
      row.innerHTML = `
        <label class="text-sm text-slate-dark w-32">${item}</label>
        <div class="flex items-center gap-2">
          <button type="button" class="bs-minus w-8 h-8 rounded-full border border-gray-200 text-slate-dark hover:border-teal hover:text-teal flex items-center justify-center text-lg font-bold" data-item="${item}">-</button>
          <span class="bs-count text-sm font-semibold text-slate-dark w-6 text-center" data-item="${item}">1</span>
          <button type="button" class="bs-plus w-8 h-8 rounded-full border border-gray-200 text-slate-dark hover:border-teal hover:text-teal flex items-center justify-center text-lg font-bold" data-item="${item}">+</button>
        </div>
        <input type="hidden" name="${this.dataAttr}_count_${safeName}" value="1" class="bs-count-input" data-item="${item}" />
      `;
      this.countsDiv!.appendChild(row);
    });

    // Attach +/- handlers
    this.countsDiv.querySelectorAll('.bs-plus').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = (btn as HTMLElement).dataset.item!;
        const countEl = this.countsDiv!.querySelector(`.bs-count[data-item="${item}"]`) as HTMLElement;
        const inputEl = this.countsDiv!.querySelector(`.bs-count-input[data-item="${item}"]`) as HTMLInputElement;
        const val = Math.min(parseInt(countEl.textContent || '1') + 1, 20);
        countEl.textContent = String(val);
        inputEl.value = String(val);
      });
    });
    this.countsDiv.querySelectorAll('.bs-minus').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = (btn as HTMLElement).dataset.item!;
        const countEl = this.countsDiv!.querySelector(`.bs-count[data-item="${item}"]`) as HTMLElement;
        const inputEl = this.countsDiv!.querySelector(`.bs-count-input[data-item="${item}"]`) as HTMLInputElement;
        const val = Math.max(parseInt(countEl.textContent || '1') - 1, 1);
        countEl.textContent = String(val);
        inputEl.value = String(val);
      });
    });

    if (this.hiddenInput) {
      this.hiddenInput.value = this.selected.size > 0
        ? Array.from(this.selected).join(', ')
        : this.defaultValue;
    }
  }
}
