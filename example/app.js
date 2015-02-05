var app = angular.module('exampleApp', [
	'bootcards'
]);

app.controller('MainCtrl', function ($scope) {
	$scope.name = 'World';
	$scope.myListModel = [
		{heading: 'Item 1', text: 'This is the content', image: 'http://bootcards.org/public/images/Sofia%20Acey.jpg'},
		{heading: 'Item 2', text: 'This is the content', image: 'http://bootcards.org/public/images/Joseph%20Barish.jpg'},
		{heading: 'Item 3', text: 'This is the content', image: 'http://bootcards.org/public/images/Sofia%20Acey.jpg'}
	];

	$scope.stylesheets = {
		ios: '/bootcards/dist/css/bootcards-ios.min.css',
		android: '/bootcards/dist/css/bootcards-android.min.css',
		desktop: '/bootcards/dist/css/bootcards-desktop.min.css'
	};

	$scope.changeStyle = function(style){

		var stylesheet = $scope.stylesheets[style];
		console.log('change styles to ', style);
		angular.element('#app-styles').attr('href', stylesheet);
	};

});
