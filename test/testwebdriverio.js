// A simple test to verify a visible window is opened with a title
var Application = require('spectron').Application
var assert = require('assert')

var app = new Application({
    path: '/home/bruno/WebstormProjects/electron-spectron-quick-start/node_modules/.bin/electron',
    args: ['/home/bruno/WebstormProjects/electron-spectron-quick-start']
})

app.start().then(function () {
    // Check if the window is visible
    return app.browserWindow.isVisible()
}).then(function (isVisible) {
    // Verify the window is visible
    assert.equal(isVisible, true)
}).then(function () {
    // Get the window's title
    return app.client.getTitle()
/*}).then(function (title) {
    // Verify the window's title
    // assert.equal(title, 'My App')
    app.webContents.isLoading().then(function (visible) {
        console.log('window is loading? ' + visible);

    app.browserWindow.isVisible().then(function (visible) {
            console.log('window is visible? ' + visible)
        })

    })

}).then(function (texe) {
    // Verify the window's title
    // assert.equal(title, 'My App')
    app.client.getText('#elem').then(function (errorText) {
        console.log('The #elem text content is ' + errorText)
    })*/

}).then(function (click) {
    // Verify the window's title
    app.client.then(function (tclick) {


        var myButton = $('#myButton')
        myButton.click();
        browser.timeoutsImplicitWait(10000);
    })






}).catch(function (error) {
    // Log any failures
    console.error('Test failed', error.message)
}).then(function () {
    // Stop the application
    return app.stop()
})

