/*global angular */
(function () {
    'use strict';
    angular.module('lowercase.filter', [])
        /**
         *replace uppercase to regular case
         */
        .filter('humanizeDoc', () => {
            return function (doc) {
                if (!doc) {
                    return;
                }
                if (doc.type === 'directive') {
                    return doc.name.replace(/([A-Z])/g, ($1) => {
                        return '-' + $1.toLowerCase();
                    });
                }
                return doc.label || doc.name;
            };
        });
}());
