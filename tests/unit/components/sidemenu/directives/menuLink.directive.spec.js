/*global */
(function () {
    'use strict';
    describe('menuLink', function () {
        var compile, scope, template, element, isolateScope;
        template = '<md-button ui-sref-active="active-state" ui-sref="" class="ng-scope"><span ng-class="{\'\' : true}"></span> <!-- ngIf: vm.section.stackedIcons.length > 0 --> <span ng-show="vm.menuIsSlidOpen || vm.menuIsHover" style="padding-left: 5px;" class="ng-binding ng-hide"></span> <!-- ngIf: vm.isSelected() --></md-button>';

        function fireHtmlEvent (eventName) {
            element.triggerHandler(eventName);
            isolateScope.$apply();
        }
        beforeEach(function () {
            module('sidemenu');
            module('AngularMaterialDesignTemplatePartials');
            module('lowercase.filter');
            inject(function ($compile, $rootScope) {
                compile = $compile;
                scope = $rootScope.$new();
            });

            setElement();

            function setElement () {
                element = compile('<menu-link></menu-link>')(scope);
                element.scope().$digest();
                isolateScope = element.isolateScope();
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
    });
}());
