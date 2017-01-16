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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var core_2 = require("@angular/core");
var draw_service_1 = require("./draw.service");
var draw_details_model_1 = require("./draw-details.model");
require("rxjs/add/operator/switchMap");
var CreateDrawComponent = (function () {
    function CreateDrawComponent(drawService, toaster, vRef) {
        this.drawService = drawService;
        this.toaster = toaster;
        this.vRef = vRef;
        this.toaster.setRootViewContainerRef(vRef);
        this.drawDetails = new draw_details_model_1.DrawDetailsModel();
    }
    CreateDrawComponent.prototype.createDraw = function () {
        var _this = this;
        this.drawService.createDraw(this.drawDetails).then(function () { _this.toaster.success("Draw Created"); })
            .catch(function () { _this.toaster.error("Failed to create Draw"); });
    };
    return CreateDrawComponent;
}());
CreateDrawComponent = __decorate([
    core_1.Component({ selector: 'create-draw',
        moduleId: module.id,
        templateUrl: 'create-draw.component.html',
        styleUrls: ['create-draw.component.css']
    }),
    __metadata("design:paramtypes", [draw_service_1.DrawService,
        ng2_toastr_1.ToastsManager,
        core_2.ViewContainerRef])
], CreateDrawComponent);
exports.CreateDrawComponent = CreateDrawComponent;
//# sourceMappingURL=create-draw.component.js.map