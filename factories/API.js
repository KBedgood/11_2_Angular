(() => {

  angular
  .module('lecture')
  .factory('API', function($http) {

      const getBlogs = function() {
          var call = $http({
              method: 'GET',
              headers: { 'X_CSRF_TOKEN': 'N5JGY3RWWTW51XZTYVSN' },
              url: 'https://tiyagencyweek.herokuapp.com/blogs'
          });
          return call;
      }

      const saveName = function(name) {
          localStorage.setItem('name', name);
      }

      const getName = function() {
          let name = localStorage.getItem('name');
          return name;
      }

      return {
          getBlogs,
          saveName,
          getName
      }

  });

})();
