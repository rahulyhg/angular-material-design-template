/*global angular */
(function () {
    'use strict';
    angular.module('angularMaterialDesignTemplate', ['ui.router', 'ngMaterial', 'ngAria', 'ngAnimate', 'ngMessages', 'ngMdIcons', 'AngularMaterialDesignTemplatePartials', 'SideMenu', 'components', 'CreateQuote', 'QuoteSummary'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
                 function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
                    })
                    .state('container.singleimperialstouts', {
                        url: 'singleImperialStouts',
                        views: {
                            'content': {
                                templateUrl: '/pages/user-views/single-imperial-stouts.tpl.html'
                            }
                        }
                    })
                    .state('container.cheetos', {
                        url: 'cheetos',
                        views: {
                            'content': {
                                templateUrl: '/pages/user-views/cheetos.tpl.html'
                            }
                        }
                    })
                    .state('container.form', {
                        url: 'CreateQuote',
                        abstract: true,
                        views: {
                            'content': {
                                templateUrl: '/pages/user-views/quote/form.tpl.html'
                            }
                        }
                    })
                    .state('container.quotesummary', {
                        url: 'QuoteSummary',
                        views: {
                            'content': {
                                templateUrl: '/pages/user-views/quote-summary/quote-summary.tpl.html'
                            }
                        }
                    })

    }]);
}());
