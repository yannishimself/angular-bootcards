angular.module('bootcards').directive('bcNavbar', function () {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		scope: {
			title: '@',
			ngModel: '='
		},
		link: function (scope, element, attrs) {
			console.log('bcNavbar linked');
		},
		templateUrl: 'bootcards-navbar/bootcards-navbar.html'
	};
});
