/*global angular */
/*jshint esnext: true */
(function () {
    'use strict';
    angular.module('SideMenu', ['dynamicState.provider', 'sidemenu.factory'])
        .config(['$dynamicStateProvider', 'SideMenuFactoryProvider', 'SideMenuMenuItems', function ($dynamicStateProvider, SideMenuFactoryProvider, SideMenuMenuItems) {
            SideMenuFactoryProvider.$get().setSections(SideMenuMenuItems);
            angular.forEach(SideMenuMenuItems.menuItems, (menuItem) => {
                if (menuItem.templateUrl && menuItem.templateUrl !== '') {
                    $dynamicStateProvider.$get().addStateWithView(menuItem.state, menuItem.name.replace(/ /g, ''), null, menuItem.viewName, menuItem.templateUrl, null, null);
                }
            });
    }]);
}());
