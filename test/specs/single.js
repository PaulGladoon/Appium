var assert = require('assert');

describe('Newtopia positive test', function () {
    it('CASE #1: User can sign in', function () {
        let signInBtn = `~sign_in`;
        let emailField = `~login_email`;
        let passwordField = `~login_password`;
        let loginBtn = `~login_submit`;


        browser.waitForVisible(signInBtn, 20000);
        browser
            .element(signInBtn)
            .click();

        browser.waitForVisible(emailField, 20000);
        browser
            .element(emailField)
            .click()
            .keys('paul_qa2mailinator.com');

        browser.waitForVisible(passwordField, 20000);
        browser
            .element(passwordField)
            .click()
            .keys('goodgoodgood');

        browser.waitForVisible(loginBtn, 20000);
        browser
            .element(loginBtn)
            .click();

        browser.pause(5000);
    });
});