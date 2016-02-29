/*global angular */
(function () {
    'use strict';
    angular.module('QuoteSummary')
        .directive('wmQuoteSummary', wmQuoteSummary);

    wmQuoteSummary.$inject = ['$templateRequest', '$compile'];

    function wmQuoteSummary ($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {},
            controller: QuoteSummaryController,
            controllerAs: 'quoteSummary',
            link: linkFunc
        };

        function linkFunc (scope, element) {
            $templateRequest('src/demo/QuoteSummary/partials/quote-summary.tpl.html').then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    QuoteSummaryController.$inject = [];

    function QuoteSummaryController () {
        var self, i;

        self = this;

        self.data = [];

        for (i = 0; i < 25; i += 1) {
            self.data.push({
                id: i,
                dataRow1: 'Data Row 1 ' + i,
                dataRow2: 'Data Row 2 ' + i,
                dataRow3: 'Data Row 3 ' + i,
                dataRow4: 'Data Row 4 ' + i,
            });
        }
    }
}());
