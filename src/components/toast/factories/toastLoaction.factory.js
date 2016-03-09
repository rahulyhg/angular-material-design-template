/*global angular */
(function () {
    'use strict';
    angular.module('wmToast')
        .factory('toastLocation', toastLocation);
        
    toastLocation.$inject = [];
        
    function toastLocation () {
        
        return {
            SetToastPosition: setToastPosition
        };
        
        var toastPositionObject;
        
        function sanitizePosition(input) {
            var current = input;
            if ( current.bottom && input.top ) current.top = false;
            if ( current.top && input.bottom ) current.bottom = false;
            if ( current.right && input.left ) current.left = false;
            if ( current.left && input.right ) current.right = false;
            toastPositionObject = angular.extend({},current);
        }
        
        function setToastPosition (input) {
            sanitizePosition(input);
            return Object.keys(toastPositionObject)
              .filter(function(pos) { return toastPositionObject[pos]; })
              .join(' ');
        }
    }
}());