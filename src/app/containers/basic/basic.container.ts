import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'rex-basic',
  imports: [RouterOutlet],
  templateUrl: './basic.container.html',
  styleUrl: './basic.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'basic-container' },
})
export class BasicContainer {
  // site identity
  protected readonly title = signal('Craftasaurus');
  protected readonly establishedYear = 2025;
  protected readonly currentYear = new Date().getFullYear();

  // contact email for header/footer
  protected readonly contactEmail = signal('craft@craftasaurusrex.com');
}
