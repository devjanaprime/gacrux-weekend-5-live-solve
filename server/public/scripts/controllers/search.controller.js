app.controller('SearchController', ['$http', 'FavoritesService', function ($http, FavoritesService) {
    console.log('SearchController loaded.');
    const self = this;

    self.search = {
        resource : "films"
    };

    self.results = [];

    self.searchApi = function( searchDetails ) {
        console.log( 'in SearchController searchApi:', searchDetails );
        const urlBase = 'https://www.swapi.co/api';
    } // end search

    self.clearResults = function() {
        self.results = [];
    };
}]);
