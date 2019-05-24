import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()

export class ServerService {
// tslint:disable-next-line: deprecation
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
// tslint:disable-next-line: deprecation
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post('https://angularhttp-900e6.firebaseio.com/data.json', servers, {headers});
        return this.http.put('https://angularhttp-900e6.firebaseio.com/data.json', servers, {headers});
    }

    getServers() {
        return this.http.get('https://angularhttp-900e6.firebaseio.com/data.json')
// tslint:disable-next-line: deprecation
        .pipe(map(
// tslint:disable-next-line: deprecation
            (response: Response) => {
            const data = response.json();
            for (const server of data) {
                server.name = 'FETCHED_' + server.name;
            }
            return data;
            })
            .pipe(catchError(error => {
                return throwError('something went wrong');
            })
            )
        );
    }

    getAppName() {
        return this.http.get('https://angularhttp-900e6.firebaseio.com/appName.json')
        .pipe(map(
// tslint:disable-next-line: deprecation
            (response: Response) => {
            return response.json();
        })
        );
    }
}
