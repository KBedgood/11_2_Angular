(() => {
    'use strict';

    angular
    .module('lecture', ['ui.router'])
    .directive('singleBlog', function (API) {
	  return {
	    restrict: 'E',
	    templateUrl:"partials/changeColor.html",
	    link: function (vm, element, attrs) { 


	      let blog = API.getSingleBlog(attrs.id);

	      blog.then(function(taco){
	      	vm.blog = taco.data;
	      })

	      element.on('click', function () {
	        element[0].style = 'color: red';
	      });


	    }
	  };
	})
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
	    .state('category', {
	      url: '/category',
	      views: {
	      'content': {
	        templateUrl: 'partials/category.html',
	        controller: 'CategoryController',
	        controllerAs: 'controller'
	      },
	      'sidebar': {
	        templateUrl: 'partials/sidebar.html',
	      }
    		}
	    })
	    .state('category_id', {
	      url: '/category/:id',
	      views: {
	      'content': {
	        templateUrl: 'partials/category_list.html',
	        controller: 'CategoryController',
	        controllerAs: 'controller'
	      },
	      'sidebar': {
	        templateUrl: 'partials/sidebar.html',
	      }
    		}
	    })
	    .state('list', {
	      url: '/list',
	      views: {
	      'content': {
	        templateUrl: 'partials/list.html',
	        controller: 'CategoryController',
	        controllerAs: 'controller'
	      },
	      'sidebar': {
	        templateUrl: 'partials/sidebar.html',
	      }
    		}
	    })
	    .state('single_item', {
	      url: '/item/:taco',
	      views: {
	      'content': {
	        templateUrl: 'partials/single_item.html',
	        controller: 'SingleItemController',
	        controllerAs: 'controller'
	      },
	      'sidebar': {
	        templateUrl: 'partials/sidebar.html',
	      }
    		}
	    })
	}

  
})();

