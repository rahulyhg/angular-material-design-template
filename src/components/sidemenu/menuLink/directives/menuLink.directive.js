/*global angular */
(function () {
    'use strict';
    angular.module('sidemenu')
        .directive('menuLink', menuLink);
    menuLink.$inject = ['$templateRequest', '$compile'];
    function menuLink($templateRequest, $compile) {
        var directive = {
            scope: {
                section: '=',
                menuIsSlidOpen: '=',
                menuIsHover: '='
            },
            controller: MenuLinkCtrl,
            controllerAs: 'vm',
            bindToController: true,
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element) {
            $templateRequest('sidemenu/menuLink/partials/menu-link.tpl.html').then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    MenuLinkCtrl.$inject = [];
    function MenuLinkCtrl() {
        var vm;
        vm = this;
    }
}());
