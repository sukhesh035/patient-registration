// An example configuration file.
exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    plugins: [{
        path: 'node_modules/protractor-istanbul-plugin'
    }],

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['registration_spec.js'],
    noGlobals: false,
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {

        defaultTimeoutInterval: 30000
    }
};
