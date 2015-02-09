angular.module('bootcards').directive('bootcardsForm', function () {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		scope: {
			title: '@',
			schema: '@',
			ngModel: '='
		},
		link: function (scope, element, attrs) {
			console.log('form linked');
		},
		templateUrl: 'bootcards-form/bootcards-form.html'
	};
});
