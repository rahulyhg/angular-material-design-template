/*global angular */
/*jshint esnext: true */
(function () {
    'use strict';
    angular.module('formWizard')
        .directive('wmFormWizard', wmFormWizard);

    wmFormWizard.$inject = ['$templateRequest', '$compile'];

    function wmFormWizard ($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {
                wizardTitle: '=',
                formTabs: '='
            },
            controller: FormWizardController,
            controllerAs: 'vm',
            bindToController: true,
            link: linkFunc
        };

        function linkFunc(scope, element) {
            var templatePath;
            templatePath ='common/form-wizard/partials/form-wizard.tpl.html';
            $templateRequest(templatePath).then((html) => {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    FormWizardController.$inject = ['$state'];
    function FormWizardController ($state) {
        var self;
        self = this;

        self.Previous = function () {
            if ($state.current.index === 0) {
                $state.go('container.form.' + self.formTabs[self.formTabs.length -1].State);
            } else {
                $state.go('container.form.' + self.formTabs[parseInt($state.current.index, 10) - 1].State);
            }
        };

        self.Next = function () {
            if ($state.current.index === self.formTabs.length - 1) {
                $state.go('container.form.' + self.formTabs[0].State);
            } else {
                $state.go('container.form.' + self.formTabs[parseInt($state.current.index, 10) + 1].State);
            }
        };
    }
}());
