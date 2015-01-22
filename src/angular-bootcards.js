'use strict';

var angularBootcards = angular.module('jonniespratley.angularBootcards', []);

angularBootcards.directive('bootcardsList', function () {
	return {
		restrict: 'EC',
		transclude: true,
		scope: {
			ngModel: '='
		},
		link: function (scope, element, attrs, tabsCtrl) {
			console.log('card linked');
		},
		templateUrl: './bootcards-list.tmpl.html'
	};
});

angularBootcards.directive('myDirective', function () {

	return {
		restrict: 'EAC',
		scope: true,
		compile: function compile(tElement, tAttrs, transclude) {
			tElement.html('<span>hello {{name}}</span>');
			return function postLink(scope, iElement, iAttrs, controller) {
				scope.name = 'world';
			};
		}
	};

});
