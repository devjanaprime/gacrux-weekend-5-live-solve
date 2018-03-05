app.service('FavoritesService', ['$http', function($http) {
    var self = this;

    self.favorites = { list: [] };

    self.addFavorite = function( fav ) {
        console.log( 'in FavoritesService addFavorite:', fav );
        $http.post( '/favorites', fav ).then( function( response ){
          console.log( 'fave saved' );
          self.getFavorites();
        })
        .catch( function( response ){
          console.log( 'error adding favorite:', response );
        });
    };

    self.getFavorites = function() {
        console.log( 'in FavoritesService getFavorites' );
        $http.get('/favorites').then( function( response ) {
            console.log( 'services getFavorites:', response.data );
            self.favorites.list = response.data;
        })
        .catch( function( response ) {
            console.log( 'error getting favs:', response );
        });
    };

    self.deleteFavorite = function( id ) {
        console.log( 'in FavoritesService deleteFavorite:', id );
    };
    // init
    self.getFavorites();
}]);
