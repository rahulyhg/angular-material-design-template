/*global describe, beforeEach, module, inject, expect, it */
(function () {
    'use strict';
    describe('menuLink', function () {
        var compile, scope, element, mdThemeProvider, walmartColorWays, configsToTest, numberOfRuns;

        configsToTest = ['ASDA', 'Walmart'];
        numberOfRuns = 0;

        beforeEach(function () {
            module('commonDirectives');
            module('AngularMaterialDesignTemplatePartials');
            module('ngMaterial');
            module('asdaTheme');
            module('walmartTheme');
            module('themeConstants');
            inject(function ($compile, $rootScope, _mdThemeProvider_, _WalmartColorWays_) {
                compile = $compile;
                scope = $rootScope.$new();
                mdThemeProvider = _mdThemeProvider_;
                walmartColorWays = _WalmartColorWays_;
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
                element = compile('<div wm-apply-custom-button-theme color-code="500" background-color-code="700" color-type="Primary"></div>')(scope);
                scope.$digest();
                numberOfRuns += 1;
            }
        });

        it('Test that ASDA primary color is set as background', function () {
            expect(element.css('background-color')).to.be.equal('');
        });
        it('Test that Walmart primary color is set as background', function () {
            expect(element.css('background-color')).to.be.equal('');
        });
        it('Test that the text color is set to white', function () {
            expect(element.css('color')).to.be.equal('');
        });
    });
}());
