import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'rex-card',
  imports: [NgOptimizedImage],
  // ...existing code...
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'offering-card',
  },
})
export class CardComponent {
  readonly title = input.required<string>();
  // removed description input; description now projected via <ng-content>
  readonly image = input<string | null>(null);
  readonly link = input<string | null>(null);

  protected readonly hasImage = computed(() => !!this.image());
  protected readonly hasLink = computed(() => !!this.link());
}
