define(function() {

    var metas = document.getElementsByTagName('meta'),
        gestureStart = function () {
            for (var i = 0; i < metas.length; ++i) {
                if (metas[i].name === 'viewport') {
                    console.log(metas[i]);
                    metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
                }
            }
        };

        if (navigator.userAgent.match(/iPhone/i)) {
            for (var i = 0; i < metas.length; ++i) {
                if (metas[i].name === 'viewport') {
                    console.log(metas[i]);
                    metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0"
                }
            }

            document.addEventListener("touchstart", gestureStart, false);
        }
});

