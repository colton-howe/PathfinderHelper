var app = angular.module('myApp', []);
app.controller('myController', function($scope, $http){

    $scope.titles = [
            "Name",
            "School",
            "Level",
            "Casting Time",
            "Components",
            "Range",
            "Area",
            "Duration",
            "Saving Throw",
            "Spell Resistance",
            "Description",
            "Target"
    ];

    var allSpells = [];
    $http({
        method: 'GET',
        url: 'spells.json',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(function (response) {
        for(var data in response.data){
            allSpells.push(data);
        }
    });
    $scope.spells = allSpells;
});