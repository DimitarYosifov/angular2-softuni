import { Component } from '@angular/core'
import { Data } from '../fake.data'
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
     selector: 'carInfo',
     templateUrl: './car.info.component.html',
     styleUrls: ['./car.info.component.css']
})

export class CarInfoComponent {
    paramId:string
    carMake
    carDetails
    comments
    constructor(private route: ActivatedRoute,private data :Data) {
       this.route.params.subscribe((params: Params) => {
        this.paramId = params['id'];
      });
       this.carMake=this.paramId.split('-')[0]
       this.carDetails = this.data.getData().filter(details=>details.make===this.carMake)[0]
       this.comments=this.carDetails.comments
    }
}