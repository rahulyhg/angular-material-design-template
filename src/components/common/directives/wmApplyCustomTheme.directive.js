/*global angular */
(function () {
    angular.module('commonDirectives', ['ngMaterial', 'walmartTheme', 'asdaTheme'])
        .directive('wmApplyCustomTheme', wmApplyCustomTheme);
    wmApplyCustomTheme.$inject = ['walmartPrimary', 'asdaPrimary', 'mdThemeProvider', 'ColorWays'];

    function wmApplyCustomTheme(walmartPrimary, asdaPrimary, mdThemeProvider, ColorWays) {
        return {
            restrict: 'A',
            link: linkFunc
        };

        function linkFunc(scope, element, attr) {
            var colorWays, color;

            function setCustomColors() {
                colorWays = ColorWays[mdThemeProvider.activeTheme];
                if (mdThemeProvider.activeTheme === 'Walmart') {
                    color = walmartPrimary[mdThemeProvider.globalProvider._THEMES[mdThemeProvider.activeTheme].colors.primary.hues.default];
                } else if (mdThemeProvider.activeTheme === 'ASDA') {
                    color = colorWays[mdThemeProvider.activeTheme].Background[50];
                }
                element.css('background-color', color);
                element.css('color', '#ffffff');
            }

            setCustomColors();

            scope.$on('$activeThemeChanged', () => {
                setCustomColors();
            });
        }
    }
}());
