var assert = require('assert');
describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://www.bbc.co.uk/blogs/test/entries/f5f3031a-1a29-44ee-b2f8-86e78bfd57b0');
        var title = browser.getTitle();
        //assert.equal(title, 'Catering & Hospitality News | The Caterer');

        //browser.click('.tcHeader-socialButtons-signIn')
        browser.url('https://account.bbc.com/register#comments')

         var day = browser.element('#day-input');

       day.setValue('22');
       

        var month = browser.element('#month-input');

        month.setValue('may');

        var birthyear = browser.element('#year-input');

        birthyear.setValue('1989');

        var submitbutton = browser.element('#submit-button');
         submitbutton.click();

/*
//Assertion needs to be edited to prove the error message shown up //
         var outerhtmlbox = browser.element('.field-explainer__outer');

         outerhtmlbox.click();
   
      var dateErrorMessage = browser.getText('#form-error-dateOfBirth');

        console.log(dateErrorMessage);
// assert.equal(dateErrorMessage,'Make sure it's a real date written as DD-MM-YYYY e.g. the 5th of June 2009 is 05-06-2009.')
     
       
*/

var email = getRandomEmail("@mailinator.com",8);
var emailInput = browser.element('#email-input');
emailInput.setValue(email);
var password = browser.element('#password-input');
password.setValue('password-input123');

var postcodevalue = browser.element('#location-select');

postcodevalue.setValue('London');
/*
 var genderselectBox = $('#gender-input');
    console.log(genderselectBox.getValue()); // returns "someValue0"
    gender.selectByIndex(2);
    var newsletterNoButton = browser.element('#optOut');
    newsletterNoButton.click();
    submitbutton.click();
    var sucessMessage = browser.getText('.heading u-padding-bottom-quad header__title--success');
    console.log(dateErrorMessage);

    */        
});
});


function getRandomEmail(domain,length)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var emailgen = Math.random().toString(36).substr(2, 5);

    for( var i=0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text + domain;
}

