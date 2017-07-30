import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const url = "https://api.github.com/users/MichaelaIvanova/repos"

export class ReposInfo {
    name: string
    language: string
    created_at: string
    html_url: string
}

@Injectable()
export class ReposData {
    constructor(private http: Http) { }
    getData(): Promise<ReposInfo> {
        return this.http
            .get(url)
            .toPromise()
            .then(resp => resp.json() as ReposInfo)
            .catch(err => {
                console.log(err)
                return new ReposInfo()
            })
    }
}
