app.service('FavoritesService', ['$http', function($http) {
    var self = this;

    self.favorites = { list: [] };

    self.addFavorite = function( fav ) {
        console.log( 'in FavoritesService addFavorite:', fav );
    };

    self.getFavorites = function() {
        console.log( 'in FavoritesService getFavorites' );
    };

    self.deleteFavorite = function( id ) {
        console.log( 'in FavoritesService deleteFavorite:', id );
    };
    // init
    self.getFavorites();
}]);
