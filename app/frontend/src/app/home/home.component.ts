import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { HousingLocationComponent } from '../housing-location/housing-location.component'
import { Observable } from 'rxjs'
import { HomeService } from './home.service'
import type { HousingLocation } from '../housing-location/housing-location'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HousingLocationComponent, CommonModule],
})
export class HomeComponent implements OnInit {
  housingLocationList$: Observable<HousingLocation[]> | undefined

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.housingLocationList$ = this.homeService.getHousingLocations()
  }
}
