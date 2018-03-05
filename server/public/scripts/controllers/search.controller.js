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
        let searchUrl = urlBase + '/' + searchDetails.resource + '/?search=' + searchDetails.query;
        console.log( 'search url:', searchUrl );
        $http.get( searchUrl ).then( function ( response ) {
            console.log( 'back from swapi with:', response );
            self.results = response.data.results;
        })
        .catch( function( response ) {
            console.log( 'error from swapi:', response);
        });
    } // end search

    self.clearResults = function() {
        self.results = [];
    };
}]);
