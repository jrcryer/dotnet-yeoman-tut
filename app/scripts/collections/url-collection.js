/*global define*/

define([
    'underscore',
    'backbone',
    'models/url-model',
    'backbone.localStorage'
], function (_, Backbone, UrlModel) {
    'use strict';

    var UrlCollection = Backbone.Collection.extend({

        cache: new Backbone.LocalStorage("urls"),

        model: UrlModel,

        initialize: function() {
            this.on('change', this.cacheUrl, this);
            this.add(this.cache.findAll());
        },

        cacheUrl: function(model) {
            this.cache.create(model);
        }
    });

    return UrlCollection;
});