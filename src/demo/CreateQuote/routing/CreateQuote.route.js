/*global angular */
(function () {
    'use strict';
    angular.module('CreateQuote')
        .config(['$stateProvider', ($stateProvider) => {
                $stateProvider
                    .state('container.form', {
                        url: 'CreateQuote',
                        abstract: true,
                        views: {
                            'content': {
                                templateUrl: '/pages/user-views/quote/form.tpl.html'
                            }
                        }
                    });

         }]);
}());