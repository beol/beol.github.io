requirejs.config({
    baseUrl: "/assets/js",
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
            (document.location.protocol == 'https:' ? 'https://secure' : 'http://edge') + '.quantserve.com/quant',
            'quant'
        ],
        "font-awesome": 'https://use.fontawesome.com/5c13958cd4'
    },
    shim: {
        "analytics": {
            exports: "__ga__"
        }
    }
});

requirejs(['font-awesome', 'scale.fix', 'tracker'], function() {
    'use strict';
});
