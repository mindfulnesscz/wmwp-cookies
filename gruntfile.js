'use strict';

module.exports = function ( grunt ) {

  grunt.initConfig( {
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          sourcemap: false,
          loadPath: ['./', 'node_modules']
        },
        files: {
          './assets/css/frontend.css': [
            'src/sass/frontend.sass'
          ],
          './assets/css/admin.css':[
            'src/sass/admin.sass'
          ]
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },

      sass: {
        files: [
          'src/sass/**/*.sass',
          'src/sass/**/*.scss'
        ],

        tasks: ['sass']
      },
    },

    clean: {
      options: {
        force: true // because the folder it's outside of working directory ( this is because we use dev folder for development stacks. Maybe it's time to get rid of this )
      },
      dist: [
        '../assets/css/*.css',
      ]
    }
  } );



  // Load tasks

  grunt.loadNpmTasks( 'grunt-contrib-clean' );

  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  grunt.loadNpmTasks( 'grunt-contrib-sass' );



  // Register tasks

  grunt.registerTask( 'default', [

    'clean',

    'sass',

  ] );

  grunt.registerTask( 'dev', [

    'watch'

  ] );



};