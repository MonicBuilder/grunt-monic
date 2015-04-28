/*
 * grunt-monic
 * https://github.com/MonicBuilder/grunt-monic
 *
 * Copyright (c) 2014-2015 kobezzza
 * Licensed under the MIT license.
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

		this.files.forEach(function (f) {
			f.src.filter(function (filepath) {
				if (grunt.file.exists(filepath)) {
					return true;
				}

				grunt.log.warn('Source file "' + filepath + '" not found.');
				return false;

			}).forEach(function (filepath) {
				try {
					i++;

					var options = that.options();
					options.content = grunt.file.read(filepath);

					monic.compile(filepath, options, function (err, data) {
						if (err) {
							return grunt.log.error(err.message);
						}

						i--;
						res += data;

						if (!i) {
							grunt.file.write(f.dest, res);
							grunt.log.writeln('File "' + f.dest + '" created.');
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
