module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jasmine: {
            jsbasicshell: {
                src: [
                    'static/js/shell.js',
                    'static/js/lexer.js',
                    'static/js/parser.js',
                    'static/js/main.js'
                ],
                options: {
                    vendor: [
                        'static/bower_components/jquery/jquery.min.js'
                    ],
                    specs: 'tests/test.js'
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Register tasks
    grunt.registerTask('test', 'jasmine');
};
