/*global angular */
(function () {
    'use strict';
    angular.module('walmartTheme')
        .factory('WalmartColorWays', WalmartColorWays);

    WalmartColorWays.$inject = ['walmartAccent', 'walmartBackground', 'walmartPrimary', 'walmartWarn'];

    function WalmartColorWays (walmartAccent, walmartBackground, walmartPrimary, walmartWarn) {
        return {
            Walmart: {
                Accent: walmartAccent,
                Background: walmartBackground,
                Primary: walmartPrimary,
                Warn: walmartWarn
            }
        };
    }
}());
