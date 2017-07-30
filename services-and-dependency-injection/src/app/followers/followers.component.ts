import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { GithubExampleComponent } from '../githubExample/github.example.component';
import { FollowersData } from './followers.data';
import { FollowersInfo } from './followers.data';

@Component({
    selector: 'followers',
    providers: [FollowersData],
    templateUrl: './followers.component.html',
    styleUrls: ['./followers.component.css']
})

export class FollowersComponent implements OnInit {
    @Input() data: boolean[]
    followersInfo: FollowersInfo
    constructor(
        private followersData: FollowersData
    ) { }

    ngOnInit() {
        this.followersData.getData()
            .then(recievedData => {
                this.followersInfo = recievedData
            })
    }
}
