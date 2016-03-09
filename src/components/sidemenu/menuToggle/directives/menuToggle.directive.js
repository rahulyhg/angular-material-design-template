/*global angular */
(function () {
    'use strict';
    angular.module('sidemenu')
        .directive('menuToggle', menuToggle);
    menuToggle.$inject = ['$templateRequest', '$compile'];

    function menuToggle($templateRequest, $compile) {
        var directive = {
            scope: {
                section: '=',
                menuIsSlidOpen: '=',
                menuIsHover: '='
            },
            controller: MenuToggleCtrl,
            controllerAs: 'vm',
            bindToController: true,
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element) {
            $templateRequest('sidemenu/menuToggle/partials/menu-toggle.tpl.html').then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    MenuToggleCtrl.$inject = ['$q', 'SideMenuFactory'];

    function MenuToggleCtrl($q, SideMenuFactory) {
        var self;
        self = this;
        self.menu = SideMenuFactory;

        self.isOpen = function (section) {
            return section !== undefined && section !== null && section.isOpen;
        };

        self.toggle = function (section) {
            if (section) {
                section.isOpen = !section.isOpen;
            }
        };
    }
}());
