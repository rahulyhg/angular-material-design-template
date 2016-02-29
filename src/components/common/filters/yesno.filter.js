/*global angular */
(function () {
    'use strict';
    angular.module('filters.package')
        .filter('yesno', function () {
        return function (value) {
            return (value) ? 'Yes' : 'No';
        };
    });
}());
