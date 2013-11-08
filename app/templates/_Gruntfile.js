/* jshint undef: true, unused: false */
/* global grunt */

'use strict';

module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

	// load source package.json to get properties
	pkg: grunt.file.readJSON('package.json'),


    });


    // on default task build sandbox version and wait for changes
    grunt.registerTask('default', [
	// 'open',
	// 'compile',
	'watch'
    ]);
};
