'use strict';
function SignUp () {
     var inputFullName = element(by.model('registrationObj.name')),
      inputUserEmail = element(by.model('registrationObj.email')),
      inputDob = element(by.model('registrationObj.dob')),
      inputWeight = element(by.model('registrationObj.weight')),
      readAge = element(by.binding('registrationObj.age')),
      submit  = element(by.css('#formSubmit'));
  
     

   this.fillFormFullName = function (fullname) {
    
    inputFullName.sendKeys(fullname);
   }

   this.fillFormDob = function (dob) {
    inputDob.sendKeys(dob);
   }

   this.fillFormWeight = function (weight) {
    inputWeight.sendKeys(weight);
   }

   this.fillFormEmail = function (email) {
    inputUserEmail.sendKeys(email);
   }

   this.confirmSignUpButton = function () {
    submit.click()
   }

   this.emptyFields = function (){
    this.fillFormFullName("");
    inputFullName.getAttribute('value').clear();
    console.log("checking for inputFullName" + inputFullName.getAttribute('value'));
    this.fillFormDob("");
    this.fillFormWeight("");
    this.fillFormEmail("");
   }

}

module.exports = SignUp;