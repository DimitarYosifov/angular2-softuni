import { Component } from '@angular/core'

import { Data } from '../fake.data'

@Component({
    selector: 'cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})

export class CarsComponent {
    carsArray
    constructor(private data: Data) {
        this.carsArray = this.data.getData()
    }
}