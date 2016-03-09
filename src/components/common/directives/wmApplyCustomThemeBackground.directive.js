/*global angular */
(function () {
    angular.module('commonDirectives')
        .directive('wmApplyCustomThemeBackground', wmApplyCustomThemeBackground);
    wmApplyCustomThemeBackground.$inject = ['walmartBackground', 'asdaBackground', 'mdThemeProvider'];

    function wmApplyCustomThemeBackground(walmartBackground, asdaBackground, mdThemeProvider) {
        return {
            restrict: 'A',
            link: linkFunc
        };

        function linkFunc(scope, element, attr) {
            var color;

            function setCustomColors() {
                console.log('Here');
                if (mdThemeProvider.activeTheme === 'Walmart') {
                    color = walmartBackground['700'];
                } else if (mdThemeProvider.activeTheme === 'ASDA') {
                    color = asdaBackground['700'];
                }
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
