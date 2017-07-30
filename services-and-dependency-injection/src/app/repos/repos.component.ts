import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { GithubExampleComponent } from '../githubExample/github.example.component';
import { ReposData } from './repos.data';
import { ReposInfo } from './repos.data';



@Component({
    selector: 'repos',
    providers: [ReposData],
    templateUrl: './repos.component.html',
    styleUrls: ['./repos.component.css']
})

export class ReposComponent implements OnInit {
    @Input() data: boolean[]
    reposInfo: ReposInfo
    constructor(
        private reposData: ReposData
    ) { }

    areContributrsVisible = false
    repositoryName

    repoName(repo) {
        this.repositoryName = repo
        this.areContributrsVisible = !this.areContributrsVisible
    }

    ngOnInit() {
        this.reposData.getData()
            .then(recievedData => {
                this.reposInfo = recievedData
            })
    }
}
