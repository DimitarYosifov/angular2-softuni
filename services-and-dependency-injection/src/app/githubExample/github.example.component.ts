import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { GithubData } from './github.data'
import { GitHubProfileInfo } from './github.data'

@Component({
    selector: 'github',
    providers: [GithubData],
    templateUrl: './github.example.component.html',
    styleUrls: ['./github.example.component.css']
})

export class GithubExampleComponent implements OnInit {
    isTableVisible = true
    areFollowersVisible = false
    areReposVisible = false

    viewFollowers() {
        this.isTableVisible = !this.isTableVisible
        this.areFollowersVisible = !this.areFollowersVisible
    }

    viewRepos() {
        this.isTableVisible = !this.isTableVisible
        this.areReposVisible = !this.areReposVisible
    }

    gitHubProfileInfo: GitHubProfileInfo
    constructor(
        private githubData: GithubData
    ) { }

    ngOnInit() {
        this.githubData.getData()
            .then(profileInfo => {
                this.gitHubProfileInfo = profileInfo
            })
    }
}
