exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'kondob1',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '8iG9zQLccJQ7eqish7hy',

    updateJob: false,
    specs: [
        './test/specs/single.js'
    ],
    exclude: [],

    capabilities: [{
        name: 'single_appium_test',
        build: 'webdriver-browserstack',
        device: 'Google Pixel',
        browserName: 'android',
        app: 'bs://82d1451119e218975b23f43e622e497a35a6e5ee',
        'browserstack.debug': true
    }],

    logLevel: 'verbose',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 50000
    }
};