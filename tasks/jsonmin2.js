'use strict';

var chalk = require('chalk');
var maxmin = require('maxmin');

module.exports = function(grunt) {
    grunt.registerMultiTask('jsonmin2', 'Minfies JSON files', function() {
        var createdFiles = 0;
        var totalInBytes = 0;
        var totalOutBytes = 0;

        var options = this.options({
            report: 'min'
        });

        this.files.forEach(function(filePair) {
            var dest = filePair.dest;

            filePair.src.forEach(function(src) {
                if (!grunt.file.exists(src)) {
                    grunt.log.warn('Source file "' + chalk.cyan(src) + '" not found.');
                    return;
                }

                var input = grunt.file.read(src);
                var parsed;
                try {
                    parsed = JSON.parse(input);
                }
                catch (err) {
                    grunt.log.error(err);
                    grunt.warn('JSON minification failed at ' + src + '.');
                    return;
                }

                var output = JSON.stringify(parsed);
                grunt.file.write(dest, output);

                grunt.verbose.writeln('File ' + chalk.cyan(filePair.dest) + ' created: ' + maxmin(input, output, options.report === 'gzip'));

                totalInBytes += input.length;
                totalOutBytes += output.length;
                createdFiles++;
            });
        });

        if (createdFiles > 0) {
            grunt.log.ok(createdFiles + ' ' + grunt.util.pluralize(this.files.length, 'file/files') + ' created. ' + chalk.dim(maxmin(totalInBytes, totalOutBytes)));
        } else {
            grunt.log.warn('No files created.');
        }
    });
};
