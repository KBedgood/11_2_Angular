(() => {

    angular
    .module('lecture')
    .controller('HeaderController', function(API) {

        let vm = this;

        API.saveName('Jake');


        let apiCall = API.getBlogs();

        apiCall.then(function(blogs) {
            vm.blogs = blogs.data.blogs;
            alert(API.getName());
        })
    })

})()
