angular.module('bootcards').directive('bootcardsChart', function () {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@',
			ngModel: '='
		},
		link: function (scope, element, attrs) {
			console.log('chart linked');
		},
		templateUrl: 'bootcards-chart/bootcards-chart.tmpl.html'
	};
});
