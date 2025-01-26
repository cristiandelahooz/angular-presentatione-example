// src/app/app.module.ts
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { HttpClient } from '@angular/common/http' // Importar HttpClientModule
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [BrowserModule, AppComponent],
  providers: [],
  // bootstrap: [AppComponent],
})
export class AppModule {}
