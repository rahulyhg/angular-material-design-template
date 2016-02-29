/*global describe, beforeEach, module, inject, it, expect */
(function () {
    'use strict';
    describe('HideShowErrorSuccessFactory', function () {
        var scope, hideShowErrorSuccess, steps, dirtyTest, touchedTest;

        steps = [
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
            inject(function (_$rootScope_, _HideShowErrorSuccess_) {
                scope = _$rootScope_;
                hideShowErrorSuccess = _HideShowErrorSuccess_;
            });
        });
        it('Test that GetCurrentSteps behaves as expected', function () {
            console.log(hideShowErrorSuccess.GetCurrentStep);
            expect(hideShowErrorSuccess.GetCurrentStep({
                steps: steps
            }, 'general')).to.be.eql(steps[0]);
        });
        it('Test that SetTabError behaves as expected', function () {
            hideShowErrorSuccess.SetTabError(steps[0], {
                $invalid: true,
                $dirty: true,
                $valid: false
            });
            expect(steps[0].ShowError).to.be.true;
            expect(steps[0].ShowComplete).to.be.false;
            steps[0].PreviouslyVisited = true;
            hideShowErrorSuccess.SetTabError(steps[0], {
                $invalid: true,
                $dirty: false,
                $valid: false,
                field1: {
                    $error: [
                        {
                            id: 1
                        }
                    ],
                    $setDirty: function () {
                        dirtyTest = true;
                    },
                    $setTouched: function () {
                        touchedTest = true;
                    }
                }
            });
            expect(steps[0].ShowError).to.be.true;
            expect(steps[0].ShowComplete).to.be.false;
            steps[0].PreviouslyVisited = false;
            hideShowErrorSuccess.SetTabError(steps[0], {
                $invalid: false,
                $dirty: true,
                $valid: true
            });
            expect(steps[0].ShowError).to.be.false;
            expect(steps[0].ShowComplete).to.be.true;
            hideShowErrorSuccess.SetTabError(steps[0], {
                $invalid: false,
                $dirty: false,
                $valid: true
            });
            expect(steps[0].ShowError).to.be.false;
            expect(steps[0].ShowComplete).to.be.false;
        });
    });
}());
