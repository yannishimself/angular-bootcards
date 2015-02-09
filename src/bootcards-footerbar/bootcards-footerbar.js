angular.module('bootcards').directive('bcFooterbar', function () {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@',
			ngModel: '='
		},
		link: function (scope, element, attrs) {
			console.log('table linked');
		},
		templateUrl: 'bootcards-footerbar/bootcards-footerbar.html'
	};
});
