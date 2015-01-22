angular.module('bootcards').directive('bootcardsForm', function () {
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
		templateUrl: 'bootcards-form/bootcards-form.tmpl.html'
	};
});