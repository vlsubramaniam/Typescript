"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
var HTMLReport_1 = require("./reportTargets/HTMLReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.printHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HTMLReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
