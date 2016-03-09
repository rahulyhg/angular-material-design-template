/*global angular */
(function () {
    'use strict';
    angular.module('wmUndo')
        .directive('wmUndoToastBackgroundColor', wmUndoToastBackgroundColor);

    wmUndoToastBackgroundColor.$inject = ['ColorWays', 'mdThemeProvider'];

    function wmUndoToastBackgroundColor(ColorWays, mdThemeProvider) {

        return {
            restrict: 'AE',
            link: linkFunc
        };

        function linkFunc(scope, element) {
            var colorWays, color;

            colorWays = ColorWays[mdThemeProvider.activeTheme];
            color = colorWays[mdThemeProvider.activeTheme].Warn[500];

            angular.element(element[0].children[0]).css('background-color', color);
        }
    }
}());