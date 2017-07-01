var app = angular.module('myApp', ['ngSanitize']);
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
            "Description"
    ];

    var allSpells = [];

    $http.get("https://raw.githubusercontent.com/colton-howe/PathfinderHelper/master/spells.json").then(function (response) {
        for(var i = 0; i < Object.keys(response.data).length; i++){
            var data = response.data[i];
            var schoolText;
            if(data.fields.subschool == ""){
                schoolText = data.fields.school;
            } else {
                schoolText = data.fields.school + " (" + data.fields.subschool + ")";
            }
            allSpells.push({name: data.fields.name,
                school: schoolText,
                level: data.fields.level,
                casting_time: data.fields.casting_time,
                components: data.fields.components,
                range: data.fields.range,
                area: data.fields.area,
                duration: data.fields.duration,
                saving_throw: data.fields.saving_throw,
                spell_resistance: data.fields.spell_resistance,
                description: data.fields.description,
            });
        } 
        $scope.spells = allSpells;
    }, function(reason) {
        $scope.spells = reason;
    });
});