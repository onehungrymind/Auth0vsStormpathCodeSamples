angular.module( 'sample')
.controller( 'LoginCtrl', function ( $scope, $rootScope, $http, $location, $user) {

  // Check to see if user exists

  $user.get().then(function(user){
    $location.path('/home');
  })

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
      console.log(response);
        alert(response.data);
    }, function(response) {
    	alert(response);
    });
  }

});
