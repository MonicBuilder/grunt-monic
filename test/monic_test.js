/*!
 * grunt-monic
 * https://github.com/MonicBuilder/grunt-monic
 *
 * Released under the MIT license
 * https://github.com/MonicBuilder/grunt-monic/blob/master/LICENSE
 */

const
	grunt = require('grunt');

exports.snakeskin = {
	setUp(done) {
		done();
	},

	test(test) {
		test.expect(1);

		const
			text = grunt.file.read('tmp/test.js').trim(),
			expected = grunt.file.read('test/expected/test').trim();

		test.equal(text, expected, 'simple test');
		test.done();
	}
};
