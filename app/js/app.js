'use strict';

/* App Module */

var appmodule = angular.module("appmodule",['appmoduleroutes','AppController','oc.lazyLoad']);

appmodule.config(function($ocLazyLoadProvider) {
	$ocLazyLoadProvider.config({
      //debug: true,
      //events: true,
      modules: [{
        name: 'lazymod1',
        files: [
          'js/lazymodule1.js'
        ]
      },{
      	name: 'lazymod2',
        files: [
          'js/lazymodule2.js'
        ]

      }]
    });
	});

var appmoduleroutes = angular.module("appmoduleroutes",['ngRoute','oc.lazyLoad']);
appmoduleroutes.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/inbox', {
        templateUrl: 'partials/inbox.html',
       controller: 'lazyController1',
        resolve: { 
			loadModule: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('lazymod1');
        }]
    }
      }).
      when('/contacts', {
        templateUrl: 'partials/contacts.html',
        controller: 'lazyController2',
        resolve:{
          loadModule:['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('lazymod2');
        }]

        }
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

