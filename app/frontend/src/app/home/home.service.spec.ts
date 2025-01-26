import { TestBed } from '@angular/core/testing' // Herramientas para pruebas
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing' // Simular solicitudes HTTP
import { HomeService } from './home.service' // Servicio que estás probando
import { HousingLocation } from '../housing-location/housing-location' // Modelo de datos

describe('HomeService', () => {
  let service: HomeService
  let httpTestingController: HttpTestingController

  const mockHousingLocations: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo:
        'https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo:
        'https://angular.dev/assets/images/tutorials/common/brandon-griggs-wR11KBaB86U-unsplash.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo:
        'https://angular.dev/assets/images/tutorials/common/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo:
        'https://angular.dev/assets/images/tutorials/common/ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo:
        'https://angular.dev/assets/images/tutorials/common/krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://angular.dev/assets/images/tutorials/common/r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://angular.dev/assets/images/tutorials/common/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://angular.dev/assets/images/tutorials/common/r-architecture-GGupkreKwxA-unsplash.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://angular.dev/assets/images/tutorials/common/saru-robert-9rP3mxf8qWI-unsplash.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo:
        'https://angular.dev/assets/images/tutorials/common/webaliser-_TPTXZd9mOo-unsplash.jpg',
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa el módulo de pruebas para HTTP
      providers: [HomeService], // Proporciona el servicio
    })

    service = TestBed.inject(HomeService) // Inyecta el servicio
    httpTestingController = TestBed.inject(HttpTestingController) // Inyecta el controlador HTTP para pruebas
  })

  afterEach(() => {
    httpTestingController.verify() // Verifica que no haya solicitudes pendientes
  })

  it('should be created', () => {
    expect(service).toBeTruthy() // Asegúrate de que el servicio se crea correctamente
  })

  it('should fetch housing locations via GET', () => {
    // Llama al método que deseas probar
    service.getHousingLocations().subscribe(locations => {
      expect(locations).toEqual(mockHousingLocations) // Verifica que los datos sean los esperados
    })

    // Simula una solicitud HTTP
    const req = httpTestingController.expectOne(
      'http://localhost:8080/housing-location',
    )
    expect(req.request.method).toBe('GET') // Verifica que sea un método GET

    // Devuelve la respuesta simulada
    req.flush(mockHousingLocations)
  })
})
