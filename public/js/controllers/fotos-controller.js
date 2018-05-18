angular.module('alurapic').controller('FotosController', function($scope, $http){
    $scope.fotos = [];

    $http.get('v1/fotos')
    .then(function(fotos) {
      $scope.fotos = fotos.data;
    })
    .catch(function(erro) {
      console.log(erro);
    });
});