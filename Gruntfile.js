//Gruntfile.js
module.exports = function (grunt) {
    // -----------load all grunt tasks matching the ["grunt-*"] pattern-----------
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        pug: {
            compile: {
                options: {
                    client: false,
                    // pretty: true
                },
                files: [{
                    cwd: "src/template",
                    src: ["**/*.jade", "!**/_*.jade", "!layouts/**/*.jade"],
                    dest: "./dist",
                    expand: true,
                    ext: ".html"
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: "compressed"
                },
                files: [{
                    "dist/css/style.min.css": "src/css/style.sass"
                }]
            }
        },

        uglify: {
            dist: {
                options: {
                    compress: {
                        drop_console: true
                    }
                },
                files: [{
                    "dist/js/style.min.js": ["src/js/**/*.js"]
                }]
            }
        },

        image: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: "src/img/",
                    src: ["**/*.{png,jpg,gif,svg,jpeg}"],
                    dest: "dist/img/"
                }]
            }
        },

        watch: {
            html: {
                files: ["src/**/*.jade"],
                tasks: ["pug"]
            },
            uglify: {
                files: ["src/**/*.js"],
                tasks: ["uglify"]
            },
            css: {
                files: ["src/**/*.sass"],
                tasks: ["sass"]
            },
            img: {
                files: ["src/img/**/*.{png,jpg,gif,svg,jpeg}"],
                tasks: ["image"]
            }
        }
    });

    grunt.registerTask("build", ["sass", "uglify", "pug"]);
    grunt.registerTask("default", ["build", "watch"]);

};