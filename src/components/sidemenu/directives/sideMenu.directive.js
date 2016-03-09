/*global angular */
/*jslint esnext: true */
(function () {
    'use strict';
    angular.module('sidemenu')
        .directive('wmSideMenu', wmSideMenu);
    wmSideMenu.$inject = ['$templateRequest', '$compile'];

    function wmSideMenu($templateRequest, $compile) {
        var directive = {
            scope: {
                menuType: '='
            },
            restrict: 'AE',
            controller: SideMenuController,
            controllerAs: 'vm',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element, attr) {
            var templatePath;
            templatePath ='sidemenu/partials/sidemenu-TYPE.tpl.html';
            templatePath = templatePath.replace('TYPE', attr.menuType);
            $templateRequest(templatePath).then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    SideMenuController.$inject = ['$scope', '$mdSidenav', '$mdColorPalette', '$timeout', 'SideMenuFactory', 'ChangeTheme', 'mdThemeProvider'];

    function SideMenuController($scope, $mdSidenav, $mdColorPalette, $timeout, SideMenuFactory, ChangeTheme, mdThemeProvider) {
        var vm;
        vm = this;

        function initialzeMenuOpen() {
            $timeout(function () {
                $mdSidenav('left').open();
            }, 100);
        }

        vm.autoFocusContent = false;
        vm.menu = SideMenuFactory;
        vm.menuIsSlidOpen = true;
        vm.ActiveTheme = 'Walmart';
        ChangeTheme.SwapThemes(vm.ActiveTheme);

        vm.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        //functions for menu-link and menu-toggle
        vm.isOpen = function (section) {
            if (section) {
                return SideMenuFactory.isSectionSelected(section);
            }
        };
        vm.isSectionSelected = function (section) {
            if (section) {
                return SideMenuFactory.isSectionSelected(section);
            }
        };
        vm.mouseEnter = function () {
            if (!vm.menuIsSlidOpen) {
                vm.menuIsHover = true;
            }
        };
        vm.mouseLeave = function () {
            if (!vm.menuIsSlidOpen) {
                vm.menuIsHover = false;
                angular.forEach(vm.menu.sections, (menuItem) => {
                    menuItem.isOpen = false;
                });
            }
        };

        $scope.$on('$viewContentLoaded', initialzeMenuOpen());

        $scope.$on('$activeThemeChanged', () => {
            vm.ActiveTheme = mdThemeProvider.activeTheme;
        });
    }
}());
