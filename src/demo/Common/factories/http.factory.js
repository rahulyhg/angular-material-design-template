/*global angular */
(function () {
    angular.module('common')
        .factory('http', http);

    http.$inject = ['$http', '$q'];

    function http ($http, $q) {

        return {
            GetWithPromise: getWithPromise
        };

        function getWithPromise (url) {
            var deferred;

            deferred = $q.defer();

            $http.get(url).then((response) => {
                $q.resolve(response);
            }, (error) => {
                $q.reject(error);
            });

            return deferred.promise;
        }
    }
}());
