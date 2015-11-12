require.config({
    baseUrl: "assets/js",
    paths: {
        "bootstrap": "bootstrap",
        "jquery": "jquery",
        "tracker": "tracker"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            export: "Bootstrap"
        },
        "tracker": {
            exports: "tracker"
        }
    }
});

require(["tracker", "jquery", "bootstrap"], function() {

});
