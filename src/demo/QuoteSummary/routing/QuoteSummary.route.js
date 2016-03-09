/*global angular */
(function () {
    'use strict';
    angular.module('QuoteSummary')
        .config(['$stateProvider', ($stateProvider) => {
            $stateProvider
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