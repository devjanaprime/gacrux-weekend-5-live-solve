app.controller( 'FavoritesController', [ 'FavoritesService', function( FavoritesService ) {
    console.log( 'FavoritesController loaded' );

    const self = this;
    self.results = FavoritesService.favorites;    
}]);
