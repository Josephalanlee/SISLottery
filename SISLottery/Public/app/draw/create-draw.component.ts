// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {ViewContainerRef} from '@angular/core';

import {DrawService} from './draw.service';
import {DrawDetailsModel} from './draw-details.model';

import 'rxjs/add/operator/switchMap';



@Component(
    {selector: 'create-draw',
     moduleId: module.id,
     templateUrl: 'create-draw.component.html',
     styleUrls: ['create-draw.component.css']
})

export class CreateDrawComponent
{
   drawDetails:DrawDetailsModel;

    constructor(
                private drawService: DrawService,
                private toaster: ToastsManager,
                private vRef : ViewContainerRef
) 
{
    this.toaster.setRootViewContainerRef(vRef);
    this.drawDetails = new DrawDetailsModel();
}




createDraw(): void {
    
    this.drawService.createDraw(this.drawDetails).then(()=>{this.toaster.success("Draw Created");} )
                                                .catch(()=> {this.toaster.error("Failed to create Draw")});
    
}

}





