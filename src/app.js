/*global angular */
(function () {
    'use strict';
    angular.module('angularMaterialDesignTemplate', ['ui.router', 'ngMaterial', 'ngAria', 'ngAnimate', 'ngMessages', 'ngMdIcons', 'AngularMaterialDesignTemplatePartials', 'SideMenu', 'components', 'CreateQuote', 'QuoteSummary', 'viewEdit'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
                 ($stateProvider, $urlRouterProvider, $locationProvider) => {
                $urlRouterProvider.otherwise('/test');
                $stateProvider
                    .state('container', {
                        url: '/',
                        abstract: true,
                        templateUrl: '/pages/view-wrappers/view-container.tpl.html'
                    })
                    .state('container.home', {
                        url: 'test',
                        views: {
                            'content': {
                                templateUrl: '/pages/user-views/home.tpl.html'
                            }
                        }
                    });

    }]);
}());
