/*global angular */
(function () {
    'use strict';
    angular.module('viewEdit')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
                 ($stateProvider, $urlRouterProvider, $locationProvider) => {
            $stateProvider
                .state('container.viewedit', {
                        url: 'ViewEdit',
                        views: {
                            'content': {
                                templateUrl: '/pages/user-views/view-edit/view-edit.tpl.html'
                            }
                        }
                    });
                     
         }]);
}());