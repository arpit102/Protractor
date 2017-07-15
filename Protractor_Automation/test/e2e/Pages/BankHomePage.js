'use strict';

var BankHomePage = function () {
	/*  browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
	browser.logger.info("-----------------------------------------------------");
	browser.logger.info("New Test Started ........................");*/
};

BankHomePage.prototype = Object.create({}, {

		bankName: {
			get: function () {
				return element(by.css('.mainHeading')).getText();
			}
		},
		customerLogin: {
			get: function () {
				return element(by.css('[ng-click="customer()"]'));
			}
		},
		bankMngrLogin: {
			get: function () {
				return element(by.css('[ng-click="manager()"]'));
			}
		},
		customerLogintxt: {
			get: function (customerLoginbtntxt) {
				return this.customerLogin.getText();
			}
		},
		bankMngrLogintxt: {
			get: function (bankMngrLoginbtntxt) {
				return this.bankMngrLogin.getText();
			}
		},

		customerBtnClick: {
			get: function () {
				return this.customerLogin.click();
			}
		},

	});

module.exports = BankHomePage;