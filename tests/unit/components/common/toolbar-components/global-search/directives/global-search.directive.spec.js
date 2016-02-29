/*global  describe, beforeEach, module, inject, afterEach, it, expect, angular*/
/*jshint -W030 */
(function () {
    'use strict';
    describe('wmGlobalSearch', function () {
        var compile, scope, state, TraverseMenuItems, element, isolateScope;

        beforeEach(function () {
            module('globalSearch');
            module('AngularMaterialDesignTemplatePartials');
            module('wmMdThemes');
            module('common.factories');
            module('ui.router');
            module(function ($stateProvider) {
                $stateProvider.state('test', { url: '/' });
            });
            inject(function (_$compile_, _$rootScope_, _$q_, _$state_) {
                compile = _$compile_;
                scope = _$rootScope_.$new();
                state = _$state_;
                TraverseMenuItems = {
                    searchByName: function (query) {
                        var deferred;
                        deferred = _$q_.defer();
                        deferred.resolve('Data Found');
                        return deferred.promise;
                    }
                };
            });

            setElement();

            function setElement () {
                element = compile('<wm-global-search></wm-global-search>')(scope);
                element.scope().$digest();
                isolateScope = element.isolateScope();
            }
        });
        afterEach(function () {
            if (scope) {
                scope.$destroy();
            }
        });
        it('Test that the functions exposed variables and functions are defined', function () {
            expect(isolateScope.globalSearch.menuSearchActive).to.be.defined;
            expect(isolateScope.globalSearch.accessiblePages).to.be.defined;
            expect(isolateScope.globalSearch.querySearch).to.be.defined;
            expect(isolateScope.globalSearch.selectedItemChange).to.be.defined;
        });

        it('Test that querySearch accepts an input and resolves a promise', function () {
            var testValue, menuItems, returnedMenuItems;
            menuItems = [
                {
                    id: 1,
                    name: 'Test 1',
                    type: 'link'
                },
                {
                    id: 2,
                    name: 'Test 2',
                    type: 'link'
                }
            ];
            returnedMenuItems = [
                {
                    id: 2,
                    name: 'Test 2',
                    type: 'link'
                }
            ];
            isolateScope.globalSearch.accessiblePages = menuItems;
            scope.$apply();
            isolateScope.globalSearch.querySearch('2').then(function (returnedValue) {
                testValue = returnedValue;
            });
            scope.$apply();
            expect(testValue).to.be.deep.equal(returnedMenuItems);
        });
        it('Test that there is no error when selectedItemChange is passed an undefined and null item', function () {
           isolateScope.globalSearch.selectedItemChange();
           isolateScope.globalSearch.selectedItemChange(null);
        });
        it('Test that there is no error when selectedItemChange is passed an undefined and null item.state', function () {

            isolateScope.globalSearch.selectedItemChange( {} );
            isolateScope.globalSearch.selectedItemChange( { state: null });
        });
        it('Test that there is no error when selectedItemChange is passed an undefined and null item.state', function () {
            isolateScope.globalSearch.selectedItemChange( { state: 'test' });
            scope.$apply();
            expect(state.current.name).to.be.equal('test');
        });
        it('Test the directive applies the correct CSS on click', function () {
            var testElement;
            testElement = angular.element(element[0].children[0]);
            testElement.triggerHandler('click');
            expect(testElement.css('color')).to.be.equal('rgb(255, 255, 255)');
            testElement.addClass('show-icon');
            testElement.triggerHandler('click');
            expect(testElement.css('color')).to.be.equal('rgb(244, 115, 33)');
        });

    });
}());
