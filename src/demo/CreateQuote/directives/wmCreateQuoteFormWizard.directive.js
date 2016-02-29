/*global angular */
(function (){
    'use strict';
    angular.module('CreateQuote')
        .directive('wmCreateFormWizard', wmCreateFormWizard);

    wmCreateFormWizard.$inject = ['$templateRequest', '$compile'];

    function wmCreateFormWizard ($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {

            },
            controller: wmCreateFormWizardController,
            controllerAs: 'demo',
            link: linkFunc
        };

        function linkFunc (scope, element) {
            $templateRequest('src/demo/CreateQuote/partials/create-quote-form-wizard.tpl.html').then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    wmCreateFormWizardController.$inject = ['$scope', 'CreateQuoteFormSteps'];

    function wmCreateFormWizardController ($scope, CreateQuoteFormSteps) {
        var self;

        self = this;

        self.wizardTitle = CreateQuoteFormSteps.title;
        self.steps = CreateQuoteFormSteps.steps;
        self.draftBidIsOpen = false;
    }
}());
