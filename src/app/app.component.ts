import { Component } from '@angular/core';
import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent],
  template: ` <app-main-layout /> `,
  standalone: true,
})
export class AppComponent {
  private readonly title: string = 'proyecto-base-front';
}
