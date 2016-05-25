module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
// concat: {
//     options: {
//       separator: ';',
//     },
//     dist: {
//       src: ['js/src/*.js'],
//       dest: 'js/dist/script.main.js'
//     }
//   },
// uglify: {
//     dist: {
//       src: ['js/dist/script.main.js'],
//       dest: 'js/dist/script.main.min.js'
//     }
//   },
//     cssmin: {
//       option: {
//         keepSpecialComments: 0,
//         report: 'gzip',
//       },
//       task: {
//         src: ['css/src/style.css'],
//         dest: 'css/dist/style.min.css'
//       }
//     },
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['*.scss'],
        dest: 'styles',
        ext: '.css'
      }]
    }
  },
    watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['styles/*.scss'],
      tasks: ['sass'],
    }
  }
});

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);
};