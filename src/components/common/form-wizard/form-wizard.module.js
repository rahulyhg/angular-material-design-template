/*global angular */
/*jshint esnext: true */
(function () {
    'use strict';
    angular.module('formWizard', ['dynamicState.provider', 'QuoteForm'])
        .config(['$dynamicStateProvider', 'CreateQuoteFormSteps', function ($dynamicStateProvider, CreateQuoteFormSteps) {
            var count;
            count  = 0;
            angular.forEach(CreateQuoteFormSteps.steps, (formStep) => {
                $dynamicStateProvider.$get().addState('container.form.' + formStep.State, formStep.Title, count, formStep.TemplatePath, null);
                count += 1;
            });
        }]);
}());
