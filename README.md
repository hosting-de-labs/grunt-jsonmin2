# grunt-jsonmin2

Minify your JSON files to save some bytes.

## Getting Started
This plugin requires Grunt `>=0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsonmin2 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsonmin2');
```

## The jsonmin2 task
_Run this task with the `grunt jsonmin2` command._

### Options

This task defined the following options:

#### report

Type: `string`
Choices: `'min'`, `'gzip'`
Default: `'min'`

Report minification result or both minification and gzip results.
This is useful to see exactly how well the JSON files are minifying but using `'gzip'` will make the task take 5-10x longer to complete. [Example output](https://github.com/sindresorhus/maxmin#readme).

### Usage

```js
jsonmin2: {
  target: {
    files: {
      expand: true,
      cwd: 'release/data',
      src: '*.json',
      dest: 'release/data'
    }
  }
}
```

## License

Copyright (c) 2015 hosting.de GmbH. Licensed under the MIT license.
