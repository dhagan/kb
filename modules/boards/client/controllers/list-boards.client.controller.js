(function () {
  'use strict';

  angular
    .module('boards')
    .controller('BoardsListController', BoardsListController);

  BoardsListController.$inject = ['$scope', '$log', 'BoardsService'];

  function BoardsListController($scope, $log, BoardsService) {
    var vm = this;

    vm.boards = BoardsService.query();

      vm.widgets = [{ x:0, y:0, width:1, height:1 }, { x:0, y:0, width:3, height:1 }];

      vm.options = {
          cellHeight: 200,
          verticalMargin: 10
      };

      vm.addWidget = function() {
          var newWidget = { x:0, y:0, width:1, height:1 };
          vm.widgets.push(newWidget);
          $log.log("addWidget");
      };

      vm.removeWidget = function(w) {
          var index = vm.widgets.indexOf(w);
          vm.widgets.splice(index, 1);
          $log.log("removeWidget");
      };

      vm.onChange = function(event, items) {
          $log.log("onChange event: "+event+" items:"+items);
      };

      vm.onDragStart = function(event, ui) {
          $log.log("onDragStart event: "+event+" ui:"+ui);
      };

      vm.onDragStop = function(event, ui) {
          $log.log("onDragStop event: "+event+" ui:"+ui);
      };

      vm.onResizeStart = function(event, ui) {
          $log.log("onResizeStart event: "+event+" ui:"+ui);
      };

      vm.onResizeStop = function(event, ui) {
          $log.log("onResizeStop event: "+event+" ui:"+ui);
      };

      vm.onItemAdded = function(item) {
          $log.log("onItemAdded item: "+item);
      };

      vm.onItemRemoved = function(item) {
          $log.log("onItemRemoved item: "+item);
      };

  }
}());
