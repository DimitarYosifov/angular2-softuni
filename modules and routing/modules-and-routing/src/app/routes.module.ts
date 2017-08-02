import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CarsComponent } from './cars/cars.component';
import { OwnersComponent } from './owners/owners.component';
import { HomeComponent } from './home/home.component';
import { CarInfoComponent } from './car.info/car.info.component';
import { OwnerInfoComponent } from './owner.info/owner.info.component';



const routes = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: CarsComponent },
    { path: 'owners', component: OwnersComponent },
    { path: 'cars/:id', component: CarInfoComponent },
    { path: 'owners/:id', component:OwnerInfoComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }