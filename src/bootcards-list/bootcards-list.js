/**
 * @ngdoc directive
 * @name bootcards.directive:bootcardsList
 * @element div
 * @function
 *
 * @description
 * This is the base card directive
 *

 *
 * @example
 <example module="bootcards">
 <file name="index.html">
 
 <bootcards-list
 	title="List View" 
 	ng-model="myListModel"></bootcards-list>
 
 </file>
 </example>
 */
angular.module('bootcards').directive('bootcardsList', function () {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			ngModel: '='
		},
		link: function (scope, element, attrs) {
			console.log('list linked');
		},
		templateUrl: 'bootcards-list/bootcards-list.tmpl.html'
	};
});