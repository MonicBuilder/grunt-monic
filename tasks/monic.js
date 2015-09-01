/*!
 * grunt-monic
 * https://github.com/MonicBuilder/grunt-monic
 *
 * Released under the MIT license
 * https://github.com/MonicBuilder/grunt-monic/blob/master/LICENSE
 */

var
	$C = require('collection.js').$C;

var
	monic = require('monic'),
	async = require('async');

module.exports = function (grunt) {
	grunt.registerMultiTask('monic', 'Using Monic', function () {
		var
			done = this.async(),
			opts = $C.extend(true, {}, this.options(), {saveFiles: true, cwd: process.cwd()}),
			tasks = [];

		$C(this.files).forEach(function (file) {
			var baseSrc = null;
			var content = $C(file.src).reduce(
				function (res, src) {
					if (baseSrc === null) {
						baseSrc = src;
					}

					return res += grunt.file.read(src);
				},

				'',

				{
					filter: function (src) {
						if (grunt.file.exists(src)) {
							return true;
						}

						grunt.log.warn('Source file "' + src + '" not found');
						return false;
					}
				}
			);

			tasks.push(function (cb) {
				var params = $C.extend(true, {file: file.dest}, opts, {content: content});
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

