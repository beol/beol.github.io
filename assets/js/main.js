window.GoogleAnalyticsObject = "__ga__";
window.__ga__ = {
    q: [['create', 'UA-8853012-4', 'auto']],
    l: Date.now()
};

require.config({
    baseUrl: "assets/js",
    paths: {
        "bootstrap": "bootstrap",
        "jquery": "jquery",
        "ga": [
            'https://www.google-analytics.com/analytics',
            'http://www.google-analytics.com/analytics',
            'analytics'
        ],
        "qc": [
            "https://secure.quantserve.com/quant",
            "http://edge.quantserve.com/quant",
            'quant'
        ]
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            export: "Bootstrap"
        },
        "ga": {
            exports: "__ga__"
        },
        "qc": {
            exports: "qc"
        }
    }
});

require(["ga", "qc", "jquery", "bootstrap"], function(ga, qc, $, Bootstrap) {
    ga("send", "pageview");
    qc._qevents.push({
        qacct: "p-2hmv506hLezgG"
    });
});
