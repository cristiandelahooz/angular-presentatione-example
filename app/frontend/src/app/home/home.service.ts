// src/app/home/home.service.ts
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http' // Importar HttpClient
import { Observable } from 'rxjs' // Para manejar las respuestas de la API
import { HousingLocation } from '../housing-location/housing-location'

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = 'http://localhost:4000/housing-location' // URL del endpoint

  constructor(private http: HttpClient) {}

  // Método que hace la solicitud GET y devuelve un Observable con la lista de datos
  getHousingLocations(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.apiUrl) // Realiza la solicitud GET al endpoint
  }
}
