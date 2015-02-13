angular.module('bootcards').directive('bcNavbar', function () {
	return {
		restrict: 'E',

		replace: true,
		scope: {
			title: '@',
			ngModel: '='
		},
		link: function ($scope, $element, $attrs) {
			console.log('bcNavbar linked');
			console.log($scope);
		},
		templateUrl: 'bootcards-navbar/bootcards-navbar.html'
	};
});
