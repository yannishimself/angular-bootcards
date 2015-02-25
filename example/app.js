var app = angular.module('exampleApp', ['bootcards', 'ngRoute', 'ngSanitize']);
app.config(['$routeProvider',
	function ($routeProvider) {
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

		.when('/example', {
			templateUrl: 'example.html',
			controller: 'MainCtrl',
			resolve: routeResolver
		})


		.when('/docs', {
			templateUrl: 'docs.html',
			controller: 'DocsCtrl',
			resolve: routeResolver
		}).otherwise({
			redirectTo: '/'
		});
	}]);
app.controller('AppCtrl', function ($scope, $rootScope, $compile) {
	window.App = $rootScope.App = {
		title: 'angular-bootcards.js',
		feature: {
			title: 'Angular Bootcards',
			body: '	AngularJS cards-based UI with dual-pane capability for mobile and desktop, built on top of Angular'
		},
		nav: [
			{title: 'Home', href: '#/home', icon: 'home' },
			{title: 'Documentation', href: '#/docs', icon: 'book' },
			{title: 'Example', href: '#/example', icon: 'info' }
		],
		sidebar: {
			nav: [{
				title: 'Directives',
				href: ''
			}]
		},
		compileMarkup: function(){
			$('.markup').each(function(i, o){
				//compile markup
				var html = $(this).contents();

				// Step 1: parse HTML into DOM element
				var template = angular.element(html);

				// Step 2: compile the template
				var linkFn = $compile(template);

				// Step 3: link the compiled template with the scope.
				//var element = linkFn(scope);
				console.log(o, 'compiled');
			});

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
		$scope.initBootcards();
	};


	$scope.initBootcards = function(){
		bootcards.init({
			offCanvasHideOnMainClick: true,
			offCanvasBackdrop: true,
			enableTabletPortraitMode: true,
			disableRubberBanding: true,
			disableBreakoutSelector: 'a.no-break-out'
		});
	};


	$(document).ready(function () {
		console.log('document ready');

		//activate highlight.js
		hljs.initHighlightingOnLoad();

		$('body').scrollspy({ target: '.navbar-example' })

		$('[data-spy="scroll"]').each(function () {
			var $spy = $(this).scrollspy('refresh')
		});

		$scope.initBootcards();
		prettyPrint();
	});


});


app.controller('DocsCtrl', function ($scope, $location, $anchorScroll, $compile) {
	$scope.feature = {
		title: 'Angular Bootcards',
		body: '	AngularJS cards-based UI with dual-pane capability for mobile and desktop, built on top of Angular'
	};

	$scope.docs = {
		menu: [
			{title: 'Navbar', body: 'The Bootcards Navbar is the main navigation system for desktop browsers.'},
			{title: 'Sliding Sidebar', body: 'The Sliding Sidebar offers complex apps more space navigation items.'},
			{title: 'Footerbar', body: 'The Footer Bar offers usable mobile navigation for simpler apps with a few important navigation items.'},
			{title: 'Base Card', body: 'Base Cards display a list of information separated by dividers.'},
			{title: 'List Card', body: 'Bootcards Lists are used to navigate the entities in your app (e.g. Contacts, Files, Messages, etc). Basic list view that binds to a ngModel attribute'},
			{title: 'File Card', body: 'File Cards are intended to show information and functions for non-media file formats (PDFs, Word documents, spreadsheets, etc).'},
			{
				title: 'Form Card',
				body: 'Form Cards are used for user input in your app.',
				markup: '<bootcards-form></bootcards-form>',
				properties: {
					'ngModel': 'The model for the form data',
					'formSchema': 'The ng-form schema'
				}
			},
			{title: 'Media Card', body: 'Media Cards hold larger images or videos.'},
			{title: 'Chart Card', body: 'Chart cards contain charts powered by Morris.js.'},
			{title: 'Summary Card', body: 'Summary cards can be used on dashboards, etc to highlight important pieces of data in your app.'},
			{title: 'Table Card', body: 'Table Cards display tabular data.'}

		]
	};

	$scope.viewDoc = function(target){
		$location.hash(target);
		$anchorScroll();
	};



	angular.element(document).ready(function(){

		//activate highlight.js
		hljs.initHighlightingOnLoad();




	});


});




app.controller('MainCtrl', function ($scope, $rootScope) {
	$scope.feature = {
		title: 'Angular Bootcards',
		body: '	AngularJS cards-based UI with dual-pane capability for mobile and desktop, built on top of Angular'
	};

});

/*
 * Initialize Bootcards.
 *
 * Parameters:
 * - offCanvasBackdrop (boolean): show a backdrop when the offcanvas is shown
 * - offCanvasHideOnMainClick (boolean): hide the offcanvas menu on clicking outside the off canvas
 * - enableTabletPortraitMode (boolean): enable single pane mode for tablets in portraitmode
 * - disableRubberBanding (boolean): disable the iOS rubber banding effect
 * - disableBreakoutSelector (boolean) : for iOS apps that are added to the home screen:
 jQuery selector to target links for which a fix should be added to not
 allow those links to break out of fullscreen mode.
 */
angular.element(document).ready(function(){
	bootcards.init( {
		offCanvasBackdrop : true,
		offCanvasHideOnMainClick : true,
		enableTabletPortraitMode : true,
		disableRubberBanding : true
	});
});
