angular.module('bootcards').directive('bcFooterbar', function () {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		scope: {
			title: '@',
			ngModel: '='
		},
		link: function (scope, element, attrs) {
			console.log('cbFooterbar linked');
		},
		templateUrl: 'bootcards-footerbar/bootcards-footerbar.html'
	};
});
