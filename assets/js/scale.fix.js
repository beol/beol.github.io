define(function() {
    'use strict';

    var metas = document.getElementsByTagName('meta'),
        updateViewportContent = function(content) {
            console.log(content);
            for (var i=0; i<metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            updateViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            updateViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        };

    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", initialize, false);
    }
});


