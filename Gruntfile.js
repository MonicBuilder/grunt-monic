/*
 * grunt-monic
 * https://github.com/MonicBuilder/grunt-monic
 *
 * Copyright (c) 2014-2015 kobezzza
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],

			options: {
				jshintrc: '.jshintrc'
			}
		},

		clean: {
			tests: ['tmp']
		},

		monic: {
			test: {
				files: {
					'tmp/test.js': ['test/fixtures/test.js']
				}
			}
		},

		nodeunit: {
			tests: ['test/*_test.js']
		}
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['clean', 'monic', 'nodeunit']);
	grunt.registerTask('default', ['jshint', 'test']);
};
