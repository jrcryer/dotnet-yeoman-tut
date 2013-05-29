/*global require*/
'use strict';

define([
    'backbone', 'app/collections/urls', 'app/views/urls'
], function (Backbone, Urls, UrlsView) {
    return Backbone.Router.extend({
        routes: {
            "": "init"
        },

        init: function() {

        }
    });
});
