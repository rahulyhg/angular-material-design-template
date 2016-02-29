/*global angular */
(function (){
    'use strict';
    angular.module('draftBids')
        .directive('wmDraftBids', wmDraftBids);

    wmDraftBids.$inject = ['$templateRequest', '$compile'];

    function wmDraftBids ($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {
                draftBidIsOpen: '='
            },
            controller: WMDraftBidsController,
            controllerAs: 'wmDraftBid',
            link: linkFunc
        };

        function linkFunc (scope, element) {
            $templateRequest('src/demo/draft-bids/partials/draft-bid.tpl.html').then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    WMDraftBidsController.$inject = ['$scope'];

    function WMDraftBidsController ($scope) {
        var self;

        self = this;
        self.draftBidIsOpen = $scope.draftBidIsOpen;
    }
}());
