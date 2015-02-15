var app = angular.module('exampleApp', ['bootcards', 'ngRoute']);
app.config(['$routeProvider',
	function ($routeProvider) {
		var routeResolver = {
			delay: function ($q, $timeout) {
				var delay = $q.defer();
				$timeout(delay.resolve, 300);
				return delay.promise;
			}
		};

		$routeProvider.when('/', {
			templateUrl: 'main.html',
			controller: 'MainCtrl',
			resolve: routeResolver
		}).when('/docs', {
			templateUrl: 'docs.html',
			controller: 'DocsCtrl',
			resolve: routeResolver
		}).otherwise({
			redirectTo: '/'
		});
	}]);
app.controller('AppCtrl', function ($scope, $rootScope) {
	$rootScope.App = {
		title: 'angular-bootcards.js',
		feature: {
			title: 'Angular Bootcards',
			body: '	AngularJS cards-based UI with dual-pane capability for mobile and desktop, built on top of Angular'
		},
		nav: [{
			title: 'Home',
			href: '#/home'
		}, {
			title: 'Docs',
			href: '#/docs'
		}],
		sidebar: {
			nav: [{
				title: 'Directives',
				href: ''
			}]
		}
	};

	$scope.name = 'World';
	$scope.myListModel = [{
		heading: 'Item 1',
		text: 'This is the content',
		image: 'http://bootcards.org/public/images/Sofia%20Acey.jpg'
	}, {
		heading: 'Item 2',
		text: 'This is the content',
		image: 'http://bootcards.org/public/images/Joseph%20Barish.jpg'
	}, {
		heading: 'Item 3',
		text: 'This is the content',
		image: 'http://bootcards.org/public/images/Sofia%20Acey.jpg'
	}];

	$scope.stylesheets = {
		ios: '/bootcards/dist/css/bootcards-ios.min.css',
		android: '/bootcards/dist/css/bootcards-android.min.css',
		desktop: '/bootcards/dist/css/bootcards-desktop.min.css'
	};

	$scope.changeStyle = function (style) {

		var stylesheet = $scope.stylesheets[style];
		console.log('change styles to ', style);
		angular.element('#app-styles').attr('href', stylesheet);
	};

	$(document).ready(function () {
		console.log('document ready');

		//activate highlight.js
		hljs.initHighlightingOnLoad();
		$('[data-spy="scroll"]').each(function () {
			var $spy = $(this).scrollspy('refresh')
		});

		bootcards.init({
			offCanvasHideOnMainClick: true,
			offCanvasBackdrop: true,
			enableTabletPortraitMode: true,
			disableRubberBanding: true,
			disableBreakoutSelector: 'a.no-break-out'
		});
	});


});
app.controller('DocsCtrl', function ($scope) {
	$scope.feature = {
		title: 'Angular Bootcards',
		body: '	AngularJS cards-based UI with dual-pane capability for mobile and desktop, built on top of Angular'
	};

	$scope.docs = {
		menu: [
			{title: 'Navbar', body: 'This is the body.'},
			{title: 'Sidebar', body: 'This is the body.'},
			{title: 'Footerbar', body: 'This is the body.'},
			{title: 'Base Card', body: 'This is the body.'},
			{title: 'List Card', body: 'Basic list view that binds to a ngModel attribute'},
			{title: 'File Card', body: 'This is the body.'},
			{title: 'Form Card', body: 'This is the body.'},
			{title: 'Media Card', body: 'This is the body.'},
			{title: 'Chart Card', body: 'This is the body.'},
			{title: 'Summary Card', body: 'This is the body.'},
			{title: 'Table Card', body: 'This is the body.'}

		]
	};


	angular.element(document).ready(function(){
		//activate highlight.js
		hljs.initHighlightingOnLoad();

		//Smooth scroll to element
		$('a').on('click', function(e) {
			console.log(e);
			if (
				location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'')
				&&
				location.hostname == this.hostname) {
				var target = $(this.hash);

				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});


	});


});
app.controller('MainCtrl', function ($scope, $rootScope) {
	$scope.feature = {
		title: 'Angular Bootcards',
		body: '	AngularJS cards-based UI with dual-pane capability for mobile and desktop, built on top of Angular'
	};

});
