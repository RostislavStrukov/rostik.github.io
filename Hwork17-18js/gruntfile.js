module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['js/src/*.js'],
      dest: 'js/dist/script.main.js'
    }
  },
uglify: {
    dist: {
      src: ['js/dist/script.main.js'],
      dest: 'js/dist/script.main.min.js'
    }
  },
    cssmin: {
      option: {
        keepSpecialComments: 0,
        report: 'gzip',
      },
      task: {
        src: ['css/src/style.css'],
        dest: 'css/dist/style.min.css'
      }
    },
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};