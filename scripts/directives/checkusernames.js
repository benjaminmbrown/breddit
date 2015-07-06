'use strict';

app.directive('checkusername', function(User){
	return{
		require: "ngModel",
		link: function (scope, elm, attrc, ctrl){
			ctrl.$parsers.unshift(function(viewValue){
				if(usernameRegxp.test(viewValue)){
					if(User.findByUsername(viewValue).getIndex().length === 0){
						ctrl.$setValidity('taken',true);
						ctrl.$setValidity('invalid',true);
						return viewValue;
					}else{
						ctrl.$setValidity('taken',false);
						ctrl.$setValidity('invalid',true);
						return undefined;
					}
				}else{
					ctrl.$setValidity('taken',true);
					ctrl.$setValidity('invalid',false);
					return undefined;
				}
			});
		}
	};
});