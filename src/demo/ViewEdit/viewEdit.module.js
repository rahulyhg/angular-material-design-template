/*global angular */
(function () {
    'use strict';
    angular.module('viewEdit', [])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
                 function ($stateProvider, $urlRouterProvider, $locationProvider) {
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