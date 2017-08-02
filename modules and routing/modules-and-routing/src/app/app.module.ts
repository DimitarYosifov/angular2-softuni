import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OwnersComponent } from './owners/owners.component';
import { Data } from './fake.data';
import { CarsComponent } from './cars/cars.component';
import { AppRoutesModule } from './routes.module';
import { HomeComponent } from './home/home.component';
import { CarInfoComponent } from './car.info/car.info.component';
import { OwnerInfoComponent } from './owner.info/owner.info.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    CarsComponent,
    HomeComponent,
    CarInfoComponent,
    OwnerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule
  ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
