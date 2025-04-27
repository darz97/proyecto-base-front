import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mbs-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {
  title: string = 'proyecto-base-front';
}
