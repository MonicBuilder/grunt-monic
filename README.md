[grunt](http://gruntjs.com)-monic
=================================

Using [Monic](https://github.com/MonicBuilder/Monic) with Grunt.

[![NPM version](http://img.shields.io/npm/v/grunt-monic.svg?style=flat)](http://badge.fury.io/js/grunt-monic)
[![NPM dependencies](http://img.shields.io/david/MonicBuilder/grunt-monic.svg?style=flat)](https://david-dm.org/MonicBuilder/grunt-monic)
[![NPM devDependencies](http://img.shields.io/david/dev/MonicBuilder/grunt-monic.svg?style=flat)](https://david-dm.org/MonicBuilder/grunt-monic#info=devDependencies&view=table)
[![Build Status](http://img.shields.io/travis/MonicBuilder/grunt-monic.svg?style=flat&branch=master)](https://travis-ci.org/MonicBuilder/grunt-monic)

## Install

```bash
npm install monic grunt-monic --save-dev
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
};
```

## [Options](https://github.com/MonicBuilder/Monic#using-in-nodejs)
## [License](https://github.com/MonicBuilder/grunt-monic/blob/master/LICENSE)

The MIT License.
