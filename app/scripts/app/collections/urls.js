/*global require*/
'use strict';

define([
    'backbone', 'app/models/url'
], function (Backbone, Url) {
    return Backbone.Collection.extend({
        model: Url
    });
});