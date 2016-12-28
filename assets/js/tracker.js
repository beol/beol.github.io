define(['jquery', 'analytics', 'quant'], function($, ga) {

    ga('send', 'pageview');

    _qevents.push({
        qacct: $('#quantcast').data('pcode')
    });
});
