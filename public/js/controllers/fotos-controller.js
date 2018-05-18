angular.module('alurapic').controller('FotosController', function($scope, $http){
    $scope.fotos = [
      {
        titulo: 'Leão 1',
        url: 'https://brunoricci.com.br/images/casa_lannister.jpg'
      },
      {
        titulo: 'Leão 2',
        url: 'https://brunoricci.com.br/images/casa_lannister.jpg'
      },
      {
        titulo: 'Leão 3',
        url: 'https://brunoricci.com.br/images/casa_lannister.jpg'
      }
    ];
});