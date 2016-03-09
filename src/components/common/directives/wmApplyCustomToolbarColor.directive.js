/*global angular */
(function () {
    'use strict';
    angular.module('sidemenu')
        .directive('wmApplyCustomToolbarColor', wmApplyCustomToolbarColor);

    wmApplyCustomToolbarColor.$inject = ['ColorWays', 'mdThemeProvider'];

    function wmApplyCustomToolbarColor(ColorWays, mdThemeProvider) {

        return {
            restrict: 'A',
            link: linkFunc
        };

        function linkFunc(scope, element) {
            var colorWays, backgroundColor, color;

            function setCustomColors() {
                colorWays = ColorWays[mdThemeProvider.activeTheme];
                if (mdThemeProvider.activeTheme === 'Walmart') {
                    backgroundColor = colorWays[mdThemeProvider.activeTheme].Primary[500];
                    color = '#ffffff';
                } else if (mdThemeProvider.activeTheme === 'ASDA') {
                    backgroundColor = '#000000';
                    color = colorWays[mdThemeProvider.activeTheme].Primary[500];
                }

                element.css('background-color', backgroundColor);
                element.css('color', color);
            }

            setCustomColors();

            scope.$on('$activeThemeChanged', () => {
                setCustomColors();
            });
        }
    }
}());