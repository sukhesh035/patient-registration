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
    afterEach(function(done){
        //console.log('calling after all');
        browser.refresh();
        process.nextTick(done);
    });

    it("test registration",function(){
        browser.get("http://localhost:3000");
    });
    
    var signup = new SignUp();

    it('1.Happy path,  testing with all given fields \n', function () {
        
        signup.fillFormFullName("sai");
        signup.fillFormEmail("sai123@gmail.com");
        signup.fillFormDob('03 04 1987');
        signup.fillFormWeight('76');
        signup.confirmSignUpButton();
        
       
     });
     it('2. Testing FullName with numbers, \n', function () {
        var inputUserName = element(by.id('fullNameError'));
        
        signup.fillFormFullName("sai345");
        signup.fillFormEmail("sai123@gmail.com");
        signup.fillFormDob('03 04 1987');
        signup.fillFormWeight('76');
        signup.confirmSignUpButton();
        expect(inputUserName.getText()).toEqual('No numbers/ special character allowed in names');
       
        
     });
     it('3. Testing FullName with special characters ,\n ', function () {
      
        var inputUserName = element(by.id('fullNameError'));
        signup.fillFormFullName("sai$%$##@!");
        signup.fillFormEmail("sai123@gmail.com");
        signup.fillFormDob('03 04 1987');
        signup.fillFormWeight('76');
        signup.confirmSignUpButton();
        expect(inputUserName.getText()).toEqual('No numbers/ special character allowed in names');
      
     });
     it('4. Testing Email with special characters other than @ ,\n ', function () {
      
        var inputUserName = element(by.id('emailIncorrect'));
        signup.fillFormFullName("test five");
        signup.fillFormEmail("sai123*()(@gmail.com");
        signup.fillFormDob('03 04 1987');
        signup.fillFormWeight('76');
        signup.confirmSignUpButton();
        expect(inputUserName.getText()).toEqual('Email should be in "****@****.***"');
      
     });
     it('5. Testing Dob format,\n ', function () {
      
        var inputUserName = element(by.id('dobError'));
        signup.fillFormFullName("test six");
        signup.fillFormEmail("test@gmail.com");
        signup.fillFormDob('ab/mmc/sass');
        signup.fillFormWeight('76');
        signup.confirmSignUpButton();
        expect(inputUserName.getText()).toEqual('Please give a proper date (MM/DD/YYYY).');
      
     });

});