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
                ],
                template: require('grunt-template-jasmine-istanbul'),
                templateOptions: {
                    coverage: 'coverage/coverage.json',
                    report: [
                        {
                            type: 'cobertura',
                            options: {
                                dir: 'coverage'
                            }
                        },
                        {
                            type: 'lcovonly',
                            options: {
                                dir: 'coverage'
                            }
                        },
                        {
                            type: 'html',
                            options: {
                                dir: 'coverage'
                            }
                        }
                    ]
                },
                junit: {
                    path: 'report',
                    consolidate: true
                }
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
        },
        coveralls: {
            options: {
                src: 'coverage/lcov.info',
                force: false
            },
            app: {
                src: 'coverage/lcov.info'
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-coveralls');
    grunt.loadNpmTasks('grunt-jslint');

    // Register tasks
    grunt.registerTask('test', [
        'jslint',
        'jasmine',
        'coveralls'
    ]);
};
