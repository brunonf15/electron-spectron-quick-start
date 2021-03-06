const Application = require('spectron').Application;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = require('chai').expect;
const assert = require('chai').assert;
const path = require('path');
const appPath = path.join(__dirname, '..');
//Linux path
const electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');
//Windows path
// const electronPath = path.join(__dirname, '..', 'node_modules', 'electron' ,'dist', 'electron.exe');

global.before(function () {
    chai.should();
    chai.use(chaiAsPromised);
});

describe('App starts and has correct title and buttons', function () {
    "use strict";
    this.timeout(15000);
    let app;

    before(function () {
        app = new Application({
            path: electronPath,
            env: { SPECTRON: true },
            args: [appPath]
        });
        return app.start();
    });

    after(function (done) {
        done();
        return app.stop();
    });

    /*it('opens a window', function () {
        return app.client.waitUntilWindowLoaded().getWindowCount()
            .should.eventually.equal(1);
    });

    it('tests the title', function () {
        return app.client.waitUntilWindowLoaded().getTitle()
            .should.eventually.equal('Hello World!');
    });*/


    it('should get text of an element or elements', function () {

        then(function (texe) {
            // Verify the window's title
            // assert.equal(title, 'My App')
            app.client.getText('#elem').then(function (errorText) {
                console.log('The #elem text content is ' + errorText)
            })

        // outputs the following:
        // "Lorem ipsum do
        // lor sit amet,consetetur sadipscing elitr"
        // outputs "" (empty string) since element is not interactable
    });

    /*it('tests the Open File button text exists', function() {
        return app.client.getText('#open-file')
            .should.eventually.equal('Open File');
    });

    it('tests the Save button text exists', function () {
        return app.client.getText('#save-markdown')
            .should.eventually.equal('Save Markdown');
    });*/

});
});


