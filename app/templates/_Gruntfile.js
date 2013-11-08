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
	 * Clean
	 *
	 * remove generated files
	 *
	 */
	clean: [ '<%= pkg.directories.pkg %>' ],

	/**
	 * Compass
	 *
	 * compile scss to css
	 *
	 */
	compass: {
	    options: {
		sassDir: '<%= pkg.config.dir.src %>/scss',
		cssDir: '<%= pkg.config.dir.theme + "/" + pkg.config.slug %>/assets/css',
		relativeAssets: false,
		outputStyle: 'expanded',
		force: true
	    },

	    // on compile keep line_comments on
	    compile: {
		options: {
		    environment: 'development'
		}
	    },

	    // on deploy remove line_comments
	    pkg: {
		options: {
		    environment: 'production'
		}
	    }
	},

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

    /**
     * Build lifecycle tasks
     *
     *
     * Initialize
     *
     */
    grunt.registerTask('initialize', [
	'clean',
	// 'concurrent:initialize'
    ]);

    /**
     * Compile
     *
     * compile source code and sync with sandbox server
     * run compile as default task on the fly with watch
     */
    grunt.registerTask('compile', [
	'initialize',
	// 'concurrent:compile',
	// 'sync:watch'
    ]);

    // on default task build sandbox version and wait for changes
    grunt.registerTask('default', [

	// 'sync:sandbox',
	'compile',
	'open',
	// 'watch'

    ]);
};
