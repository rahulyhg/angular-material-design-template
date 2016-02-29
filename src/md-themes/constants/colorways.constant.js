/*global angular */
(function () {
    'use strict';
    angular.module('themeConstants')
        .factory('ColorWays', ColorWays);

    ColorWays.$inject = ['ASDAColorWays', 'WalmartColorWays'];

    function ColorWays (ASDAColorWays, WalmartColorWays) {
        return {
            ASDA: ASDAColorWays,
            Walmart: WalmartColorWays
        };
    }
}());
