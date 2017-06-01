const path = require('path');
const electron = require('electron-prebuilt');
var Application = require('spectron').Application
var assert = require('assert')

// let appPath = path.join(__dirname, '..', 'dist');

function awaitAngular2(client) {
    // client.timeoutsAsyncScript(5000);
    // From: https://github.com/angular/protractor/blob/master/lib/clientsidescripts.js
    // Returns a promise that resolves when all of Angular 2's components are loaded and stable
    return client.executeAsync(function(done) {
        try {
            var testabilities = window.getAllAngularTestabilities();
            var count = testabilities.length;
            var decrement = function() {
                count--;
                if (count === 0) {
                    done();
                }
            };
            testabilities.forEach(function(testability) {
                testability.whenStable(decrement);
            });
        } catch (err) {
            done(err.message);
        }
    });
}

describe('application launch', function () {


    beforeEach(function () {
        this.app = new Application({
            path: '/home/bruno/WebstormProjects/electron-spectron-quick-start/node_modules/.bin/electron',
            args: ['/home/bruno/WebstormProjects/electron-spectron-quick-start']
        });
        return this.app.start().then(() => {
            return awaitAngular2(this.app.client);
        })
    });

    afterEach(function () {
        if (this.app && this.app.isRunning()) {
            return this.app.stop()
        }
    });

    /*it('shows an initial window', function () {
        // this.timeout(10000)

        return this.app.client.getWindowCount().then(function (count) {
            assert.equal(count, 1)
        })
    });

    it('shows a headline', function () {
        return this.app.client.getText('#elem').then(function (errorText) {
            console.log('The #elem text content is ' + errorText)
            assert.equal(errorText, 'HOUSE OF CUCKS')
        })
    });*/

    it('button click', function () {
        return this.app.client.click('#myButton').then(function (errorText) {

            // console.log('The #elem text content is ' + errorText)
        })
    });

    it('url click', function () {
        return this.app.client.click('#test').then(function (errorText) {

            // console.log('The #elem text content is ' + errorText)
        })
    });


    /*it('Login Dispense', function () {
        // var openclicl = this.app.client.elementIdText('open');
        browser.waitForAngularEnabled(false);
        browser.driver.findElement(by.id('myButton')).click();

        // browser.timeoutsImplicitWait(10000);

    })*/





});