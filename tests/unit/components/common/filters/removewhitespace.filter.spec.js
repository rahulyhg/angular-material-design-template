(function () {
    'use strict';
    describe('Test the lowercase filter', function () {
        var filter;
        beforeEach(function () {
            module('removewhitespace.filter');
            inject(function ($injector) {
                filter = $injector.get('$filter')
            });
        });
        describe('Remove whitespace from the string', function () {
            it('Test that undefined does not throw an error', function () {
                var result;
                result = filter('nospace')();
                expect(result).to.equal('');
            });
            it('Test that null does not throw an error', function () {
                var result;
                result = filter('nospace')(null);
                expect(result).to.equal('');
            });
            it('Test that spaces are removed', function () {
                var result;
                result = filter('nospace')('S o m e S tr ing w/ spaces and 12 3 s');
                expect(result).to.equal('SomeStringw/spacesand123s');
            });
        });
    });
}());
