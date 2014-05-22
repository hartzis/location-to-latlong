'use strict';

var latlongControllers = angular.module('latlongControllers', [])

latlongControllers.controller('MainCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.newMarker = {};
        $scope.map = {
            center: {
                latitude: 39.5,
                longitude: -105
            },
            zoom: 7
        };
        $scope.getGeo = function() {
            $http.post('/getGeo', {
                location: $scope.newMarker.location
            })
                .success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log(data);
                    $scope.newMarker.lat = data.lat;
                    $scope.newMarker.lng = data.lng;
                })
                .error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log('error-', data, status, headers, config);
                });
        }
    }
]);