/*!
 * grunt-monic
 * https://github.com/MonicBuilder/grunt-monic
 *
 * Released under the MIT license
 * https://github.com/MonicBuilder/grunt-monic/blob/master/LICENSE
 */

require('core-js/es6/object');

var
	monic = require('monic'),
	async = require('async');

module.exports = function (grunt) {
	grunt.registerMultiTask('monic', 'Using Monic', function () {
		var
			done = this.async(),
			opts = Object.assign(this.options(), {saveFiles: true, cwd: process.cwd()}),
			tasks = [];

		this.files.forEach(function (file) {
			var baseSrc = null;

			function reduce(res, src) {
				if (!grunt.file.exists(src)) {
					grunt.log.warn('Source file "' + src + '" not found');
					return res;
				}

				if (baseSrc === null) {
					baseSrc = src;
				}

				return res += grunt.file.read(src);
			}

			tasks.push(function (cb) {
				var params = Object.assign({file: file.dest}, opts,
					{
						content: file.src.reduce(reduce, '')
					}
				);

				monic.compile(baseSrc, params, function (err) {
					if (!err) {
						grunt.log.writeln('File "' + baseSrc + '" was successfully built -> "' + params.file + '"');
					}

					cb(err);
				});
			});
		});

		async.parallel(tasks, function (err) {
			if (err) {
				return grunt.log.error('Monic error: %s. \nFile: %s. \nLine: %s', err.message, err.fileName, err.lineNumber);
			}

			done();
		});
	});
};

