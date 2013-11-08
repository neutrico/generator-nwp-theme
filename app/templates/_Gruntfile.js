/* jshint unused: false, camelcase: false */
/* global module, grunt */

'use strict';

module.exports = function (grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

	// load source package.json to get properties
	pkg: grunt.file.readJSON('package.json'),

	bower_depend: {
	    options: {
		copy: true
	    },
	    init:{
		files: [{
		    'expand': true,
		    'cwd': 'bower_components/jquery/',
		    'src': ['jquery.*js'],
		    'dest': 'src/assets/js/vendor'
		},{
		    'expand': true,
		    'cwd': 'bower_components/bootstrap/dist/js',
		    'src': ['*.*js'],
		    'dest': 'src/assets/js/vendor'
		},{
		    'expand': true,
		    'cwd': 'bower_components/bootstrap/dist/css',
		    'src': ['*.*'],
		    'dest': 'src/assets/css'
		},{
		    'expand': true,
		    'cwd': 'bower_components/bootstrap/dist/fonts',
		    'src': ['*.*'],
		    'dest': 'src/assets/fonts'
		},{
		    'expand': true,
		    'cwd': 'bower_components/font-awesome/css',
		    'src': ['*.*'],
		    'dest': 'src/assets/css'
		},{
		    'expand': true,
		    'cwd': 'bower_components/font-awesome/fonts',
		    'src': ['*.*'],
		    'dest': 'src/assets/fonts'
		}]
	    }
	},

	/**
	 * Clean
	 *
	 * remove generated files
	 *
	 */
	clean: [ '<%= pkg.directories.pkg %>', 'bower_components', 'src/assets/js/vendor' ],

	/**
	 * Compass
	 *
	 * compile scss to css
	 *
	 */
	compass: {
	    options: {
		sassDir: 'src/assets/scss',
		cssDir: 'src/assets/css',
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
	 * Concurrent
	 *
	 * run time consuming tasks concurrently
	 *
	 */
	concurrent: {
	    compile: [
		'compass:compile'// ,
		// 'coffee:compile'
	    ],
	    initialize: [
		'replace:initialize',
		'copy:javascript',
		'copy:resources',
		'copy:vendor'
	    ],
	    pkg: [
		'phpdocumentor:pkg',
		'cssmin:pkg',
		'imagemin:pkg',
		'svgmin:pkg',
		'uglify:pkg'
	    ]
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
	'bower_depend:init'
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
	'concurrent:compile',
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
