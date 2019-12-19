import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HTMLReport';

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
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();
const summary = Summary.printHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
