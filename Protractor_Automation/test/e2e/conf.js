'use strict';
var log4js = require('log4js');
// An example configuration file.
exports.config = {
	
	resultJsonOutputFile:'logs/ConsoleLog.json',
	
  directConnect: true,

    params: require('./data/testdata.json'),

  // Capabilities to be passed to the Webdriver instance.
  capabilities: {
   'browserName': 'chrome'
  },

    beforeLaunch:function(){
        log4js.configure({
            appenders: [
                { type: 'log4js-protractor-appender', category: 'protractorLog4js' },
                {
					
                    type: "file",
					level: "ALL",
                    filename: 'logs/ExecutionLog.log',
                    category: 'protractorLog4js',
                    maxLogSize: 20480,
                    backups: 10
                },
				
				
            ]
        });
    },

  onPrepare: function() {

    browser.driver.manage().window().maximize();

	 var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
	 
  jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  
   jasmine.getEnv().addReporter(new SpecReporter({
     prefixes: {
              success: ' 🍻  ' },
      }));
	  
	  //Object Of Jasmine2HtmlReporter
	var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');  
	  var today = new Date(),
    timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';

	  
	 jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
  /* savePath: './test/reports/',*/
  fileNamePrefix: 'PreFix',
  fileNameSuffix: 'Suffix',
   takeScreenshots: true,
   takeScreenshotsOnlyOnFailures: true
})); 

/*jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   takeScreenshots: false,
   takeScreenshotsOnlyOnFailures: true
}));*/

	  
	  var DisplayProcessor = require('jasmine-spec-reporter').DisplayProcessor;
	  function TimeProcessor(options) {
        }

        function getTime() {
            var now = new Date();
            return now.getHours() + ':' +
                now.getMinutes() + ':' +
                now.getSeconds()
        }

        TimeProcessor.prototype = new DisplayProcessor();
        TimeProcessor.prototype.displaySuite = function (suite, log) {
            return getTime() + ' - ' + log;
        };
        TimeProcessor.prototype.displaySuccessfulSpec = function (spec, log) {
            return getTime() + ' - ' + log;
        };
        TimeProcessor.prototype.displayFailedSpec = function (spec, log) {
            return getTime() + ' - ' + log;
        };
        TimeProcessor.prototype.displayPendingSpec = function (spec, log) {
            return getTime() + ' - ' + log;
        };

        // add jasmine spec reporter
        var reporter = new SpecReporter({
            customProcessors: [TimeProcessor]
        });

        jasmine.getEnv().addReporter(reporter);

      browser.logger = log4js.getLogger('protractorLog4js');

  },
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
 // specs: ['example_spec.js'],

specs: ['./Specs/CustomerLogInTest.js'],
 //specs: ['./Specs/BankHomePageTest.js'],
     // specs: ['./Home/AngularPageTest.js'],

  // Options to be passed to Jasmine...
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  }
};
