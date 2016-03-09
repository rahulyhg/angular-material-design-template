/*global angular */
/*jshint esnext: true */
(function () {
    'use strict';
    angular.module('formWizard')
        .directive('wmFormSectionActiveTab', wmFormSectionActiveTab);
    wmFormSectionActiveTab.$inject = ['$state', '$timeout', 'ColorWays', 'mdThemeProvider'];
    function wmFormSectionActiveTab ($state, $timeout, ColorWays, mdThemeProvider) {
        return {
            restrict: 'AE',
            link: linkFunc
        };

        function linkFunc (scope, element) {
            var colorWays, borderColor, background, color;

            scope.$on('$stateChangeSuccess', () => {
                $timeout(function () {
                    setBorders();
                }, 1);
            });

            scope.$watch('$viewContentLoaded', () => {
                setBorders();
            });

            function setBorders () {
                if (element.hasClass('active')) {
                    colorWays = ColorWays[mdThemeProvider.activeTheme];
                    borderColor = colorWays[mdThemeProvider.activeTheme].Primary[500];
                    background = '#eeeeee';
                    color = '#000000';
                } else if (element.hasClass('has-error')) {
                    colorWays = ColorWays[mdThemeProvider.activeTheme];
                    borderColor = colorWays[mdThemeProvider.activeTheme].Warn[700];
                    background = colorWays[mdThemeProvider.activeTheme].Warn[500];
                    color = '#ffffff';
                } else if (element.hasClass('has-success')) {
                    colorWays = ColorWays[mdThemeProvider.activeTheme];
                    borderColor = colorWays[mdThemeProvider.activeTheme].Primary[700];
                    background = colorWays[mdThemeProvider.activeTheme].Primary[500];
                    color = '#ffffff';
                } else {
                    borderColor = '#cecece';
                    background = '#eeeeee';
                    color = '#000000';
                }
                element.css('border-color', borderColor);
                element.css('background-color', background);
                element.css('color', color);
            }

            scope.$on('$activeThemeChanged', () => {
                colorWays = ColorWays[mdThemeProvider.activeTheme];
                setBorders();
            });
        }
    }
}());
