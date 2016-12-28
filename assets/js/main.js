requirejs.config({
    baseUrl: "assets/js",
    paths: {
        "jquery": [
            'https://code.jquery.com/jquery-1.12.4.min',
            'jquery-1.12.4.min'
        ],
        "analytics": [
            'https://www.google-analytics.com/analytics',
            'analytics'
        ],
        "quant": [
            (document.location.protocol == 'https://' ? 'https://secure' : 'http://edge') + '.quantserve.com/quant',
            'quant'
        ],
        "scale.fix": 'scale.fix'
    },
    shim: {
        "analytics": {
            exports: "__ga__"
        }
    }
});

requirejs(['tracker', 'scale.fix'], function() {
    'use strict';
});
