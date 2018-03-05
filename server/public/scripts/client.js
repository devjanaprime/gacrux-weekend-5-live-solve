var app = angular.module( 'myApp', [ 'ngRoute' ] );

console.log( 'NG' );

app.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/search', {
            templateUrl: '/views/search.html',
            controller: 'SearchController as vm'
        })
        .when('/favorites', {
            templateUrl: '/views/favorites.html',
            controller: 'FavoritesController as vm'
        })
        .otherwise(
            { redirectTo: '/search' }
        );

});
