(function () {
  'use strict';

  angular
    .module('boards')
    .controller('BoardsListController', BoardsListController);

  BoardsListController.$inject = ['$scope', '$log', 'BoardsService'];

  function BoardsListController($scope, $log, BoardsService) {
    var vm = this;

    vm.boards = BoardsService.query();

      $scope.widgets = [{ x:0, y:0, width:1, height:1 }, { x:0, y:0, width:3, height:1 }];

      $scope.options = {
          cellHeight: 200,
          verticalMargin: 10
      };

      $scope.addWidget = function() {
          var newWidget = { x:0, y:0, width:1, height:1 };
          $scope.widgets.push(newWidget);
      };

      $scope.removeWidget = function(w) {
          var index = $scope.widgets.indexOf(w);
          $scope.widgets.splice(index, 1);
      };

      $scope.onChange = function(event, items) {
          $log.log("onChange event: "+event+" items:"+items);
      };

      $scope.onDragStart = function(event, ui) {
          $log.log("onDragStart event: "+event+" ui:"+ui);
      };

      $scope.onDragStop = function(event, ui) {
          $log.log("onDragStop event: "+event+" ui:"+ui);
      };

      $scope.onResizeStart = function(event, ui) {
          $log.log("onResizeStart event: "+event+" ui:"+ui);
      };

      $scope.onResizeStop = function(event, ui) {
          $log.log("onResizeStop event: "+event+" ui:"+ui);
      };

      $scope.onItemAdded = function(item) {
          $log.log("onItemAdded item: "+item);
      };

      $scope.onItemRemoved = function(item) {
          $log.log("onItemRemoved item: "+item);
      };

  }
}());
