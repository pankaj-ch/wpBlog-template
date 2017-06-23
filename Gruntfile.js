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
                    src: ["**/*.pug", "!**/_*.pug", "!layouts/**/*.pug"],
                    dest: "./dist",
                    expand: true,
                    ext: ".html"
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: "compressed",
                    sourcemap: "none"
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
                        // drop_console: true
                    }
                },
                files: [{
                    "dist/js/main.min.js": ["src/js/main/*.js"]
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
                files: ["src/**/*.pug"],
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