// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {ViewContainerRef} from '@angular/core';

import {DrawService} from '../draw/draw.service';
import {DrawDetailsModel} from '../draw/draw-details.model';
import {DrawResultsModel} from '../draw/draw-results.model';
import 'rxjs/add/operator/switchMap';



@Component(
    {selector: 'enter-results',
     moduleId: module.id,
     templateUrl: 'enter-results.component.html',
     styleUrls: ['enter-results.component.css']
})

export class EnterResultsComponent implements OnInit
{
   drawDetails:DrawDetailsModel;
   drawResults: DrawResultsModel;
   validationErrors: any;
   subscription:any;

    constructor(
                private drawService: DrawService,
                private toaster: ToastsManager,
                private vRef : ViewContainerRef,
                private route: ActivatedRoute
)
{
    this.toaster.setRootViewContainerRef(vRef);
    this.drawDetails = new DrawDetailsModel();
}


ngOnInit()
{
this.subscription = this.route.params.subscribe((params) => {
       this.getDrawDetails(params['drawName']);
    });
}

getDrawDetails(drawName:string)
{
    this.drawService.getDrawDetails(drawName)
        .then((drawDetails: DrawDetailsModel) => this.initialiseResultsArray(drawDetails))
        .catch((error:any) => this.handleError(error));
}

private initialiseResultsArray(drawDetails:DrawDetailsModel)
{
    this.drawDetails = drawDetails;
    var drawResults = new DrawResultsModel();
    drawResults.primaryResults = new Array(drawDetails.primaryRules.amountOfNumbers);
    drawResults.secondaryResults = new Array(drawDetails.secondaryRules.amountOfNumbers);
    this.drawResults = drawResults;
}

saveResults(): void {

    this.drawService.saveResults(this.drawDetails.name,this.drawResults).then(()=>{this.toaster.success("Results saved");} )
                                                .catch((error)=>this.handleError(error));

}

handleError = (error:any):void =>
{
    this.toaster.error("An error occurred whilst saving the results");
    this.validationErrors = error._body;
    console.log(error);
}

 trackByIndex(index: number, value: number) {
    return index;
  }

}







