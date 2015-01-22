angular.module('bootcards').directive('bootcardsList', function () {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			ngModel: '='
		},
		link: function (scope, element, attrs) {
			console.log('card linked');
		},
		templateUrl: 'bootcards-list/bootcards-list.tmpl.html'
	};
});