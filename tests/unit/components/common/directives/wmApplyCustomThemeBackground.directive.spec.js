/*global describe, beforeEach, module, inject, expect, it */
(function () {
    'use strict';
    describe('wmApplyCustomThemeBackground', function () {
        var compile, scope, element, mdThemeProvider, configsToTest, numberOfRuns;

        configsToTest = ['ASDA', 'Walmart'];
        numberOfRuns = 0;

        beforeEach(function () {
            module('commonDirectives');
            module('AngularMaterialDesignTemplatePartials');
            module('ngMaterial');
            module('asdaTheme');
            module('walmartTheme');
            module('themeConstants');
            inject(function ($compile, $rootScope, _mdThemeProvider_) {
                compile = $compile;
                scope = $rootScope.$new();
                mdThemeProvider = _mdThemeProvider_;
            });

            setElement();

            function setElement() {
                mdThemeProvider.globalProvider._THEMES = {};
                mdThemeProvider.globalProvider._THEMES[configsToTest[numberOfRuns]] = {};
                mdThemeProvider.globalProvider._THEMES[configsToTest[numberOfRuns]].colors = {};
                mdThemeProvider.globalProvider._THEMES[configsToTest[numberOfRuns]].colors.primary = {};
                mdThemeProvider.globalProvider._THEMES[configsToTest[numberOfRuns]].colors.primary.hues = {};
                mdThemeProvider.globalProvider._THEMES[configsToTest[numberOfRuns]].colors.primary.hues.default = '500';
                mdThemeProvider.activeTheme = configsToTest[numberOfRuns];
                element = compile('<div wm-apply-custom-theme-background></div>')(scope);
                scope.$digest();
                numberOfRuns += 1;
            }
        });

        it('Test that ASDA primary color is set as background', function () {
            expect(element.css('background-color')).to.be.equal('rgb(230, 230, 230)');
        });
        it('Test that Walmart primary color is set as background', function () {
            expect(element.css('background-color')).to.be.equal('rgb(230, 230, 230)');
        });
        it('Test that the text color is set to white', function () {
            expect(element.css('color')).to.be.equal('rgb(0, 0, 0)');
        });
    });
}());
