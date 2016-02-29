/*global describe, beforeEach, module, inject, afterEach, it, expect */
/*jshint -W030 */
(function () {
    'use strict';
    describe('menuSlide', function () {
        var compile, scope, element, templateCache, elementHTML;


        beforeEach(function () {
            module('sidemenu');
            module('AngularMaterialDesignTemplatePartials');
            module('ngMaterial');
            module('my.templates');
            inject(function (_$compile_, _$rootScope_, _$templateCache_) {
                compile = _$compile_;
                scope = _$rootScope_.$new();
                templateCache = _$templateCache_;
            });

            setElement();
            getElementHTMLFromTemplateCache();

            function setElement() {
                element = compile('<wm-toolbar-content-left></wm-toolbar-content-left>')(scope);
                element.scope().$digest();
            }

            function getElementHTMLFromTemplateCache () {
                elementHTML = templateCache.get('pages/toolbar-content/left-content.tpl.html');
            }

        });
        it('Test that the elment html matches what is stored in the cache', function () {

        });
    });
}());
