/**
* @ngdoc directive
* @name bootcards.directive:bootcardsCard
* @element div
* @function
*
* @description
* This is the base card directive
*
* **Note:** ie<9 needs pollyfill for window.getComputedStyle
*
* @example
<example module="bootcards">
<file name="index.html">
<bootcards-card title="List View">
<bootcards-list ng-model="myListModel"></bootcards-list>
</bootcards-card>
</file>
</example>
*/
angular.module('bootcards').directive('bootcardsCard', function () {
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
		templateUrl: 'bootcards-card/bootcards-card.tmpl.html'
	};
});
