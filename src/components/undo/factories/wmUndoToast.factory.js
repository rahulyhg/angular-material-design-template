/*global angular */
(function () {
    'use strict';
    angular.module('wmUndo')
        .factory('wmUndoToast', wmUndoToast);
    
    var Message;

    wmUndoToast.$inject = ['$q', '$mdToast', 'toastLocation'];

    function wmUndoToast($q, $mdToast, toastLocation) {

        return {
            LaunchUndoToast: launchUndoToast,
            LaunchSuccessToast: launchSuccessToast,
            LaunchErrorToast: launchErrorToast
        };

        function launchUndoToast(message, controlText, highlightControlText, toastPositionObject, timeToShow) {
            var deferred, toast;
            deferred = $q.defer();

            var toast = $mdToast.simple()
                .textContent(message)
                .action(controlText)
                .highlightAction(highlightControlText)
                .position(toastLocation.SetToastPosition(toastPositionObject))
                .hideDelay(timeToShow);

            $mdToast.show(toast).then(function (response) {
                if (response === 'ok') {
                    deferred.resolve('Cancelled');
                } else {
                    deferred.reject(false);
                }
            });

            return deferred.promise;
        }

        function launchSuccessToast(toastPositionObject) {
            var toast;
            toast = $mdToast.simple()
                .textContent('Quote Status Updated Successfully')
                .position(toastLocation.SetToastPosition(toastPositionObject));
            $mdToast.show(toast);
        }

        function launchErrorToast(toastPositionObject, message) {
            var toast;
            
            Message = message;

            toast = $mdToast.show({
                templateUrl: 'src/components/undo/partials/wmUndoToast.Error.tpl.html',
                position: toastLocation.SetToastPosition(toastPositionObject),
                controller: launchErrorToastController,
                controllerAs: 'wmToastError'
            });
        }
    }
    
    launchErrorToastController.$inject = [];
    
    function launchErrorToastController () {
        var self;
        
        self = this;
        
        self.Message = Message;
    }
}());