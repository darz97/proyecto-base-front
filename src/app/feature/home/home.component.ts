import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'mbs-home',
  imports: [],
  template: `<p>home works!</p>`,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  service: HomeService = inject(HomeService);

  hola(): void {
    console.log('Hola');
  }
}
