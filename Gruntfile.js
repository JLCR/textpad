module.exports = function(grunt) {

  // SETUP INITIAL CONFIGURATION
  grunt.initConfig({
    pkg: "<%= grunt.file.readJSON('package.json') %>",

    // META & RESOURCES
    copy: {
      build_manifest: {
        src: "manifest.json",
        dest: "build/manifest.json"
      },
      build_fonts: {
        src: "resources/fonts/*",
        dest: "build/fonts/",
        expand: true,
        flatten: true
      },
      build_icons: {
        src: "resources/icons/*",
        dest: "build/icons/",
        expand: true,
        flatten: true
      }
    },

    // CSS
    less: {
      build_styles: {
        files: {
          "build/index.css" : "src/styles/main.less"
        }
      }
    },

    // SCRIPTS
    uglify: {
      build_frontend_scripts: {
        options: {
          mangle: true
        },
        files: {
          "build/index.js" : ["src/scripts/**/*.js"]
        }
      }
    },

    // VIEW
    htmlmin: {
      build_index: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        files: {
          "build/index.html" : "src/index.html"
        }
      }
    }
  });

  // LOAD NPM TASKS
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // REGISTER TASKS
  grunt.registerTask('build', [
    "copy:build_manifest",
    "copy:build_fonts",
    "copy:build_icons",
    "less:build_styles",
    "uglify:build_frontend_scripts",
    "htmlmin:build_index"
  ]);
  grunt.registerTask('default', []);
};
