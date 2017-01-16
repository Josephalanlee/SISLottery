"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Keep the Input import for now, we'll remove it later:
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
var draw_service_1 = require("../draw/draw.service");
var draw_details_model_1 = require("../draw/draw-details.model");
var draw_results_model_1 = require("../draw/draw-results.model");
require("rxjs/add/operator/switchMap");
var EnterResultsComponent = (function () {
    function EnterResultsComponent(drawService, toaster, vRef, route) {
        var _this = this;
        this.drawService = drawService;
        this.toaster = toaster;
        this.vRef = vRef;
        this.route = route;
        this.handleError = function (error) {
            _this.toaster.error("An error occurred whilst saving the results");
            _this.validationErrors = error._body;
            console.log(error);
        };
        this.toaster.setRootViewContainerRef(vRef);
        this.drawDetails = new draw_details_model_1.DrawDetailsModel();
    }
    EnterResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.getDrawDetails(params['drawName']);
        });
    };
    EnterResultsComponent.prototype.getDrawDetails = function (drawName) {
        var _this = this;
        this.drawService.getDrawDetails(drawName)
            .then(function (drawDetails) { return _this.initialiseResultsArray(drawDetails); })
            .catch(function (error) { return _this.handleError(error); });
    };
    EnterResultsComponent.prototype.initialiseResultsArray = function (drawDetails) {
        this.drawDetails = drawDetails;
        var drawResults = new draw_results_model_1.DrawResultsModel();
        drawResults.primaryResults = new Array(drawDetails.primaryRules.amountOfNumbers);
        drawResults.secondaryResults = new Array(drawDetails.secondaryRules.amountOfNumbers);
        this.drawResults = drawResults;
    };
    EnterResultsComponent.prototype.saveResults = function () {
        var _this = this;
        this.drawService.saveResults(this.drawDetails.name, this.drawResults).then(function () { _this.toaster.success("Results saved"); })
            .catch(function (error) { return _this.handleError(error); });
    };
    EnterResultsComponent.prototype.trackByIndex = function (index, value) {
        return index;
    };
    return EnterResultsComponent;
}());
EnterResultsComponent = __decorate([
    core_1.Component({ selector: 'enter-results',
        moduleId: module.id,
        templateUrl: 'enter-results.component.html',
        styleUrls: ['enter-results.component.css']
    }),
    __metadata("design:paramtypes", [draw_service_1.DrawService,
        ng2_toastr_1.ToastsManager,
        core_2.ViewContainerRef,
        router_1.ActivatedRoute])
], EnterResultsComponent);
exports.EnterResultsComponent = EnterResultsComponent;
//# sourceMappingURL=enter-results.component.js.map