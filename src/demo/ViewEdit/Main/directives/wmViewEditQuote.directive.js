/*global angular */
(function () {
    'use strict';
    angular.module('viewEdit')
        .directive('wmViewEditQuote', wmViewEditQuote);

    wmViewEditQuote.$inject = ['$templateRequest', '$compile'];

    function wmViewEditQuote($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {},
            controller: ViewEditQuoteController,
            controllerAs: 'viewEdit',
            bindToController: true,
            link: linkFunc
        };

        function linkFunc(scope, element) {
            $templateRequest('src/demo/ViewEdit/Main/partials/view-edit.tpl.html').then((html) => {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    ViewEditQuoteController.$inject = [];

    function ViewEditQuoteController() {
        var self;

        self = this;
    }
}());