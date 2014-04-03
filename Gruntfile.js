module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jasmine: {
            src: [
                'static/js/shell.js',
                'static/js/lexer.js',
                'static/js/parser.js',
                'static/js/app.js'
            ],
            options: {
                vendor: 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
                specs: [
                    'tests/shell.js',
                    'tests/lexer.js',
                    'tests/parser.js'
                ]
            }
        },
        jslint: {
            client: {
                src: [
                    'static/js/app.js',
                    'static/js/shell.js',
                    'static/js/lexer.js',
                    'static/js/parser.js'
                ],
                directives: {
                    browser: true,
                    predef: [
                        'jQuery',
                        '$',
                        'window',
                        'ShellSession',
                        'Lexer',
                        'Parser',
                        'document'
                    ]
                },
                options: {
                    junit: "jslint.xml",
                    checkstyle: "checkstyle.xml"
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    'static/js/app.js',
                    'static/js/shell.js',
                    'static/js/lexer.js',
                    'static/js/parser.js'
                ],
                tasks: ['test'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }

    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jslint');

    // Register tasks
    grunt.registerTask('test', ['jslint', 'jasmine']);
};
