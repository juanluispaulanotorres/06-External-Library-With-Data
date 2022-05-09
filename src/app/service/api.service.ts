import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mobile, Phone } from '../interface/mobile.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url: string = environment.url;

  constructor(private http: HttpClient) { }

  topByInterest(): Observable<Phone[]> {
    return this.http.get<Mobile>(`${this.url}/top-by-interest`)
    .pipe(
      map(
        datos => datos.data.phones
      )
    );
  }

  topByFans(): Observable<Phone[]> {
    return this.http.get<Mobile>(`${this.url}/top-by-fans`)
    .pipe(
      map(
        datos => datos.data.phones
      )
    );
  }
}
