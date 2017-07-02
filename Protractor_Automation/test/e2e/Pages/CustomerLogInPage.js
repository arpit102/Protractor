/**
 * Created by Arpit on 6/4/2017.
 */
'use strict';

var customerLogInPage = function () {


};

customerLogInPage.prototype = Object.create({}, {
	
	

    drpdownName:{ get: function () { return element.one(by.model('custId')); }},

    selectName: { get: function () { return element(by.model('custId')).$('[value="2"]').click(); }},

    userLogIn: { get: function () { return element(by.css('button.btn-default')).click(); }},

    accntNo: { get: function () { return element(by.css('strong.ng-binding:nth-child(1)'))}},

    accntNotxt:{get: function (accntNobtntxt) {
        return this.accntNo.getText();
    }},

    accntBalance: { get: function () { return element(by.css('strong.ng-binding:nth-child(2)'))}},

    accntBalancetxt:{get: function () {
        return this.accntBalance.getText();
    }},

    accntCurrency: { get: function () { return element(by.css('strong.ng-binding:nth-child(3)'))}},

    accntCurrencytxt:{get: function () {
        return this.accntCurrency.getText();
    }},


    depositMenubtn: {get : function () { return element(by.css('[ng-click="deposit()"]'))}},
    transactionMenubtn: {get : function () { return element(by.css('[ng-click="transactions()"]'))}},
    withdrawlMenubtn:{get : function () { return element(by.css('[ng-click="withdrawl()"]'))}},


    depositMenubtnClick:{get : function () {

        return this.depositMenubtn.click();
    }},
    transactionMenubtnClick:{get : function () {

        return this.transactionMenubtn.click();
    }},
    withdrawlMenubtnClick:{get : function () {

        return this.withdrawlMenubtn.click();
    }},


    depositSubmitbtn: {get : function () { return element(by.css('.btn.btn-default'))}},

    depositSubmitbtnClick:{get : function () {

        return this.depositSubmitbtn.click();
    }},

    amounttodeposit: { get: function () { return element(by.model('amount')); }},
	
	
    depositAmount: { value: function () {

        this.depositMenubtnClick;
        this.amounttodeposit.sendKeys(500);
        this.depositSubmitbtnClick;

    }},
	
	 test: { value: function () {

	  var tt=customerPage.amounttodeposit.getAttribute('ng-model')
       
    }},

    depositMessage: {get : function () { return element(by.css('[ng-show=message]'))}},

    depositMessagetxt :{get: function () {
        return this.depositMessage.getText();
    }},
});

module.exports = customerLogInPage;