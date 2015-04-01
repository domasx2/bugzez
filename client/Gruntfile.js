module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      dist: ['dist/*'],
      templates: ['dist/templates']
    },
    stylus: {
      compile: {
        files: {
          'dist/style.css': 'src/stylesheets/style.styl'
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['src/stylesheets/**/*.styl'],
        tasks: ['stylus:compile']
      },
      javascript: {
        files: ['src/js/**/*.js'],
        tasks: ['javascript']
      }
    },
    browserify: {
      dist: {
        files: {
          'dist/app.js': ['src/js/index.jsx']
        }
      },
      options: {
        transform: [require('grunt-react').browserify],
        browserifyOptions: {
          debug: true
        }
      }
    },
    exorcise: {
      bundle: {
        options: {},
        files: {
          'dist/app.map': ['dist/app.js'],
        }
      }
    },

    bower_concat: {
      all: {
        dest: 'dist/bower.js',
        cssDest: 'dist/bower.css',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-exorcise');
  grunt.loadNpmTasks('grunt-bower-concat');

  grunt.task.registerTask('javascript', ['browserify:dist', 'exorcise']);

  grunt.task.registerTask('build', ['bower_concat:all', 'clean:dist', 'stylus:compile', 'javascript']);
};