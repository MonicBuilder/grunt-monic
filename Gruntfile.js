'use strict';

/*!
 * grunt-monic
 * https://github.com/MonicBuilder/grunt-monic
 *
 * Released under the MIT license
 * https://github.com/MonicBuilder/grunt-monic/blob/master/LICENSE
 */

module.exports = function (grunt) {
	grunt.initConfig({
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
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['clean', 'monic', 'nodeunit']);
	grunt.registerTask('default', ['test']);
};
