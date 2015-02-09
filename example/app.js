var app = angular.module('exampleApp', ['bootcards', 'ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
		var routeResolver = {
			delay: function ($q, $timeout) {
				var delay = $q.defer();
				$timeout(delay.resolve, 300);
				return delay.promise;
			}
		};

		$routeProvider
			.when('/', {
				templateUrl: 'main.html',
				controller: 'MainCtrl',
				resolve: routeResolver
			})
			.when('/docs', {
				templateUrl: 'docs.html',
				controller: 'DocsCtrl',
				resolve: routeResolver
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
app.controller('DocsCtrl', function($scope) {
	
});
app.controller('MainCtrl', function($scope) {
	
	$scope.App = {
		name: 'angular-bootcards.js',
		menu: [
		{title: 'Home', href:'#/home'},
		{title: 'Docs', href:'#/docs'}
		],
		docs: {
			menu: [
				{title: 'Directives', href:''}
			]
		}
	};
	
	$scope.name = 'World';
	$scope.myListModel = [{
		heading : 'Item 1',
		text : 'This is the content',
		image : 'http://bootcards.org/public/images/Sofia%20Acey.jpg'
	}, {
		heading : 'Item 2',
		text : 'This is the content',
		image : 'http://bootcards.org/public/images/Joseph%20Barish.jpg'
	}, {
		heading : 'Item 3',
		text : 'This is the content',
		image : 'http://bootcards.org/public/images/Sofia%20Acey.jpg'
	}];

	$scope.stylesheets = {
		ios : '/bootcards/dist/css/bootcards-ios.min.css',
		android : '/bootcards/dist/css/bootcards-android.min.css',
		desktop : '/bootcards/dist/css/bootcards-desktop.min.css'
	};

	$scope.changeStyle = function(style) {

		var stylesheet = $scope.stylesheets[style];
		console.log('change styles to ', style);
		angular.element('#app-styles').attr('href', stylesheet);
	};

});
