import { Component } from '@angular/core';
import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';

@Component({
  selector: 'mbs-root',
  imports: [MainLayoutComponent],
  template: ` <mbs-main-layout /> `,
  standalone: true,
})
export class AppComponent {
  title: string = 'proyecto-base-front';
}
