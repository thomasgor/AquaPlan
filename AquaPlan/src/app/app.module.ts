import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CostCalculatorComponent } from './cost-calculator/cost-calculator.component';
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatInputModule } from '@angular/material/input'


@NgModule({
  declarations: [
    AppComponent,
    CostCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
