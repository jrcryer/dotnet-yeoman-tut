/*global describe, it */
'use strict';

define(['../../../models/url-model'], function(UrlModel) {
    describe('Give a URL', function () {

        it('should have a URL for Google Shortener API', function () {

            var model = new UrlModel();
            expect(model.url).to.eql("https://www.googleapis.com/urlshortener/v1/url");
        });

        it('should require a long URL to be valid', function () {

            var model = new UrlModel();
            expect(model.isValid()).to.eql(false);
            model.set('longUrl', 'http://www.google.co.uk');
            expect(model.isValid()).to.eql(true);
        });
    });
});
