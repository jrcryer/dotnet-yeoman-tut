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
        jquery: '../jquery/jquery',
        backbone: '../backbone-amd/backbone',
        underscore: '../underscore-amd/underscore'
    }
});

require([
  '../spec/models/url-model'
],
function()  {
    mocha.run();
});