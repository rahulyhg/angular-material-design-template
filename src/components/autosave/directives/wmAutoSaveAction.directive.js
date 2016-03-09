/*global angular */
(function () {
    'use strict';
    angular.module('autoSave')
        .directive('wmAutoSaveAction', wmAutoSaveAction);
    
    wmAutoSaveAction.$inject = [];
    
    function wmAutoSaveAction () {
        
        return {
            restrict: 'A',
            scope: {
                objectToSave: '=',
                objectStoreName: '@'
            },
            controller: wmAutoSaveActionController,
            controllerAs: 'wmAutoSave',
            bindToController: true,
            link: linkFunc
        };
        
        function linkFunc (scope, element) {
            element.bind('blur', () => {
                scope.wmAutoSave.BroadcastSaveSuccess();
            });
        }
    }
    
    wmAutoSaveActionController.$inject = ['$rootScope'];
    
    function wmAutoSaveActionController ($rootScope) {
        var self;
        
        self = this;
        
        self.BroadcastSaveSuccess = broadcastSaveSuccess;
        
        function broadcastSaveSuccess () {
            $rootScope.$broadcast('$wmAutoSaveComplete');
        }
    }
}());