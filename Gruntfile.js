module.exports = function(grunt){
    /*src: [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',                    
    'css/main.css',
    'bower_components/ng-table/dist/ng-table.min.css',
    'bower_components/metisMenu/dist/metisMenu.min.css',
    'bower_components/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css',
    'bower_components/angular-responsive-tables/release/angular-responsive-tables.min.css'
    ],
    dest: 'dist/css/styles.css',
    */
    
    grunt.initConfig({
          concat: {
            basic: {
              src: [
                    'js/app.js',
                    'js/controllers.js',
                    'bower_components/ng-table/dist/ng-table.min.js',
                    'bower_components/metisMenu/dist/metisMenu.min.js',
                    'bower_components/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js',
                    'bower_components/angular-responsive-tables/release/angular-responsive-tables.min.js'
                  ], //Where source js files reside
                  dest:'dist/js/minified.min.js', //Where to generate minified files
            }
          },
        
        cssmin: {
              target: {
                files: [{
                  expand: true,
                  cwd: 'dist/css/',
                  src: ['*.css', '!*.min.css'],
                  dest: 'dist/css',
                  ext: '.min.css'
                        }]
                    }
                },
        
        
        uglify:{
          my_target: {
              files: [{
                  src: [
                      'bower_components/jquery/dist/jquery.min.js',
                      'bower_components/bootstrap/dist/js/bootstrap.min.js',
                      'js/*.js',
                        'bower_components/ng-table/dist/ng-table.min.js',
                      'bower_components/metisMenu/dist/metisMenu.min.js',
                      'bower_components/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js',
                      'bower_components/angular-responsive-tables/release/angular-responsive-tables.min.js'
                  ], //Where source js files reside
                  dest:'dist/js/', //Where to generate minified files
                  expand:true, //
                  flatten:true, //Remove unnecessary spaces and new lines
                  ext:'.min.js' //This will be the extension of minified files
              }]
          }
      }
        
    });
    
    

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default',['concat']);
}