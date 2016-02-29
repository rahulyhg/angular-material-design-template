/*global angular */
/*jshint esnext: true */
(function () {
    'use strict';
    angular.module('common.factories')
        .factory('TraverseMenuItems', TraverseMenuItems);

    TraverseMenuItems.$inject = ['$q'];

    function TraverseMenuItems($q) {
        var foundItems;
        foundItems = [];

        function extractNestedToggle(input, menuItem) {
            var deferred;
            deferred = $q.defer();
            angular.forEach(menuItem.pages, (item) => {
                if (item.type === 'toggle') {
                    searchByName(input, item.pages);
                } else {
                    if (input !== null && input !== undefined && item.name.toUpperCase().indexOf(input.toUpperCase()) >= 0) {
                        foundItems.push(item);
                    }
                }
            });
            deferred.resolve();
            return deferred.promise;
        }

        function searchByName(input, menuItems) {
            var deferred;
            deferred = $q.defer();
            angular.forEach(menuItems, (menuItem) => {
                if (menuItem.type === 'toggle') {
                    extractNestedToggle(input, menuItem);
                } else {
                    if (input !== null && input !== undefined && menuItem.name.toUpperCase().indexOf(input.toUpperCase()) >= 0) {
                        foundItems.push(menuItem);
                    }
                }
            });
            deferred.resolve(foundItems);
            return deferred.promise;
        }

        return {
            searchByName: function (input, menuItems) {
                var deferred;
                foundItems = [];
                deferred = $q.defer();
                if (menuItems) {
                    searchByName(input, menuItems, foundItems).then((results) => {
                        deferred.resolve(results);
                    });
                } else {
                    deferred.resolve(false);
                }
                return deferred.promise;
            }
        };
    }
}());
