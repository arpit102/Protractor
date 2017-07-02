/**
 * Created by Arpit on 6/18/2017.
 */

'use strict';
var log4js = require('log4js');

var TestUtil  = function () {
    
};

TestUtil.prototype = Object.create({}, {
	
multiplyBy : { value: function (num1,num2){ return  num1 * num2; }},

});
module.exports = TestUtil;
