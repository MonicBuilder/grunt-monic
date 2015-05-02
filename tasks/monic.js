/*
 * grunt-monic
 * https://github.com/MonicBuilder/grunt-monic
 *
 * Released under the MIT license
 * https://github.com/MonicBuilder/grunt-monic/blob/master/LICENSE
 */

var monic = require('monic');

module.exports = function (grunt) {
	grunt.registerMultiTask('monic', 'Using Monic', function () {
		var
			done = this.async(),
			that = this;

		var
			i = 0,
			res = '';

		this.files.forEach(function (file) {
			file.src.filter(function (src) {
				if (grunt.file.exists(src)) {
					return true;
				}

				grunt.log.warn('Source file "' + src + '" not found.');
				return false;

			}).forEach(function (src) {
				try {
					i++;

					var opts = that.options();

					opts.content = grunt.file.read(src);
					opts.saveFiles = false;

					if (opts.sourceMaps) {
						opts.file = opts.file || file.dest;
					}

					monic.compile(src, opts, function (err, data) {
						if (err) {
							return grunt.log.error(err.message);
						}

						i--;
						res += data;

						if (!i) {
							grunt.file.write(file.dest, res);
							grunt.log.writeln('File "' + file.dest + '" created.');
							done(res);
						}
					});

				} catch (err) {
					grunt.log.error(err.message);
				}
			});
		});
	});
};
