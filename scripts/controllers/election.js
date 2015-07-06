
angular.module('econtrollers').controller('ElectionCtrl',
   ['$scope',
        function ($scope) {

            //instaniate the values 
            $scope.doctors = [
                {name: 'Dr. Nick', votes: 0},
                {name: 'Dr. Oz', votes: 0},
                {name: 'Dr. Pepper', votes: 0},
                {name: 'Dr. J', votes: 0}
            ];
            $scope.totalVotes = 0;
            $scope.lastVote = null;

            //increments total vote counts & updates name
            $scope.countVote = function(name) {
                $scope.totalVotes++;
                $scope.lastVote = name;
            };
   }]);
 