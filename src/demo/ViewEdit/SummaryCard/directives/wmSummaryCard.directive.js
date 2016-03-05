/*global angular */
(function () {
    'use strict';
    angular.module('viewEdit')
        .directive('wmSummaryCard', wmSummaryCard);
    
    wmSummaryCard.$inject = ['$templateRequest', '$compile'];
    
    function wmSummaryCard ($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {},
            controller: SummaryCardController,
            controllerAs: 'summaryCard',
            bindToController: true,
            link: linkFunc
        };
        
        function linkFunc(scope, element) {
            $templateRequest('src/demo/ViewEdit/SummaryCard/partials/quote-summary-card.tpl.html').then((html) => {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }
    
    SummaryCardController.$inject = ['$scope'];
    
    function SummaryCardController ($scope) {
        var self;
        
        self = this;
        
        $scope.imagePath = "https://farm1.staticflickr.com/755/21737716166_0c0caa2f73_b.jpg";
    }
}());