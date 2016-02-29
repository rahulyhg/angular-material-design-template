/*global describe, beforeEach, module, inject, afterEach, it, expect, angular */
/*jshint -W030 */
(function () {
    'use strict';
    describe('wmFormWizard', function () {
        var compile, scope, state, element, elementScope, formTabs, dynamicState;

        formTabs = [
            {
                State: 'general',
                Title: 'General',
                TemplatePath: '/pages/user-views/quote/form-general.tpl.html',
                ShowError: false,
                ShowComplete: false,
                PreviouslyVisited: false
            },
            {
                State: 'product',
                Title: 'Product',
                TemplatePath: '/pages/user-views/quote/form-product.tpl.html',
                ShowError: false,
                ShowComplete: false,
                PreviouslyVisited: false
            },
            {
                State: 'pack',
                Title: 'Pack',
                TemplatePath: '/pages/user-views/quote/form-pack.tpl.html',
                ShowError: false,
                ShowComplete: false,
                PreviouslyVisited: false
            },
            {
                State: 'classification',
                Title: 'Classification',
                TemplatePath: '/pages/user-views/quote/form-classification.tpl.html',
                ShowError: false,
                ShowComplete: false,
                PreviouslyVisited: false
            },
            {
                State: 'shipment',
                Title: 'Shipment',
                TemplatePath: '/pages/user-views/quote/form-shipment.tpl.html',
                ShowError: false,
                ShowComplete: false,
                PreviouslyVisited: false
            },
            {
                State: 'costing',
                Title: 'Costing',
                TemplatePath: '/pages/user-views/quote/form-costing.tpl.html',
                ShowError: false,
                ShowComplete: false,
                PreviouslyVisited: false
            }
        ];

        beforeEach(function () {
            module('ui.router');
            module('dynamicState.provider');
            module('formWizard');
            module('AngularMaterialDesignTemplatePartials');
            module('ngMaterial');
            module('removewhitespace.filter');
            module('lowercase.filter');
            module('asdaTheme');
            module('walmartTheme');
            module('themeConstants');
            inject(function ($compile, $rootScope, $state, $dynamicState) {
                compile = $compile;
                scope = $rootScope.$new();
                state = $state;
                dynamicState = $dynamicState;
            });

            setElement();

            function setElement() {
                var count;
                count = 0;
                scope.wizardTitle = "Test";
                scope.formTabs = formTabs;
                angular.forEach(scope.formTabs, (formTab) => {
                    dynamicState.addState(formTab.State, formTab.Title, count, formTab.TemplatePath, null);
                    count += 1;
                });
                console.log(state);
                element = compile(angular.element('<wm-form-wizard wizard-title="wizardTitle" form-tabs="formTabs"></wm-form-wizard>'))(scope);
                element.scope().$digest();
                elementScope = element.isolateScope();
            }
        });
        afterEach(function () {
            if (scope) {
                scope.$destroy();
            }
        });
        it('Test that expected variables are initialized', function () {
            expect(elementScope.vm.wizardTitle).to.be.equal('Test');
            expect(elementScope.vm.formTabs).to.be.eql(formTabs);
            expect(elementScope.vm.Previous).to.be.defined;
            expect(elementScope.vm.Next).to.be.defined;
        });
        it('Test that Previous behaves as expected', function () {

        });
    });
}());
