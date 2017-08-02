import { Component } from '@angular/core'

import { Data } from '../fake.data'

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    carsArray
    constructor(private data: Data) {
        this.carsArray = this.data.getData().slice(0, 3)
    }
}