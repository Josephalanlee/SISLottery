import { Component} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {ViewContainerRef} from '@angular/core';

import {DrawService} from '../draw/draw.service';
import {DrawDetailsModel} from '../draw/draw-details.model';

import 'rxjs/add/operator/switchMap';



@Component(
    {selector: 'search',
     moduleId: module.id,
     templateUrl: 'search.component.html',
     styleUrls: ['search.component.css']
})

export class SearchComponent
{
   searchResults:DrawDetailsModel[];
   searchTerm:string;

    constructor(
                private drawService: DrawService,
                private toaster: ToastsManager,
                private vRef : ViewContainerRef
) 
{
    this.toaster.setRootViewContainerRef(vRef);
    
}




search(): void {
    
    this.drawService.searchDraws(new Date(this.searchTerm))
        .then((results)=> this.searchResults = results)
        .catch(()=> this.toaster.error("An error occurred while fetching results")); 
    
}

}





