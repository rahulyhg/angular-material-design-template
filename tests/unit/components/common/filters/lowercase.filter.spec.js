(function () {
    'use strict';
    describe('Test the lowercase filter', function () {
        var filter;
        beforeEach(function () {
            module('lowercase.filter');
            inject(function ($injector) {
                filter = $injector.get('$filter')
            });
        });
        describe('Make a string lowercase', function () {
            it('Test undefined', function () {
                var result;
                result = filter('humanizeDoc')();
                expect(result).to.be.falsy;
            });
            it('Test null', function () {
                var result;
                result = filter('humanizeDoc')(null);
                expect(result).to.be.falsy;
            });
            it('Test .name', function () {
                var test, result;
                test = {
                    name: 'Hello World'
                };
                result = filter('humanizeDoc')(test);
                expect(result).to.equal(test.name);
            });
            it('Test .label', function () {
                var test, result;
                test = {
                    label: 'Hello World'
                };
                result = filter('humanizeDoc')(test);
                expect(result).to.equal(test.label);
            });
            it('Test label returns instead of name', function () {
                var test, result;
                test = {
                    name: 'Should not return',
                    label: 'Hello World'
                };
                result = filter('humanizeDoc')(test);
                expect(result).to.equal(test.label);
            });
            it('Test that empty name does not throw an error', function () {
                var test, result;
                test = {
                    name: '',
                    type: 'directive'
                };
                result = filter('humanizeDoc')(test);
                expect(result).to.equal('');
            });
            it('Test that type directive works as expected', function () {
                var test, result;
                test = {
                    name: 'someDirectiveTest',
                    type: 'directive'
                };
                result = filter('humanizeDoc')(test);
                expect(result).to.equal('some-directive-test');
            });
        });
    });
}());
