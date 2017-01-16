import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDrawComponent }      from './draw/create-draw.component';
import {SearchComponent} from './search/search.component';
import {EnterResultsComponent} from './results/enter-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: CreateDrawComponent },
  { path: 'search', component: SearchComponent },
  { path: 'enterresults/:drawName', component: EnterResultsComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
