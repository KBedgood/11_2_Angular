module.exports = function(karma) {
    karma.set({
        browsers: ['Chrome', 'Firefox'],
        browserNoActivityTimeout: 60000,
        files: [
        	'node_modules/angular/angular.js',
		    'node_modules/angular-mocks/angular-mocks.js',
		    'main.js',
		    'factories/*.js',
		    'controllers/*.js',
		    'test/specs/*.spec.js'
        ],
        'plugins' : [
			'karma-mocha',
			'karma-chai',
			'karma-chrome-launcher',
			'karma-firefox-launcher'
		],
        frameworks: ['mocha', 'chai'],
        singleRun: true
    });
};