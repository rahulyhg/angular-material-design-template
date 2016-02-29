/*global angular */
(function () {
    'use strict';
    angular.module('asdaTheme')
        .factory('ASDAColorWays', ASDAColorWays);

    ASDAColorWays.$inject = ['asdaAccent', 'asdaBackground', 'asdaPrimary', 'asdaWarn'];

    function ASDAColorWays (asdaAccent, asdaBackground, asdaPrimary, asdaWarn) {
        return {
            ASDA: {
                Accent: asdaAccent,
                Background: asdaBackground,
                Primary: asdaPrimary,
                Warn: asdaWarn
            }
        };
    }
}());
