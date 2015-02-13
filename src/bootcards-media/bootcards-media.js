/**
 * @ngdoc directive
 * @name bootcards.directive:bootcardsMedia
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
 
 <bootcards-media
 	title="Media View" 
 	ng-model="myListModel"></bootcards-media>
 
 </file>
 </example>
 */
angular.module('bootcards').directive('bootcardsMedia', function () {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@',
			ngModel: '='
		},
		link: function (scope, element, attrs) {
			console.log('media linked');
		},
		templateUrl: 'bootcards-media/bootcards-media.tmpl.html'
	};
});
