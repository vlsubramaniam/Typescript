"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// const reader = new MatchReader('football.csv');
// reader.read();
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   // new ConsoleReport()
//   new HtmlReport()
// );
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
var summary = Summary_1.Summary.printHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
