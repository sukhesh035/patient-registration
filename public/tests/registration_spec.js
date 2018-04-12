'use strict';
var SignUp = require('./signPage.js');

var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

describe("checking registration end to end",function(){
    it("test registration",function(){
        browser.get("http://localhost:3000");
    });
    it('Page should have a title', function() {
        expect(browser.getTitle()).toEqual('Parient Registration');
    });

    var signup = new SignUp();

    it('and type some personal information', function () {
        var inputUserName = element(by.id('fullName'));
  
        signup.fillFormFullName();
        signup.fillFormEmail();
        signup.fillFormDob();
        signup.fillFormWeight();
        // signup.fillFormAge();
        signup.confirmSignUpButton();
        expect(inputUserName).not.toEqual(undefined);
     })

});