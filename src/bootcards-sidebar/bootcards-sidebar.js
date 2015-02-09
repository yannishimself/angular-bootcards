angular.module('bootcards').directive('bcSidebar', function () {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		scope: {
			title: '@',
			ngModel: '='
		},
		link: function (scope, element, attrs) {
			console.log('bcSidebar linked');
		},
		templateUrl: 'bootcards-sidebar/bootcards-sidebar.html'
	};
});
