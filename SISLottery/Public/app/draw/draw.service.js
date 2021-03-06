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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var DrawService = (function () {
    function DrawService(http) {
        this.http = http;
        this.drawUrl = 'api/draws';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DrawService.prototype.createDraw = function (details) {
        return this.http.post(this.drawUrl, JSON.stringify(details), { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    DrawService.prototype.searchDraws = function (drawDate) {
        var dateAsString = drawDate.toISOString();
        return this.http.get(this.drawUrl + ("/search?drawDate=" + dateAsString))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DrawService.prototype.saveResults = function (drawName, results) {
        return this.http.put(this.drawUrl + "/" + drawName + "/results/", JSON.stringify(results), { headers: this.headers })
            .toPromise()
            .then(function (response) { return null; })
            .catch(this.handleError);
    };
    DrawService.prototype.getDrawDetails = function (drawName) {
        return this.http.get(this.drawUrl + "/" + drawName, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DrawService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        ///Code 520 signifies results validation errors.
        if (error.status != 520) {
            return Promise.reject(error.message);
        }
        else {
            return Promise.reject(error);
        }
    };
    return DrawService;
}());
DrawService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DrawService);
exports.DrawService = DrawService;
//# sourceMappingURL=draw.service.js.map