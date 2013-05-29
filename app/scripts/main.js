/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        app: {
            deps: ['backbone']
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
        bootstrap: 'vendor/bootstrap',
        routes: 'routes/url-router',
        model: 'app/models/url-model',
        collection: 'collections/url-collection',
        view: 'views/url-view'
    }
});

require([
    'backbone', 'routes'
], function (Backbone, App) {
    var app = new App();
    Backbone.history.start();
});