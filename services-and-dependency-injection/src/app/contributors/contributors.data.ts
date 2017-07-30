import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

let url

export class ContributorsInfo {
    login: string
    avatar_url: string
    contributions: number
    html_url: string
}

@Injectable()

export class ContributorsData {
    constructor(private http: Http) { }
    getData(repoToPass): Promise<ContributorsInfo> {
        url = "https://api.github.com/repos/michaelaivanova/" + repoToPass + "/contributors"
        return this.http
            .get(url)
            .toPromise()
            .then(resp => resp.json() as ContributorsInfo)
            .catch(err => {
                console.log(err)
                return new ContributorsInfo()
            })
    }
}
