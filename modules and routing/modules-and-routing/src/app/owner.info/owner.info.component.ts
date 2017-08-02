import { Component } from '@angular/core'
import { Data } from '../fake.data'
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'carInfo',
    templateUrl: './owner.info.component.html',
    styleUrls: ['./owner.info.component.css']
})

export class OwnerInfoComponent {
    paramId: string
    ownedCars
    ownerImg

    constructor(private route: ActivatedRoute, private data: Data) {
        this.route.params.subscribe((params: Params) => {
            this.paramId = params['id']
        });
         this.ownedCars = this.data.getData().filter(car=>car.owner===this.paramId)
    }
}


