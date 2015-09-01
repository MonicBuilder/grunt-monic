/*!
 * grunt-monic
 * https://github.com/MonicBuilder/grunt-monic
 *
 * Released under the MIT license
 * https://github.com/MonicBuilder/grunt-monic/blob/master/LICENSE
 */

var grunt = require('grunt');
exports.snakeskin = {
	setUp: function (done) {
		done();
	},

	test: function (test) {
		test.expect(1);

		var
			text = grunt.file.read('tmp/test.js').trim(),
			expected = grunt.file.read('test/expected/test').trim();

		test.equal(text, expected, 'simple test');
		test.done();
	}
};
