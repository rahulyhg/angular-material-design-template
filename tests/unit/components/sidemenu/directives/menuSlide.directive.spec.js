/*global describe, beforeEach, inject, module, inject, afterEach, it, expect, angular */
/*jshint esnext: true */
/*jshint -W030 */
(function () {
    'use strict';
    describe('menuSlide', function () {
        var compile, scope, template, menuItems, element, isolateScope;
        template = '<md-button ng-show="menuIsHover || menuIsSlidOpen" class="menu-btn ng-scope ng-hide"><span flex=""></span> <span class="fa fa-arrow-right" ng-class="{\'fa-arrow-left\': menuIsSlidOpen, \'fa-arrow-right\': !menuIsSlidOpen}" layout="row" flex="" layout-align="end"></span> <span class="fa fa-ellipsis-v" layout="row" layout-align="end" flex="" style=""></span></md-button>';
        menuItems = [
            {
                isOpen: true
            },
            {
                isOpen: true
            },
            {
                isOpen: true
            }
        ];

        function fireHtmlEvent (eventName) {
            element.triggerHandler(eventName);
            isolateScope.$apply();
        }
        beforeEach(function () {
            module('sidemenu');
            module('AngularMaterialDesignTemplatePartials');
            inject(function ($compile, $rootScope) {
                compile = $compile;
                scope = $rootScope.$new();
            });

            setElement();

            function setElement () {
                element = compile('<menu-slide></menu-slide>')(scope);
                element.scope().$digest();
                isolateScope = element.isolateScope();
                isolateScope.menuItems = menuItems;
                isolateScope.menuIsSlidOpen = true;
                isolateScope.menuIsHover = false;
            }
        });
        afterEach(function () {
            if (scope) {
                scope.$destroy();
            }
        });
        it('Test that the correct menuLink element is added to the HTML', function () {
            expect(element.html()).to.have.string(template);
        });
        it('Test that when the menu is collapsed all first level sections get closed', function () {
            fireHtmlEvent('click');
            angular.forEach(isolateScope.menuItems, (menuItem) => {
                expect(menuItem.isOpen).to.be.false;
            });
        });
        it('Test that menuIsSlidOpen toggles', function () {
            fireHtmlEvent('click');
            expect(isolateScope.menuIsSlidOpen).to.be.false;
            fireHtmlEvent('click');
            expect(isolateScope.menuIsSlidOpen).to.be.true;
        });
        it('Test that menuIsSlidOpen toggles', function () {
            fireHtmlEvent('click');
            expect(isolateScope.menuIsHover).to.be.true;
            fireHtmlEvent('click');
            expect(isolateScope.menuIsHover).to.be.false;
        });
    });
}());
