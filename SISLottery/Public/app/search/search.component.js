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
var core_1 = require("@angular/core");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
var draw_service_1 = require("../draw/draw.service");
require("rxjs/add/operator/switchMap");
var SearchComponent = (function () {
    function SearchComponent(drawService, toaster, vRef) {
        this.drawService = drawService;
        this.toaster = toaster;
        this.vRef = vRef;
        this.toaster.setRootViewContainerRef(vRef);
    }
    SearchComponent.prototype.search = function () {
        var _this = this;
        this.drawService.searchDraws(new Date(this.searchTerm))
            .then(function (results) { return _this.searchResults = results; })
            .catch(function () { return _this.toaster.error("An error occurred while fetching results"); });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({ selector: 'search',
        moduleId: module.id,
        templateUrl: 'search.component.html',
        styleUrls: ['search.component.css']
    }),
    __metadata("design:paramtypes", [draw_service_1.DrawService,
        ng2_toastr_1.ToastsManager,
        core_2.ViewContainerRef])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map