requirejs.config({
    baseUrl: "assets/js",
    paths: {
        "ga": [
            'https://www.google-analytics.com/analytics',
            'http://www.google-analytics.com/analytics',
            'analytics'
        ],
        "qc": [
            "https://secure.quantserve.com/quant",
            "http://edge.quantserve.com/quant",
            'quant'
        ],
        "scale.fix": 'scale.fix'
    },
    shim: {
        "ga": {
            exports: "__ga__"
        },
        "qc": {
            exports: "Quantcast"
        },
        "scale.fix": {
            exports: "ScaleFix"
        }
    }
});

requirejs(['ga', 'qc', 'scale.fix'], function(ga) {
    'use strict';

    ga("send", "pageview");
});
