/*global angular */
/*jshint esnext: true */
(function () {
    'use strict';
    angular.module('formWizard')
        .directive('wmFormSectionActiveText', wmFormSectionActiveText);
    wmFormSectionActiveText.$inject = ['$state', '$timeout', 'ColorWays', 'mdThemeProvider'];

    function wmFormSectionActiveText($state, $timeout, ColorWays, mdThemeProvider) {
        return {
            restrict: 'AE',
            link: linkFunc
        };

        function linkFunc(scope, element) {
            var colorWays, color;

            colorWays = ColorWays[mdThemeProvider.activeTheme];

            scope.$on('$stateChangeSuccess', () => {
                $timeout(function () {
                    setBorders();
                }, 1);
            });

            scope.$watch('$viewContentLoaded', () => {
                setBorders();
            });

            function setBorders() {
                if (element.hasClass('active-tab')) {
                    color = colorWays[mdThemeProvider.activeTheme].Primary[500];
                } else if (element.hasClass('text-danger')) {
                    color = colorWays[mdThemeProvider.activeTheme].Warn[500];
                } else {
                    color = colorWays[mdThemeProvider.activeTheme].Primary[500];
                }
                element.css('color', color);
            }

            scope.$on('$activeThemeChanged', () => {
                colorWays = ColorWays[mdThemeProvider.activeTheme];
                setBorders();
            });
        }
    }
}());
