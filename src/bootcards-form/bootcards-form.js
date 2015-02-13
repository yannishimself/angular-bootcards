/**
 * @ngdoc directive
 * @name bootcards.directive:bootcardsForm
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
 
 <bootcards-form
 	title="Form View" 
 	ng-model="myListModel"></bootcards-form>
 
 </file>
 </example>
 */
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
