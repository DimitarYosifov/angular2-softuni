import { Injectable } from '@angular/core';

class Article {
    constructor(
        public title: string,
        public description: string) { }
}

@Injectable()
export class HomeData {
    getData(): Array<Article> {
        return [
            // { title: 'first', description: 'first description' },
            // { title: 'second', description: 'second description' },
            // { title: 'third', description: 'third description' }
        ]
    }
}