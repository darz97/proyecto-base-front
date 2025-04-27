import { Injectable } from '@angular/core';
import { environment } from '@env/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PruebaService {
  environment: string = environment.apiUrl;
}
