/**
 * Created by Arpit on 6/4/2017.
 */
'use strict';

var BankHomePage = require('../Pages/BankHomePage.js');

describe('Bank homepage', function () {
    var page;

    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    browser.logger.info("------------LAUNCHED URL-----------------------------------------");

    beforeEach(function () {
        page = new BankHomePage();
    });


    it('should verify the Bank Home Page', function () {
        expect(page.bankName).toEqual('XYZ Bank');
        console.log('MY Text Print'+page.customerLogintxt);
        expect(page.customerLogintxt).toEqual('Customer Login');
        expect(page.bankMngrLogintxt).toEqual('Bank Manager Login');

    });


});