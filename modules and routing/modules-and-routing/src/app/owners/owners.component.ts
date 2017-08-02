import { Component } from '@angular/core'
import { Data } from '../fake.data'

@Component({
    selector: 'owners',
    templateUrl: './owners.component.html',
    styleUrls: ['./owners.component.css']
})

export class OwnersComponent {
    owners
    newOwners = []
    display = false
    isSorted=false

   constructor(private data: Data) {
        this.owners = this.data.getData()
    }

   sorting(){
      
        let isSorted=this.isSorted
        this.newOwners.sort(function (a, b) {
        let nameA = a.owner.toUpperCase(); 
        let nameB = b.owner.toUpperCase(); 
        if(isSorted){
              nameB = a.owner.toUpperCase(); 
              nameA = b.owner.toUpperCase(); 
        }
        if (nameA < nameB) {
               return -1;
           }
        if (nameA > nameB) {
            return 1;
            }
         return 0;
        });
      this.isSorted=!this.isSorted
   }

    ngOnInit() {
         this.newOwners = []
        for (let n = 0; n < this.owners.length - 1; n++) {

            for (let m = n+1; m < this.owners.length; m++) {

                if (this.owners[n].owner === this.owners[m].owner) {
                    break;
                }

                if (m === this.owners.length - 1) {
                    this.newOwners.push(this.owners[n])                
                }
            }
            if (n === this.owners.length - 2) {
                this.newOwners.push(this.owners[this.owners.length - 1])
                this.display = true
               
            }
        }
    }
}