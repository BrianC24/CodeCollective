angular
  .module("hubApp")
  .controller("techController", function($http, $scope, $state, $stateParams){

    $http.get('API_KEY').then (function(response) {
    console.log(response.data.articles);
    $scope.articles = response.data.articles
  }),
  function(error){
    console.log(error);
    }
    
})
