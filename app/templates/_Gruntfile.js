/* jshint unused: false */
/* global module, grunt */

'use strict';

module.exports = function (grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

	// load source package.json to get properties
	pkg: grunt.file.readJSON('package.json'),

	/**
	 * Open
	 *
	 * open url in browser
	 *
	 */
	open: {
	    devel: {
		path: '<%= pkg.config.sandbox.url %>'
	    }
	},
	/**
	 * Sync
	 *
	 * synchronize theme directory with sandbox
	 *
	 */
	sync: {
	    sandbox: {
		files: [{
		    cwd: 'src',
		    src: '**/*.*',
		    dest: '<%= pkg.config.sandbox.path + "/" + pkg.config.slug %>'
		}]
	    }
	},

	/**
	 * Watch
	 *
	 * watch changes in sources
	 *
	 */
	watch: {
	    src: {
		files: ['src/**/*.*'],
		tasks: ['sync:sandbox']
	    }
	}

    });


    // on default task build sandbox version and wait for changes
    grunt.registerTask('default', [
	'open',
	'sync:sandbox',
	// 'compile',
	'watch'
    ]);
};
