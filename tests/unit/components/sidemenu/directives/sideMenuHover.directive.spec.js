/*global describe, beforeEach, module, inject, afterEach, it, expect, angular */
/*jshint -W030 */
(function () {
    'use strict';
    describe('sideMenuHover', function () {
        var compile, scope, timeout, element, elementScope, SideMenuFactory;


        beforeEach(function () {
            module('sidemenu');
            module('AngularMaterialDesignTemplatePartials');
            module('ngMaterial');
            module('removewhitespace.filter');
            module('lowercase.filter');
            module(
                {
                    SideMenuFactory: {
                        toggleSelectSection: function (section) {
                            section.isOpen = !section.isOpen;
                        },
                        isSectionSelected: function (section) {
                            return section.isOpen;
                        }
                    }
               }
            );
            inject(function ($compile, $rootScope, $timeout) {
                compile = $compile;
                scope = $rootScope.$new();
                timeout = $timeout;
            });

            setElement();

            function setElement() {
                element = compile('<wm-side-menu menu-type="hover"></wm-side-menu>')(scope);
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
            expect(elementScope.vm.autoFocusContent).to.be.defined;
            expect(elementScope.vm.menu).to.be.defined;
            expect(elementScope.vm.menuIsSlidOpen).to.be.defined;
            expect(elementScope.vm.status).to.be.defined;
        });
        it('Test that isOpen returns the expected value', function () {
            expect(elementScope.vm.isOpen()).to.be.falsy;
            expect(elementScope.vm.isOpen(null)).to.be.falsy;
            expect(elementScope.vm.isOpen({})).to.be.falsy;
            expect(elementScope.vm.isOpen({
                isOpen: true
            })).to.be.true;
            expect(elementScope.vm.isOpen({
                isOpen: false
            })).to.be.false;
        });
        it('Test that isSectionSelected returns the expected values', function () {
            expect(elementScope.vm.isSectionSelected()).to.be.falsy;
            expect(elementScope.vm.isSectionSelected(null)).to.be.falsy;
            expect(elementScope.vm.isSectionSelected({})).to.be.falsy;
            expect(elementScope.vm.isSectionSelected({
                isOpen: true
            })).to.be.true;
            expect(elementScope.vm.isSectionSelected({
                isOpen: false
            })).to.be.false;
        });
        it('Test that mouseEnter performs as expected', function () {
            elementScope.vm.menuIsSlidOpen = false;
            elementScope.vm.mouseEnter();
            expect(elementScope.vm.menuIsHover).to.be.true;
            elementScope.vm.menuIsSlidOpen = true;
            elementScope.vm.mouseEnter();
            expect(elementScope.vm.menuIsHover).to.be.true;
        });
        it('Test that mouseLeave performs as expected', function () {
            var i;
            elementScope.vm.menu = {};
            elementScope.vm.menu.sections = [];
            for (i = 0; i < 5; i++) {
                elementScope.vm.menu.sections.push({
                    id: i,
                    isOpen: true
                });
            }
            elementScope.vm.menuIsSlidOpen = false;
            elementScope.vm.mouseLeave();
            expect(elementScope.vm.menuIsHover).to.be.false;
            angular.forEach(elementScope.vm.menu.sections, (menuItem) => {
                expect(menuItem.isOpen).to.be.false;
            });
            elementScope.vm.menuIsSlidOpen = true;
            elementScope.vm.mouseLeave();
            expect(elementScope.vm.menuIsHover).to.be.false;
        });
        it('Test that initializeMenu is called', function () {
            var initialzeMenuOpen;
            initialzeMenuOpen = sinon.spy(scope, '$broadcast')
            scope.$broadcast('$viewContentLoaded');
            timeout.flush();
            initialzeMenuOpen.should.have.been.called;
        });
    });
}());
