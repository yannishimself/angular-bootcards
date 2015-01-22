angular.module('bootcards').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('bootcards-card/bootcards-card.tmpl.html',
    "<div class=\"panel panel-default\">\n" +
    "\t<div class=\"panel-heading clearfix\">\n" +
    "\t\t<h3 class=\"panel-title pull-left\">Card Title</h3>\n" +
    "\t\t<a class=\"btn btn-default pull-right\" href=\"#\">\n" +
    "\t\t\t<i class=\"fa fa-check\"></i>\n" +
    "\t\t\tButton\n" +
    "\t\t</a>\n" +
    "\t</div>\n" +
    "\t<div class=\"panel-body\">\n" +
    "\t\t<p>Card content...</p>\n" +
    "\t</div>\n" +
    "\t<div class=\"panel-footer\">\n" +
    "\t\t<small>Card footer...</small>\n" +
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
