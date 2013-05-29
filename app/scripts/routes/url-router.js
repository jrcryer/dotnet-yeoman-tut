/*global define*/

define([
    'jquery',
    'backbone',
], function ($, Backbone) {
    'use strict';

    var UrlRouter = Backbone.Router.extend({
        routes: {
            "" : "onAppLoad"
        },

        onAppLoad: function() {
            console.log('test');
        }
    });

    return UrlRouter;
});