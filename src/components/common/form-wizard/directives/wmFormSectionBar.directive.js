/*global angular */
(function () {
    'use strict';
    angular.module('formWizard')
        .directive('wmFormSectionBar', wmFormSectionBar);
    wmFormSectionBar.$inject = ['ColorWays', 'mdThemeProvider', 'walmartBackground', 'asdaBackground'];

    function wmFormSectionBar(ColorWays, mdThemeProvider, walmartBackground, asdaBackground) {
        return {
            restrict: 'AE',
            link: linkFunc
        };

        function linkFunc(scope, element) {
            var colorWays, color;


            function setCustomColors() {
                colorWays = ColorWays[mdThemeProvider.activeTheme];
                color = colorWays[mdThemeProvider.activeTheme].Primary[700];
                element.css('background-color', color);
                element.css('color', '#000000');
            }

            setCustomColors();

            scope.$on('$activeThemeChanged', () => {
                setCustomColors();
            });
        }
    }
}());
