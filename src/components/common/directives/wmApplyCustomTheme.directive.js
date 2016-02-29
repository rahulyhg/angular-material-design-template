/*global angular */
(function () {
    angular.module('commonDirectives', ['ngMaterial', 'walmartTheme', 'asdaTheme'])
        .directive('wmApplyCustomTheme', wmApplyCustomTheme);
    wmApplyCustomTheme.$inject = ['walmartPrimary', 'asdaPrimary', 'mdThemeProvider'];
    function wmApplyCustomTheme (walmartPrimary, asdaPrimary, mdThemeProvider) {
        return {
            restrict: 'A',
            link: linkFunc
        };

        function linkFunc (scope, element) {
            var color;
            if (mdThemeProvider.activeTheme === 'Walmart') {
                color = walmartPrimary[mdThemeProvider.globalProvider._THEMES[mdThemeProvider.activeTheme].colors.primary.hues.default];
            } else if (mdThemeProvider.activeTheme === 'ASDA') {
                color = asdaPrimary[mdThemeProvider.globalProvider._THEMES[mdThemeProvider.activeTheme].colors.primary.hues.default];
            }
            element.css('background-color', color);
            element.css('color', '#ffffff');
        }
    }
}());
