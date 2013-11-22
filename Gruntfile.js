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
        },
        jslint: {
            client: {
                src: [
                    'static/js/main.js',
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
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    'static/js/main.js',
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
