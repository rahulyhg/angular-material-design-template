/*global angular */
(function () {
    'use strict';
    angular.module('autoSave')
        .directive('wmAutoSaveNotification', wmAutoSaveNotification);

    wmAutoSaveNotification.$inject = ['$timeout'];

    function wmAutoSaveNotification($timeout) {

        return {
            restrict: 'AE',
            scope: {
                timeToLive: '=',
                message: '@',
                bottom: '@',
                top: '@',
                left: '@',
                right: '@'
            },
            controller: wmAutoSaveNotificationController,
            controllerAs: 'autoSave',
            bindToController: true,
            link: linkFunc
        };

        function linkFunc(scope, element) {
            scope.$on('$wmAutoSaveComplete', () => {
                scope.autoSave.ShowActionToast();
                scope.autoSave.ActionToastActive = true;
            });
        }
    }

    wmAutoSaveNotificationController.$inject = ['$scope', '$mdToast', 'toastLocation'];

    function wmAutoSaveNotificationController($scope, $mdToast, toastLocation) {
        var self, toastPositionObject;
        
        self = this;
        
        toastPositionObject = {
          bottom: self.bottom,
          top: self.top,
          left: self.left,
          right: self.right
        };
        
        self.ShowActionToast = showActionToast;
        
        function showActionToast () {
            var toast = $mdToast.simple()
                .textContent(self.message)
                .position(toastLocation.SetToastPosition(toastPositionObject))
                .hideDelay(self.timeToLive);
            $mdToast.show(toast);
        }
    }
}());