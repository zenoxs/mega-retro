module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            node: {
                files: [
                    { src: 'src/node/**/*.ts', dest: 'build' },
                ],
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    //watch: 'src/node',
                    sourcemap: false,
                    declaration: false,
                    removeComments: true
                },
            },
            browser: {
                files: [
                    { src: 'src/browser/**/*.ts', dest: 'build' },
                ],
                options: {
                    module: 'amd',
                    target: 'es5',
                    //watch: 'src/browser',
                    sourcemap: false,
                    declaration: false,
                    removeComments: true
                },
            }
        },
        watch: {
            node: {
                files: 'src/node/**/*.ts',
                tasks: ['typescript:node']
            }, client: {
                files: 'src/browser/**/*.ts',
                //tasks: ['typescript:browser']
                tasks: ['browserify']
            }
        },
        browserify: {
            browser: {
                src: ['src/browser/main.ts'],
                dest: 'build/src/browser.js',
                options: {
                    preBundleCB: function (bundle) {
                        bundle.plugin('tsify', { target: 'ES5', module: 'commonjs', sourceMap: true });
                    },
                    browserifyOptions: {
                        standalone: 'Browser',
                        debug: true
                    },
                },
                external: ['nw.gui']
            }
        }
    });

    grunt.registerTask('default', ['watch']);
}