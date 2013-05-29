/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var UrlView = Backbone.View.extend({
        template: JST['app/scripts/templates/url.ejs'],

        events: {
            "submit form": "create",
        },

        create: function(e) {
            e.preventDefault();
            var input = this.$el.find('input');
            var value = input.val();

            if (value) {
                this.collection.create({longUrl: value});
                input.val("");
                input.focus();
            }
        }
    });

    return UrlView;
});