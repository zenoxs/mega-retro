module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                files: [
                    { src: 'src/node/**/*.ts', dest: 'build' },
                    { src: 'src/browser/**/*.ts', dest: 'build/client.js' },
                ],
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    watch: 'src',
                    sourcemap: false,
                    declaration: false
                },
            },
        },
    });

    grunt.registerTask('default', ['typescript']);
}