import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const url = "https://api.github.com/users/MichaelaIvanova"

export class GitHubProfileInfo {
    avatar_url: string
    name: string
    public_repos: number
    followers:number
}

@Injectable()
export class GithubData {
    constructor(private http: Http) { }
    getData(): Promise<GitHubProfileInfo> {
        return this.http
            .get(url)
            .toPromise()
            .then(resp => resp.json() as GitHubProfileInfo)
            .catch(err => {
                console.log(err)
                return new GitHubProfileInfo()
            })
    }
}
