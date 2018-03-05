app.controller('SearchController', ['$http', 'FavoritesService', function ($http, FavoritesService) {
    console.log('SearchController loaded.');
    const self = this;

    self.search = {
        resource : "films"
    };

    self.results = [];

    self.searchApi = function(searchDetails) {
        console.log('searching api', searchDetails);
        const urlBase = 'https://www.swapi.co/api';

        const config = {
          params: { search: searchDetails.query }
        };

        let searchUrl = `${urlBase}/${searchDetails.resource}/`;
        console.log(searchUrl);
        
        $http.get(searchUrl, config)
            .then(function (response) {
                console.log('swapi search response:', response);
                self.results = response.data.results;
            })
            .catch(function(response) {
                console.log('error from swapi: ', response);                
            });

        // what happens if query is empty string but present?
        // all results are returned for given resource


        // what if resource is empty?
    } // end search

    self.clearResults = function() {
        self.results = [];
    };

    self.addFavorite = function (data, resourceType) {
        // attach the kind of resource to the actual thing to save
        data.resourceType = resourceType;
        // have service send to our server
        FavoritesService.addFavorite(data);
    };

}]);