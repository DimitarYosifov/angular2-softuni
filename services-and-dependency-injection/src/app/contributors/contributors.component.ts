import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { ReposComponent } from '../repos/repos.component';
import { ContributorsData } from './contributors.data';
import { ContributorsInfo } from './contributors.data';

@Component({
    selector: 'contributors',
    providers: [ContributorsData],
    templateUrl: './contributors.component.html',
    styleUrls: ['./contributors.component.css']
})

export class ContributorsComponent implements OnInit {
    @Input() data: string
    contributorsInfo: ContributorsInfo
    constructor(
        private contributorsData: ContributorsData
    ) { }

    ngOnInit() {
        this.contributorsData.getData(this.data)
            .then(recievedData => {
                this.contributorsInfo = recievedData
            })
    }
}
