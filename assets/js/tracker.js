define(['analytics', 'quant'], function(ga) {
    'use strict';

    ga('send', 'pageview');

    _qevents.push({
        qacct: document.getElementById('quantcast').getAttribute('data-pcode')
    });
});
