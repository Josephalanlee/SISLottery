import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import {DrawDetailsModel} from './draw-details.model';
import {DrawResultsModel} from './draw-results.model';
import {DrawModel} from './draw.model';

import 'rxjs/Rx';

@Injectable()
export class DrawService {
    private drawUrl = 'api/draws';

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    createDraw(details: DrawDetailsModel): Promise<void> {

        return this.http.post(this.drawUrl
            , JSON.stringify(details)
            , { headers: this.headers })
            .toPromise()
            .then(()=>null)
            .catch(this.handleError);


    }

    searchDraws(drawDate: Date):Promise<DrawDetailsModel[]>
    {
         var dateAsString = drawDate.toISOString();
         return this.http.get(this.drawUrl+`/search?drawDate=${dateAsString}`)
            .toPromise()
            .then(response => response.json() as DrawDetailsModel[])
            .catch(this.handleError);
    }


      saveResults(drawName:string,results: DrawResultsModel): Promise<any> {

        return this.http.put(`${this.drawUrl}/${drawName}/results/`
            , JSON.stringify(results)
            , { headers: this.headers })
            .toPromise()
            .then(response => null)
            .catch(this.handleError);


    }

    getDrawDetails(drawName:string):Promise<DrawDetailsModel>
    {
        return this.http.get(`${this.drawUrl}/${drawName}`,{headers: this.headers})
                .toPromise()
                .then(response => response.json() as DrawDetailsModel)
                .catch(this.handleError);


    }



    private handleError(error: any): Promise<any> {

        console.error('An error occurred', error);
        ///Code 520 signifies results validation errors.
        if (error.status != 520) {
            return Promise.reject(error.message);
        }
        else {
            return Promise.reject(error);
        }
    }



}






