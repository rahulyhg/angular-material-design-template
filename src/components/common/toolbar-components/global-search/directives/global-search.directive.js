/*global angular */
(function () {
    'use strict';
    angular.module('globalSearch')
        .directive('wmGlobalSearch', wmGlobalSearch);
    wmGlobalSearch.$inject = ['$compile', '$templateRequest', 'mdThemeProvider', 'walmartAccent'];
    function wmGlobalSearch ($compile, $templateRequest, mdThemeProvider, walmartAccent) {
        var directive;

        directive =  {
            restrict: 'AE',
            scope:{
                menuItems: '='
            },
            replace: true,
            controller: GlobalSearchController,
            controllerAs: 'globalSearch',
            bindToController: false,
            link: linkFunc
        };

        return directive;

        function linkFunc (scope, element) {
            $templateRequest('common/toolbar-components/global-search/partials/global-search.tpl.html').then(function (html) {
                var template, searchToggleButton;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
                searchToggleButton = angular.element(element[0].children[0]);
                searchToggleButton.bind('click', function () {
                    if (searchToggleButton.hasClass('show-icon')) {
                        searchToggleButton.css('color', walmartAccent['500']);
                        element.find('input').focus();
                        element.find('md-autocomplete-wrap').addClass('md-menu-showing');
                    } else {
                        searchToggleButton.css('color', 'rgb(255, 255, 255)');
                    }
                });
            });
        }
    }
    GlobalSearchController.$inject = ['$scope','TraverseMenuItems', '$q', '$state'];
    function GlobalSearchController ($scope, TraverseMenuItems, $q, $state) {
        var self;
        self = this;
        self.menuSearchActive = false;
        self.accessiblePages = $scope.menuItems;
        self.querySearch   = querySearch;
        self.selectedItemChange = selectedItemChange;

        function querySearch (query) {
            var deferred;
            deferred = $q.defer();
            TraverseMenuItems.searchByName(query, self.accessiblePages).then(function (foundItems) {
                    deferred.resolve(foundItems);
            });
            return deferred.promise;
        }

        function selectedItemChange(item) {
            if (item && item.state) {
                $state.go(item.state);
            }
        }
    }
}());
