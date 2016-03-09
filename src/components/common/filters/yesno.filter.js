/*global angular */
(function () {
    'use strict';
    angular.module('filters.package')
        .filter('yesno', () => {
        return function (value) {
            return (value) ? 'Yes' : 'No';
        };
    });
}());
