import { Component, Input } from '@angular/core'
import type { HousingLocation } from './housing-location'

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}
