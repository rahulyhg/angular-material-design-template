/*global angular */
(function () {
    angular.module('commonDirectives')
        .directive('wmApplyCustomButtonTheme', wmApplyCustomButtonTheme);
    wmApplyCustomButtonTheme.$inject = ['ColorWays', 'mdThemeProvider'];
    function wmApplyCustomButtonTheme (ColorWays, mdThemeProvider) {
        return {
            restrict: 'A',
            link: linkFunc
        };

        function linkFunc (scope, element, attr) {
            var colorWays, color;
            colorWays = ColorWays[mdThemeProvider.activeTheme];
            color = colorWays[mdThemeProvider.activeTheme][attr.colorType][attr.colorCode];
            element.css('background-color', colorWays[mdThemeProvider.activeTheme].Background[attr.backgroundColorCode]);
            element.css('font-size', '24px');
            element.css('color', color);
        }
    }
}());
