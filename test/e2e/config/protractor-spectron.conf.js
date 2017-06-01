exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['/home/bruno/WebstormProjects/electron-spectron-quick-start/test/prot.js'],
    capabilities: {
        browserName: "chrome",
        /*chromeOptions: {
            binary: "/home/bruno/WebstormProjects/electron-spectron-quick-start/test/prot.js"
        }*/
    },
    onPrepare: function () {
        browser.resetUrl = "file://";
    }
};