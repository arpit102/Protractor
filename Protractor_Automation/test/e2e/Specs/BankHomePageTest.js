/**
 * Created by Arpit on 6/4/2017.
 */
'use strict';

var BankHomePage = require('../Pages/BankHomePage.js');
var utilPage = require('../Util/TestUtil.js');

describe('Bank homepage', function () {
    var page,myUtil;

    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    browser.logger.info("------------LAUNCHED URL-----------------------------------------");

    beforeEach(function () {
        page = new BankHomePage();
		myUtil = new utilPage();
		
    });


    it('should verify the Bank Home Page', function () {
		
		var val1=myUtil.multiplyBy(10,5);
		
		console.log('Multiply'+val1);
		
        expect(page.bankName).toEqual('XYZ Bank');
        console.log('MY Text Print'+page.customerLogintxt);
        expect(page.customerLogintxt).toEqual('Customer Login');
        expect(page.bankMngrLogintxt).toEqual('Bank Manager Login');

    });


});