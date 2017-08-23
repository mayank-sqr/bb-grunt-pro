module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    concat: {
      options: {
        stripBanners: true,
        banner: '/* Compiled file! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      app: {
        dest: 'public/app.js',
        src: [
          'app/models/*.js',
          'app/collections/*.js',
          'app/views/*.js',
          'app/*.js',
        ]
      },

      assets: {
        dest: 'public/libs.js',
        src: [
          'assets/js/jquery.js',
          'assets/js/underscore.js',
          'assets/js/backbone.js',
          'assets/js/bootstrap-multiselect.js',
          'assets/js/bootstrap-notify.js',
          'assets/js/bootstrap-select.js',
          'assets/js/bootstrap-wysihtml5.js',
          'assets/js/bootstrap.js',
          'assets/js/underscore-mixins.js',
          'assets/js/handlebars.js',
          'assets/js/template.js',
        ]
      },

    },

    less: {
      development: {
        options: {
          paths: ['less']
        },
        files: {
          'public/app.css': 'assets/less/*.less',
        }
      }
    },
    concat_css: {
      all: {
        src: [
          'assets/css/bootstrap-responsive.css',
          'assets/css/bootstrap-responsive.min.css',
          'assets/css/bootstrap-wysihtml5.css',
          'assets/css/bootstrap-notify.css',
          'assets/css/bootstrap-select.css',
          'assets/css/bootstrap-multiselect.css',
          'assets/css/bootstrap.css',
          'assets/css/bootstrap.min.css'
        ],
        dest: 'public/styles.css'
      },
    },

    handlebars: {
      compile: {
        options: {
          namespace: false
        },
        files: {
          'public/compiledTemplate.js': 'app/tpl/*.hbs',
          
        }
      }
    },

    watch: {
      scripts: {
        files: ['assets/js/*.js', 'app/**/*.js', 'app/*.js'],
        tasks: ['concat'],
        options: {
          interrupt: true
        }
      },
      templates: {
        files: 'app/tpl/*.hbs',
        tasks: ['handlebars'],
        options: {
          interrupt: true
        }
      },
      less: {
        files: 'assets/less/*.less',
        tasks: [ 'less' ],
        options: {
          interrupt: true
        }
      }
    },

  });

  // task plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // tasks
  grunt.registerTask('default', ['less', 'concat', 'concat_css', 'handlebars', 'watch']);
  

};
