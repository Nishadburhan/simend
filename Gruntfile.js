module.exports=function(grunt) {
  grunt.initConfig({

    // jshint: {
    //   all: ['Gruntfile.js', 'config/*.js', 'app/*.js','modules/**/*.js']
    // },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "app/style/main.css": "less/style.less" // destination file and source file
        }
      }
    },
    concat: {
      options: {
        event: ['changed', 'added', 'deleted']
      },
      dist: {
        src: ['config/*.js', 'core/*.js', 'modules/**/*.js'],
        dest: 'app/app.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'app/app.min.js': ['app/app.js']
        }
      }
    },
    watch: {
      options: {
        event: ['changed', 'added', 'deleted']
      },
      scripts: {
        files: ['config/*.js','core/*.js', 'modules/**/*.js','less/**/*.less'],
        tasks: ['concat','uglify','less'],
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-notify');


  grunt.registerTask('default',['watch','less', 'concat','uglify']);
}
