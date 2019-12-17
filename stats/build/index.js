"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csvFileReader_1 = require("./csvFileReader");
var MatchResult_1 = require("./MatchResult");
var reader = new csvFileReader_1.CsvFileReader('football.csv');
reader.read();
var manUtdWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUtdWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUtdWins++;
    }
}
console.log("Man United won " + manUtdWins + " matches");
