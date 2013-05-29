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
        app: 'app/app',
        'app/models/url': 'app/models/url',
        'app/collections/urls': 'app/collections/urls',
        'app/views/urls': 'app/views/urls'
    }
});

require([
    'backbone', 'app'
], function (Backbone, App) {
    var app = new App();
    Backbone.history.start();
});