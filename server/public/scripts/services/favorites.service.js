app.service('FavoritesService', ['$http', function($http) {
    var self = this;

    // create an array inside an object
    self.favorites = { list: [] };

    self.addFavorite = function(fav) {
        // post to server
        $http.post('/favorites', fav)
            .then(function (response) {
                console.log('saved thing');
                self.getFavorites();
            })
            .catch(function (response) {
                console.log('error on post: ', response);
            });
    };

    self.getFavorites = function() {
        // get from db
        console.log('service getting favorites');
        $http.get('/favorites')
            .then(function (response) {
                console.log('services getFavorites', response.data);
                self.favorites.list = response.data;
            })
            .catch(function (response) {
                console.log('error services get: ', response);
            });        
    };

    self.deleteFavorite = function(id) {
        $http.delete(`/favorites/${id}`)
            .then(function (response) {
                console.log('deleted thing');
                self.getFavorites();
            })
            .catch(function (response) {
                console.log('error on post: ', response);
            }); 
    };

    // on load
    self.getFavorites();


}]);