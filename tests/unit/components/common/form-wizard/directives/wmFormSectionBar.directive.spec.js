/*global describe, beforeEach, module, inject, expect, it */
(function () {
    'use strict';
    describe('wmFormSectionBar', function () {
        var compile, scope, element, mdThemeProvider, configsToTest, numberOfRuns;

        configsToTest = ['ASDA', 'Walmart'];
        numberOfRuns = 0;

        beforeEach(function () {
            module('ui.router');
            module('dynamicState.provider');
            module('formWizard');
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
                mdThemeProvider.globalProvider._THEMES[configsToTest[numberOfRuns]].colors.primary.hues.default = 'A700';
                mdThemeProvider.activeTheme = configsToTest[numberOfRuns];
                element = compile('<div wm-form-section-bar></div>')(scope);
                scope.$digest();
                numberOfRuns += 1;
            }
        });

        it('Test that ASDA primary color is set as background', function () {
            expect(element.css('background-color')).to.be.equal('rgb(92, 146, 25)');
        });
        it('Test that Walmart primary color is set as background', function () {
            expect(element.css('background-color')).to.be.equal('rgb(0, 93, 147)');
        });
//        it('Test that the text color is set to white', function () {
//            expect(element.css('color')).to.be.equal('rgb(0, 0, 0)');
//        });
    });
}());
