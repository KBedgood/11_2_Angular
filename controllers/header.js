(() => {

    angular
    .module('lecture')
    .controller('HeaderController', function(API,$state) {

        let vm = this;

        let blogs = API.getBlogs();

        blogs.then(function(data){
        	vm.blogs = data.data.blogs;
        })


    })

})()
