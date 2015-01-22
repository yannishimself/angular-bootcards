/**
 * angular-bootcards
 * @version v0.0.1 - 2015-01-21
 * @link https://github.com/jonniespratley/angular-bootcards
 * @author Jonnie Spratley <jonniespratley@me.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';
angular.module('bootcards', []).directive('myDirective', function () {
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
});angular.module('bootcards').directive('bootcardsCard', function () {
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
});angular.module('bootcards').directive('bootcardsList', function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: { ngModel: '=' },
    link: function (scope, element, attrs) {
      console.log('card linked');
    },
    templateUrl: 'bootcards-list/bootcards-list.tmpl.html'
  };
});
angular.module('bootcards').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('bootcards-card/bootcards-card.tmpl.html',
    "<div class=\"panel panel-default\">\n" +
    "\t<div class=\"panel-heading clearfix\">\n" +
    "\t\t<h3 class=\"panel-title pull-left\" ng-bind=\"title\"></h3>\n" +
    "\t\t<!--a class=\"btn btn-default pull-right\" href=\"#\">\n" +
    "\t\t\t<i class=\"fa fa-check\"></i>\n" +
    "\t\t\tButton\n" +
    "\t\t</a-->\n" +
    "\t</div>\n" +
    "\t<div class=\"panel-body\" ng-transclude>\n" +
    "\n" +
    "\t</div>\n" +
    "\t<div class=\"panel-footer\">\n" +
    "\t\t<small>Footer</small>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('bootcards-chart/bootcards-chart.tmpl.html',
    ""
  );


  $templateCache.put('bootcards-file/bootcards-file.tmpl.html',
    ""
  );


  $templateCache.put('bootcards-form/bootcards-form.tmpl.html',
    ""
  );


  $templateCache.put('bootcards-list/bootcards-list.tmpl.html',
    "<div class=\"bootcards-list\">\n" +
    "\t<div class=\"panel panel-default\">\n" +
    "\t\t<div class=\"list-group\">\n" +
    "\n" +
    "\t\t\t<a class=\"list-group-item\" href=\"#\" data-index=\"{{$index}}\" ng-repeat=\"item in ngModel\">\n" +
    "\t\t\t\t<img src=\"http://placehold.it/100\" ng-src=\"{{item.image}}\" class=\"img-rounded pull-left\"/>\n" +
    "\t\t\t\t<h4 class=\"list-group-item-heading\">{{item.heading}}</h4>\n" +
    "\n" +
    "\t\t\t\t<p class=\"list-group-item-text\">{{item.text}}</p>\n" +
    "\t\t\t</a>\n" +
    "\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('bootcards-media/bootcards-media.tmpl.html',
    ""
  );


  $templateCache.put('bootcards-summary/bootcards-summary.tmpl.html',
    ""
  );


  $templateCache.put('bootcards-table/bootcards-table.tmpl.html',
    ""
  );

}]);
