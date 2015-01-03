# [grunt](http://gruntjs.com/)-monic

Using [Monic](https://github.com/kobezzza/Monic) with Grunt.

[![NPM version](http://img.shields.io/npm/v/grunt-monic.svg?style=flat)](http://badge.fury.io/js/grunt-monic)
[![NPM dependencies](http://img.shields.io/david/kobezzza/grunt-monic.svg?style=flat)](https://david-dm.org/kobezzza/grunt-monic)
[![Build Status](http://img.shields.io/travis/kobezzza/grunt-monic.svg?style=flat&branch=master)](https://travis-ci.org/kobezzza/grunt-monic)

## Install

```bash
npm install grunt-monic --save-dev
```

## Usage

**Gruntfile.js**

```js
module.exports = function (grunt) {
	grunt.initConfig({
		monic: {
			compile: {
				options: {
					flags: {
						ie: true
					}
				},

				files: {
					'lib.js': ['source/core.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-monic');
	grunt.registerTask('default', ['monic']);
});
```

## [Options](https://github.com/kobezzza/Monic#%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B1%D0%BE%D1%80%D1%89%D0%B8%D0%BA%D0%B0-%D0%B8%D0%B7-nodejs)
## [License](https://github.com/kobezzza/grunt-monic/blob/master/LICENSE)

The MIT License.
