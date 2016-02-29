/*global describe, beforeEach, module, inject, describe, it, expect */
(function () {
    'use strict';
    describe('Test the lowercase filter', function () {
        var filter;
        beforeEach(function () {
            module('filters.package');
            inject(function ($injector) {
                filter = $injector.get('$filter');
            });
        });
        describe('Remove whitespace from the string', function () {
            it('Test that undefined does not throw an error', function () {
                var trueResult, falseResult;
                trueResult = filter('yesno')(true);
                expect(trueResult).to.equal('Yes');
                falseResult = filter('yesno')(false);
                expect(falseResult).to.equal('No');
            });
        });
    });
}());
