import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const url = "https://api.github.com/users/MichaelaIvanova/followers"

export class FollowersInfo {
    avatar_url: string
    login: string
    html_url: string
}

@Injectable()
export class FollowersData {
    constructor(private http: Http) { }
    getData(): Promise<FollowersInfo> {
        return this.http
            .get(url)
            .toPromise()
            .then(resp => resp.json() as FollowersInfo)
            .catch(err => {
                console.log(err)
                return new FollowersInfo()
            })
    }
}
