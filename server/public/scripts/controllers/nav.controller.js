app.controller('NavController', ['FavoritesService', function (FavoritesService) {
    console.log('NavController loaded.');
    const self = this;

    self.favCount = FavoritesService.favorites;
    
    self.setLocation = function(loc) {
        self.location = loc;
    };

}]);