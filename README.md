[grunt](http://gruntjs.com)-monic
=================================

Using [Monic](https://github.com/MonicBuilder/Monic) with Grunt.

[![NPM version](http://img.shields.io/npm/v/grunt-monic.svg?style=flat)](http://badge.fury.io/js/grunt-monic)
[![Build Status](https://github.com/MonicBuilder/grunt-monic/workflows/build/badge.svg?branch=master)](https://github.com/MonicBuilder/grunt-monic/actions?query=workflow%3Abuild)

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
