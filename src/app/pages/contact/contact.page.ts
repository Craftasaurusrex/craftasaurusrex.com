import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'rex-contact-page',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'page contact-page' },
})
export class ContactPage {
  private readonly fb = inject(FormBuilder);

  protected readonly contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected readonly submitted = signal(false);
  protected readonly pending = signal(false);
  protected readonly canSubmit = computed(() => !this.pending() && this.contactForm.valid);

  protected onSubmit(): void {
    if (!this.canSubmit()) return;
    this.pending.set(true);
    setTimeout(() => {
      this.pending.set(false);
      this.submitted.set(true);
      this.contactForm.reset();
    }, 500);
  }
}
