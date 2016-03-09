/*global angular */
(function () {
    'use strict';
    angular.module('wmUndo')
        .directive('wmSetUndoToastButtonTextColor', wmSetUndoToastButtonTextColor);

    wmSetUndoToastButtonTextColor.$inject = ['ColorWays', 'mdThemeProvider'];

    function wmSetUndoToastButtonTextColor(ColorWays, mdThemeProvider) {

        return {
            restrict: 'AE',
            link: linkFunc
        };

        function linkFunc(scope, element) {
            var colorWays, color;

            colorWays = ColorWays[mdThemeProvider.activeTheme];
            color = colorWays[mdThemeProvider.activeTheme].Primary[300];
            
            element.css('color', color);
        }
    }

}());