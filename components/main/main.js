angular.module('app').component('main', {
    templateUrl: '/components/main/main.html',
    controllerAs: 'mainCtrl',
    bindings: {
        name: '<'
    },
    controller: function(mainSrvc) {
        this.animals = mainSrvc.animals;
    }
})