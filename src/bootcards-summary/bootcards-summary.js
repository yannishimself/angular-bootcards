angular.module('bootcards').directive('bootcardsSummary', function () {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@',
			ngModel: '='
		},
		link: function (scope, element, attrs) {
			console.log('card linked');
		},
		templateUrl: 'bootcards-summary/bootcards-summary.tmpl.html'
	};
});