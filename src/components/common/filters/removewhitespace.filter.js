/*global angular */
(function () {
    'use strict';
    angular.module('removewhitespace.filter', [])
        /**
         * Remove all whitespace from display
         */
        .filter('nospace', () => {
        return function (value) {
            return (!value) ? '' : value.replace(/ /g, '');
        };
    });
}());
