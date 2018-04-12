'use strict';
function SignUp () {
     var inputFullName = element(by.model('registrationObj.name')),
      inputUserEmail = element(by.model('registrationObj.email')),
      inputDob = element(by.model('registrationObj.dob')),
      inputWeight = element(by.model('registrationObj.weight')),
      readAge = element(by.binding('registrationObj.age')),
      submit  = element(by.css('#formSubmit'));
  
      console.log("inputFullName **** : " + inputFullName.value);

   this.fillFormFullName = function () {
    inputFullName.sendKeys('John234');
   }

   this.fillFormDob = function () {
    inputDob.sendKeys('03 01 1975');
   }

   this.fillFormWeight = function () {
    inputWeight.sendKeys('76');
   }

   this.fillFormEmail = function () {
    inputUserEmail.sendKeys('john.smith@mail.com');
   }

//    this.confirmSignUpButton = function () {
//     submit.click()
//    }
}

module.exports = SignUp;