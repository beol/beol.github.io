require.config({
    baseUrl: 'assets/js',
    paths: {
        bootstrap: 'bootstrap',
        jquery: 'jquery'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            export: 'Bootstrap'
        }
    }
});

require(['jquery', 'bootstrap'], function() {

});