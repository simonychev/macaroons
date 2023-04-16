module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.less'],
                    dest: 'dist',
                    ext: '.css',
                },{
                    src: ["css/*.less"],
                    dest: "dist/style.css"
                }
                ]
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                   'dist/style.min.css': ['dist/style.css'],
                }
            }
        },
        clean: ['dist/style.css', 'dist/style.css.map'],
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['css/*.less'],
                tasks: ['less', 'cssmin', 'clean'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
};