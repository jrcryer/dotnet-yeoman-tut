/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var UrlModel = Backbone.Model.extend({

        defaults: {
        },

        url: "https://www.googleapis.com/urlshortener/v1/url",

        // validate: function(attrs, options) {
        //     if (attrs.longUrl === undefined) {
        //         return "requires a long URL";
        //     }
        // }
    });

    return UrlModel;
});