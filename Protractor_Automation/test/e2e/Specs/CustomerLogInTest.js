/**
 * Created by Arpit on 6/4/2017.
 */
'use strict';

var BankHomePage = require('../Pages/BankHomePage.js');
var customerLogInPage = require('../Pages/CustomerLogInPage.js');
//var log4jsGen = require('../Util/log4jsGen');

describe('Bank homepage', function () {

	var pageBankHome,
	customerPage;

	//Launched URL
	browser.get(browser.params.URL);
	browser.logger.info("------------LAUNCHED URL-----------------------------------------");

	//Load Pages in Constructor
	beforeEach(function () {
		pageBankHome = new BankHomePage();
		customerPage = new customerLogInPage();

	});

	//Bank Home Page verify
	it('should verify the Bank Home Page', function () {
		expect(pageBankHome.bankName).toEqual('XYZ Bank');
		browser.logger.info("------------Expect: Bank Name Verify-----------------------------------------");
		expect(pageBankHome.customerLogintxt).toEqual('Customer Login');
		browser.logger.info("------------Expect: Customer LogIn button Verify-----------------------------------------");
		expect(pageBankHome.bankMngrLogintxt).toEqual('Bank Manager Login');
		browser.logger.info("------------Expect: Bank Manager LogIn button Verify-----------------------------------------");

	});

	//Customer LogIn in Bank
	it('should verify the Customer LogIn button click', function () {

		pageBankHome.customerBtnClick;
		browser.logger.info("------------Customer Button Click-----------------");
		customerPage.selectName;
		browser.logger.info("------------Select Name from Customer Dropdown-----------------");
		customerPage.userLogIn;
		browser.logger.info("------------Click on Customer LogIN button-----------------");
		expect(customerPage.accntNotxt).toEqual('1004');
		browser.logger.info("------------Expect : Customer Account No-----------------");
		expect(customerPage.accntBalancetxt).toEqual('0');
		browser.logger.info("------------Expect: Initial Customer Account Balance-----------------");
		expect(customerPage.accntCurrencytxt).toEqual('Dollar');
		browser.logger.info("------------Expect: Customer Account Currency-----------------");

	});

	//Deposit Amount in Bank
	it('should verify Deposit Amount', function () {

		customerPage.depositMenubtnClick;
		browser.logger.info("------------Deposit Menu Button Clicked -----------------------------------------");

		customerPage.amounttodeposit.sendKeys(500);
		browser.logger.info("------------Enter Amount in Amout textbox -----------------------------------------");

		customerPage.depositSubmitbtnClick;
		browser.logger.info("------------Deposit button Clicked -----------------------------------------");

		expect(customerPage.depositMessagetxt).toEqual('Deposit Successful');
		browser.logger.info("------------Exppect : Deposit Message -----------------------------------------");

		expect(customerPage.accntBalancetxt).toEqual('500');
		browser.logger.info("------------Expect:  Customer Account Balance after deposit should 500-----------------");

	});

	//Withdrawl amount from Bank
	it('should verify Withdrawl amount', function () {
		customerPage.withdrawlMenubtnClick;
		browser.logger.info("------------Withdrawl Menu Button Clicked -----------------------------------------");

		customerPage.amounttodeposit.sendKeys(500);
		browser.logger.info("------------Enter Amount in Amout textbox -----------------------------------------");

		customerPage.depositSubmitbtnClick;
		browser.logger.info("------------Deposit button Clicked -----------------------------------------");

		expect(customerPage.depositMessagetxt).toEqual('Transaction successful');

		browser.logger.info("------------Exppect : Withdrawl Message -----------------------------------------");

		expect(customerPage.accntBalancetxt).toEqual('0');
		browser.logger.info("------------Expect:  Customer Account Balance after withdrwal should Zero-----------------");
	});

	//Validate the Transaction
	it('should verify Transaction amount', function () {
		
		customerPage.transactionMenubtnClick;
		browser.logger.info("------------Withdrawl Menu Button Clicked -----------------------------------------");
		
		expect(customerPage.transactionsList.count()).toEqual(2);
		browser.logger.info("------------Expect:Transaction count is 2 -----------------------------------------");
		
		
		browser.logger.info(customerPage.transactionsAt(0));
		
		browser.logger.info("------------Transaction1 Detail END -----------------------------------------");
		
		browser.logger.info(customerPage.transactionsAt(1));
		
		browser.logger.info("------------Transaction2 Detail END -----------------------------------------");
		
	});

});