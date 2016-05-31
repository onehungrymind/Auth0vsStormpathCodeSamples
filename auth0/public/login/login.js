angular.module( 'sample')
.controller( 'LoginCtrl', function ( $scope, auth, $rootScope, $http) {

  $scope.auth = auth;

  $scope.callPublicApi = function(){
    $http({
      url: 'http://localhost:3000/api/ping',
      method: 'GET'
    }).then(function(response) {
        alert(response.data);
    }, function(response) { 
      alert('Something went wrong.');
    });
  };

  $scope.callSecureApi = function() {
    // Just call the API as you'd do using $http
    $http({
      url: 'http://localhost:3000/api/ping/secured',
      method: 'GET'
    }).then(function(response) {
        alert(response.data);
    }, function(response) {
    	if(response.status === 401){
    		alert('You must be logged in to view this data');
    	}
    });
  }

});
