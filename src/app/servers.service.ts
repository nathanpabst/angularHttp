import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class ServerService {
// tslint:disable-next-line: deprecation
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
// tslint:disable-next-line: deprecation
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post('https://angularhttp-900e6.firebaseio.com/data.json', servers, {headers});
        return this.http.put('https://angularhttp-900e6.firebaseio.com/data.json', servers, {headers})
    }

    getServers() {
        return this.http.get('https://angularhttp-900e6.firebaseio.com/data.json');
    }
}
