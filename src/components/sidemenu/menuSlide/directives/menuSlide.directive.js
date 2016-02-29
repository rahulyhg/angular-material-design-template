/*global angular */
/*jslint esnext: true */
(function () {
    'use strict';
    angular.module('sidemenu')
        .directive('menuSlide', menuSlide);
    menuSlide.$inject = ['$templateRequest', '$compile'];
    function menuSlide($templateRequest, $compile) {
        var directive = {
            restict: 'EA',
            scope: {
                menuIsSlidOpen: '=',
                menuIsHover: '=',
                menuItems: '='
            },
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element) {
            $templateRequest('sidemenu/menuSlide/partials/menu-slide.tpl.html').then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
            element.bind('click', function () {
                angular.forEach(scope.menuItems, function (menuItem) {
                   menuItem.isOpen = false;
                });
                scope.menuIsSlidOpen = !scope.menuIsSlidOpen;
                scope.menuIsHover = !scope.menuIsSlidOpen;
                scope.$apply();
            });
        }
    }
}());
