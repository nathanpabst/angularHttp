import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class ServerService {
// tslint:disable-next-line: deprecation
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        return this.http.post('https://angularhttp-900e6.firebaseio.com/data.json', servers);
    }
}
