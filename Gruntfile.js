module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jasmine: {
            src: [
                'static/js/shell.js',
                'static/js/lexer.js',
                'static/js/parser.js',
                'static/js/main.js'
            ],
            options: {
                vendor: 'static/bower_components/jquery/jquery.min.js',
                specs: [
                    'tests/shell.js',
                    'tests/lexer.js',
                    'tests/parser.js'
                ]
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Register tasks
    grunt.registerTask('test', 'jasmine');
};
