(function(){
    "use strict";

    angular.module("scrumboard.demo", ["ngRoute"])
        .controller("ScrumboardController", [ "$scope", "$http", "Login", ScrumboardController]);

    function ScrumboardController($scope, $http, Login) {
        $scope.add = function (list, title) {
            var card = {
                list: list.id,
                title: title
            };

            $http.post("/scrumboard/cards/", card)
                .then(function(response){
                    list.cards.push(response.data);
                },
                function(){
                    alert("Could not insert card");
                });
        };

        $scope.addCategory = function (data, name) {
            var cat = {
                name: name,
                cards: [
                ]
            };

            $http.post("/scrumboard/lists/", cat)
                .then(function(response){
                    data.push(response.data);
                },
                function(){
                    alert("Could not insert list");
                });
        };


        $scope.deleteList = function(list){
            var url = "/scrumboard/lists/" + list.id + "/";
            $http.delete(url).then(
                function(){
                    var lists = $scope.data;
                    lists.splice(
                        lists.indexOf(list),
                        1
                    );
                }
            );
        }

        Login.redirectIfNotLoggedIn();
        $scope.data = [];
        $scope.logout = Login.logout;
        $scope.sortBy="story_points";
        $scope.reverse=true;
        $scope.showFilters=false;


        $http.get("/scrumboard/lists/").then(function(response){
            $scope.data = response.data
        });


    }
}());