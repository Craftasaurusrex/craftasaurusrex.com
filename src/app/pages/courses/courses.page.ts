import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

interface Offering {
  readonly name: string;
  readonly blurb: string;
  readonly img: string;
  readonly spots: number;
}

@Component({
  selector: 'rex-courses-page',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent],
  host: { class: 'page courses-page' },
})
export class CoursesPage {
  protected readonly intro = signal('Browse hands-on workshops to sharpen your craft.');
  protected readonly offerings = signal<readonly Offering[]>([
    {
      name: 'Wood Sign Basics',
      blurb: 'Design & craft durable signs.',
      img: '/favicon.ico',
      spots: 4,
    },
    { name: 'Book Holder Build', blurb: 'Create a hardwood rest.', img: '/favicon.ico', spots: 0 },
    {
      name: 'Forging Essentials',
      blurb: 'Intro to forging safely.',
      img: '/favicon.ico',
      spots: 2,
    },
    {
      name: 'Simple Knife Making',
      blurb: 'Forge & finish a camp knife.',
      img: '/favicon.ico',
      spots: 1,
    },
  ]);

  protected readonly totalSpots = computed(() =>
    this.offerings().reduce((acc: number, c: Offering) => acc + c.spots, 0)
  );
}
