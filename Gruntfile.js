module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: [
                '_sass/**'
            ],
            tasks: ['cssmin', 'copy']
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/font-awesome/css/fonts/',
                        src: '**',
                        dest: 'dist/fonts/'
                    }
                ]
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            marketing: {
                src: [
                    'bower_components/waypoints/lib/jquery.waypoints.min.js',
                    'bower_components/smooth-scroll/dist/js/smooth-scroll.min.js',
                    'js/site.js'
                ],
                dest: 'dist/js/public.js'
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                sourceMap: true
            },
            target: {
                files: {
                    '_site/dist/css/site.min.css': [
                        'css/pure.min.css',
                        'css/pure-responsive.min.css',
                        '_site/css/main.css'
                    ]
                }
            }
        },

        uglify: {
            options: {
                sourceMap: true
            },
            marketing: {
                files: {'dist/js/public.min.js': ['dist/js/public.js']}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['cssmin', 'copy']);
    grunt.registerTask('prebuild', ['concat', 'uglify', 'copy']);
};