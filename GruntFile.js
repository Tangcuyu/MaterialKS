module.exports = function(grunt) {

    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-exec');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files : ['front/dist/**/*'],
            tasks : ['exec:run_keystone']
        },
        exec: {
            run_keystone: { cmd: 'npm run copy-static-assets'}
        }
    });

  

  // Default task(s).
     grunt.registerTask('default', ['watch']);

};