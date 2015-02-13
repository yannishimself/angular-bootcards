/**
 * @ngdoc directive
 * @name bootcards.directive:bootcardsFile
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
 
 <bootcards-file
 	title="File View" 
 	ng-model="myListModel"></bootcards-file>
 
 </file>
 </example>
 */
angular.module('bootcards').directive('bootcardsFile', function() {
	return {
		restrict : 'E',
		transclude : true,
		scope : {
			title : '@',
			ngModel : '='
		},
		link : function(scope, element, attrs) {
			console.log('file linked');
		},
		templateUrl : 'bootcards-file/bootcards-file.tmpl.html'
	};
});
