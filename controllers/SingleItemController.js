(() => {

    angular
    .module('lecture')
    .controller('SingleItemController', function(API,$state,$stateParams) {

        let vm = this;

        let id = $stateParams.taco;


        API.getSingleItem(id);




    })

})()
