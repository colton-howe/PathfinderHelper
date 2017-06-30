var app = angular.module('myApp', []);
app.controller('myController', function($scope){
    $scope.titles [
            "Name",
            "School",
            "Subschool",
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

    $scope.spells = [];
});