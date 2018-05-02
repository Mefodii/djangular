(function(){
    "use strict";

    angular.module("scrumboard.demo", [])
        .controller("ScrumboardController", [ "$scope", ScrumboardController]);

    function ScrumboardController($scope) {
        $scope.add = function (list, title) {
            var card = {
                title: title
            };

            list.cards.push(card);
        };

        $scope.addCategory = function (data, name) {
            var cat = {
                name: name,
                cards: [
                ]
            };

            data.push(cat);
        };

        $scope.data = [
            {
                name: "Django demo",
                cards: [
                    {
                        title: "Create Models"
                    },
                    {
                        title: "Create View"
                    },
                    {
                        title: "Migrate Database"
                    }
                ]
            },
            {
                name: "Angular demo",
                cards: [
                    {
                        title: "Write HTML"
                    },
                    {
                        title: "Create View"
                    }
                ]
            }
        ];
    }
}());