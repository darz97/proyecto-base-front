import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PruebaService } from '../../core/service/prueba.service';
import { HomeService } from './home.service';

@Component({
  selector: 'mbs-home',
  imports: [],
  standalone: true,
  template: `<p>home works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  prueba: PruebaService = inject(PruebaService);

  prueba2: HomeService = inject(HomeService);
}
