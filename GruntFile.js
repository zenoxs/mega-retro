module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['src/node/**/*.ts'],
                dest: 'build/app.js',
                options: {
                    module: 'amd',
                    target: 'es5',
                    watch: 'src/node'
                },
            },
        },
    });

    grunt.registerTask('default', ['typescript']);
}