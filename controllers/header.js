(() => {

    angular
    .module('lecture')
    .controller('HeaderController', function(API,$state) {

        let vm = this;


        vm.goSomewhere = function(){
            $state.go('taco');
        }



        let apiCall = API.getBlogs();

        apiCall.then(function(blogs) {
            vm.blogs = blogs.data.blogs;
        })


    })

})()
