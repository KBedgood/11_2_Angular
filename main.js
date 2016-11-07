(() => {
    'use strict';

    angular
    .module('lecture', ['ui.router'])
    .config(appConfig);


    appConfig.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];

	function appConfig($stateProvider, $urlRouterProvider,$locationProvider) {

		$urlRouterProvider.otherwise('/404');


		$stateProvider
	    .state('home', {
	      url: '/',
	      views: {
	      'content': {
	        templateUrl: 'partials/home.html',
	        controller: 'HeaderController',
	        controllerAs: 'controller'
	      },
	      'sidebar': {
	        templateUrl: 'partials/sidebar.html',
	      }
    	}
	    })
	    .state('404', {
	      url: '/404',
	      templateUrl: 'partials/404.html',
	    })
	    .state('blogDetail', {
		    url: '/:id',
		    views: {
		      'content': {
		        templateUrl: 'partials/blogdetail.html',
		        controller: 'SingleblogController',
		        controllerAs: 'controller'
		      },
		      'sidebar': {
		        templateUrl: 'partials/sidebar-single.html',
		      }
			}
		})
	}

  
})();

