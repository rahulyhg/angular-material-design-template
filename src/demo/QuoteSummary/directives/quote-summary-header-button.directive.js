/*global angular */
(function () {
    'use strict';
    angular.module('QuoteSummary')
        .directive('uiGridHeaderCellRow', uiGridHeaderCell);

    uiGridHeaderCell.$inject = ['$templateRequest', '$compile'];

    function uiGridHeaderCell ($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {},
            controller: QuoteSummaryHeaderButtonController,
            controllerAs: 'quoteSummaryHeaderButton',
            link: linkFunc
        };

        function linkFunc (scope, element) {
            $templateRequest('src/demo/QuoteSummary/partials/quote-summary-header-button.tpl.html').then(function (html) {
                var template, spanToRemove;
                template = angular.element(html);
                spanToRemove = element.find('span');
                spanToRemove.html('');
                element.append(template);
                $compile(template)(scope);
            });
            console.log(element);
        }
    }

    QuoteSummaryHeaderButtonController.$inject = [];

    function QuoteSummaryHeaderButtonController () {
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
