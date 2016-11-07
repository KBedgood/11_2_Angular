(() => {

    angular
    .module('lecture')
    .controller('SingleblogController', function(API,$state,$stateParams) {

        let vm = this;


        let id = $stateParams.id;


        let singleBlog = API.getSingleBlog(id);

        singleBlog.then(function(blog){
            vm.blog = blog.data;
        });




    })

})()
