/*global */
(function () {
    'use strict';
    describe('menuToggle', function () {
        var compile, scope, timeout, template, element, isolateScope, vm;
        template = '<md-button class="md-button-toggle ng-scope" ng-class="{active: vm.isOpen(vm.section), \'\' : true}" ng-click="vm.toggle(vm.section)" aria-controls="docs-menu-" flex="" layout="row" aria-expanded="false"><span style="padding-left: 5px;" class="ng-binding"></span><span aria-hidden="true" class="pull-right fa fa-chevron-down md-toggle-icon" ng-class="{\'toggled\' : vm.isOpen(vm.section)}"></span></md-button><ul ng-show="vm.isOpen(vm.section)" id="docs-menu-" class="menu-toggle-list ng-scope ng-hide"><!-- ngRepeat: page in vm.section.pages --></ul>';

        function fireHtmlEvent(eventName) {
            element.triggerHandler(eventName);
            isolateScope.$apply();
        }
        beforeEach(function () {
            module('sidemenu');
            module('AngularMaterialDesignTemplatePartials');
            module('removewhitespace.filter');
            inject(function ($compile, $rootScope) {
                compile = $compile;
                scope = $rootScope.$new();
            });

            setElement();

            function setElement() {
                element = compile('<menu-toggle></menu-toggle>')(scope);
                element.scope().$digest();
                isolateScope = element.isolateScope();
            }
        });
        afterEach(function () {
            if (scope) {
                scope.$destroy();
            }
        });
        it('Test that the correct menuToggle element is added to the HTML', function () {
            expect(element.html()).to.have.string(template);
        });
        it('Test that isOpen returns the expected value', function () {
            expect(isolateScope.vm.isOpen()).to.be.false;
            expect(isolateScope.vm.isOpen(null)).to.be.false;
            expect(isolateScope.vm.isOpen({
                isOpen: true
            })).to.be.true;
            expect(isolateScope.vm.isOpen({
                isOpen: false
            })).to.be.false;
        });
        it('Test that toggle returns the expected value', function () {
            var section;
            section = {
                isOpen: true
            };
            expect(isolateScope.vm.toggle()).to.be.falsy;
            expect(isolateScope.vm.toggle(null)).to.be.falsy;
            isolateScope.vm.toggle(section);
            expect(section.isOpen).to.be.false;
            isolateScope.vm.toggle(section)
            expect(section.isOpen).to.be.true;
        });
    });
}());
