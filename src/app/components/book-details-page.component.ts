import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookDetailsComponent } from "./book-details.component";

@Component({
    selector: 'app-book-details-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, BookDetailsComponent],
    template: `
    <div class="max-w-4xl mx-auto p-6">
        <button 
            (click)="goBack()"
            class="mb-6 px-4 py-2 text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
            ← Back to Search
        </button>

        <app-book-details/>
    </div>
  `,
})
export class BookDetailsPageComponent {
    router = inject(Router);
    params = inject(ActivatedRoute).params as Observable<{ id: string }>;

    goBack() {
        this.router.navigate(['/']);
    }
}
