angular.module( 'sample', [
  'stormpath',
  'stormpath.templates',
  'ngRoute'
]).config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
      })
    .when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl',
      })
    .otherwise('/login');
    $locationProvider.html5Mode(true);
  })
  .run(function($stormpath, $rootScope, $location) {
    $stormpath.ngRouter({
      loginRoute: '/login',
      defaultPostLoginRoute: '/home'
    });

    $rootScope.$on('$sessionEnd', function() {
      $location.path('/login');
    });
  });