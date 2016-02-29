/*global */
(function () {
    'use strict';
    describe('menuSlide', function () {
        var sideMenuFactory;

        beforeEach(function () {
            module('sidemenu.factory');
            inject(function (_SideMenuFactory_) {
                sideMenuFactory = _SideMenuFactory_;
            });
        });
    });
}());
