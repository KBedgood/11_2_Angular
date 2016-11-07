module.exports = function(karma) {
    karma.set({
        browsers: ['Chrome', 'Firefox'],
        files: [
            'src/app.js',
            'test/**/*.spec.js'  // the asterisks tell karma to look in ALL subdirectories as well
        ],
        frameworks: ['mocha', 'chai'],
        singleRun: true
    });
};