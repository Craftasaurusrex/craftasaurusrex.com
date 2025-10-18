import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'rex-home-page',
  imports: [CardComponent],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'page home-page' },
})
export class HomePage {
  protected readonly offerings = signal([
    {
      name: 'Wood Sign Basics',
      blurb: 'Designing & crafting durable custom wooden signs.',
      img: '/favicon.ico',
    },
    {
      name: 'Book Holder Build',
      blurb: 'Create a functional hardwood book & cigar rest.',
      img: '/favicon.ico',
    },
    {
      name: 'Forging Essentials',
      blurb: 'Intro to forging brackets & hooks safely.',
      img: '/favicon.ico',
    },
    {
      name: 'Simple Knife Making',
      blurb: 'Shape, forge & finish a small camp knife.',
      img: '/favicon.ico',
    },
  ]);
  protected readonly contactEmail = signal('craft@craftasaurusrex.com');
}
