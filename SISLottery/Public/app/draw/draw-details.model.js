"use strict";
var DrawRulesModel = (function () {
    function DrawRulesModel() {
    }
    return DrawRulesModel;
}());
exports.DrawRulesModel = DrawRulesModel;
var DrawDetailsModel = (function () {
    function DrawDetailsModel() {
        this.primaryRules = new DrawRulesModel();
        this.secondaryRules = new DrawRulesModel();
    }
    return DrawDetailsModel;
}());
exports.DrawDetailsModel = DrawDetailsModel;
//# sourceMappingURL=draw-details.model.js.map