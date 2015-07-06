
angular.module('econtrollers').controller('DoctorCtrl',
    ['$scope',
        function ($scope) {
            $scope.onVote = function (doctor, up) {
                if (up) {
                    doctor.votes++;
                    console.log('vote');
                } else {
                    doctor.votes--;
                }
                $scope.countVote(doctor.name);
            };
        }]);
    