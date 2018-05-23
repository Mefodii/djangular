(function(){
    "use strict";

    angular.module("scrumboard.demo", ["ngRoute"])
        .controller("ScrumboardController", [ "$scope", "$http", "$location", ScrumboardController]);

    function ScrumboardController($scope, $http, $location) {
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

        $scope.logout = function(){
            $http.get("/auth_api/logout/")
                .then(function () {
                    $location.url("/login");
                });
        };

        $scope.data = [];
        $http.get("/scrumboard/lists/").then(function(response){
            $scope.data = response.data
        });
    }
}());