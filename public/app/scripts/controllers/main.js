'use strict';

var latlongControllers = angular.module('latlongControllers', [])

latlongControllers.controller('MainCtrl', ['$scope', '$http',
    function($scope, $http) {
        // $scope.newMarker = {};
        $scope.map = {
            center: {
                latitude: 39.5,
                longitude: -105
            },
            zoom: 7,
            mapMarkers: {
                markers: [],
                markerOptions : {opacity:0.5, animation: google.maps.Animation.DROP}
            }
        };



        $scope.createMarker = function (lat,lng) {
          $scope.map.mapMarkers.markers.push({
              id: ((Math.random())*1000000).toFixed(0),
              latitude: lat,
              longitude: lng,
              address: $scope.lastSearchedAddress
          });
          $scope.longitude = '';
          $scope.latitude = '';
          $scope.lastSearchedAddress = '';
          $scope.address = '';
        };

        $scope.getGeo = function(location) {
            $http.post('/getGeo', {
                location: location
            })
                .success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log('got back-', data);
                    $scope.latitude = data.latitude;
                    $scope.longitude = data.longitude
                    $scope.lastSearchedAddress = data.address;
                    $scope.address = data.address;
                    console.log('set scope-', $scope.latitude, $scope.longitude, $scope.address);
                })
                .error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log('error-', data, status, headers, config);
                });
        }
    }
]);