/*global */
(function () {
    'use strict';
    describe('wmFooter', function () {
        var compile, scope, template, element, isolateScope;
        template = '<div flex="" style="font-size: .8em; margin-left: 25px;" class="ng-scope">\n    <div>© Walmart Inc. 2016</div>\n</div>';

        function fireHtmlEvent (eventName) {
            element.triggerHandler(eventName);
            isolateScope.$apply();
        }
        beforeEach(function () {
            module('sidemenu');
            module('my.templates');
            module('lowercase.filter');
            inject(function ($compile, $rootScope) {
                compile = $compile;
                scope = $rootScope.$new();
            });

            setElement();

            function setElement () {
                element = compile('<wm-footer></wm-footer>')(scope);
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
