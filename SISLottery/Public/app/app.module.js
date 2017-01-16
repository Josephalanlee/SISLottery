"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var enter_results_component_1 = require("./results/enter-results.component");
var draw_service_1 = require("./draw/draw.service");
var create_draw_component_1 = require("./draw/create-draw.component");
var search_component_1 = require("./search/search.component");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, ng2_toastr_1.ToastModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, create_draw_component_1.CreateDrawComponent, enter_results_component_1.EnterResultsComponent, search_component_1.SearchComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [draw_service_1.DrawService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map