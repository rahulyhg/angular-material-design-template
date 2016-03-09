/*global angular */
(function () {
    'use strict';
    angular.module('common')
        .factory('CompileTemplate', CompileTemplate);
    
    CompileTemplate.$inject = ['$q', '$templateRequest', '$compile'];
    
    function CompileTemplate ($q, $templateRequest, $compile) {
        
        return {
            Compile: compile
        };
        
        function compile(scope, element) {
            var deferred;
            
            deferred = $q.defer();
            
            $templateRequest(scope.toolbarContentRight.templatePath).then((html) => {
                var template;
                
                template = angular.element(html);
                element.append(template);
                $compile(scope)(template);
                deferred.resolve(true);
            }, (error) => {
                deferred.resolve(error);
            });
            
            return deferred.promise;
        }
    }
}());