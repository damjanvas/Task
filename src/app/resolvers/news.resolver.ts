import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MockService } from '../services/mock.service';

@Injectable()
export class NewsResolver implements Resolve<Promise<any>> {

    constructor(
        private mockService: MockService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Promise<any> {
        return this.mockService.getNews()
        .then(news => {
            return news;
        })
        .catch(err => {
            console.log(err);
        });
    }
}