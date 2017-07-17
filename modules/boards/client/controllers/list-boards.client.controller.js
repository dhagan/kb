(function () {
  'use strict';

  angular
    .module('boards')
    .controller('BoardsListController', BoardsListController);

  BoardsListController.$inject = ['$window', '$rootScope', '$scope', '$log', 'BoardsService'];

  function BoardsListController($window, $rootScope, $scope, $log, BoardsService) {
    var vm = this;

    $rootScope.navTitle = 'Morning Routine';
    vm.boards = BoardsService.query();

    vm.todoWidgets = angular.copy($window.boardTemplates.mornings.widgets);
    vm.inProgressWidgets = [
      { x: 0, y: 0, width: 0, height: 0 }
    ];
    //vm.inProgressWidgets = [];
    vm.doneWidgets = [];

    vm.options = {
      //animate: true,
      disableResize: true,
      width: 4,
      cellHeight: 100,
      verticalMargin: 5,
      acceptWidgets: '.grid-stack-item'
    };

    vm.addWidget = function () {
      var newWidget = { x: 0, y: 0, width: 4, height: 1, title: 'Your new task' };
      vm.todoWidgets.push(newWidget);
      $log.log('addWidget');
    };

    vm.addInProgressWidget = function () {
      var newWidget = { x: 0, y: 0, width: 4, height: 1, title: 'Your new task' };
      vm.inProgressWidgets.push(newWidget);
      $log.log('addWidget');
    };

    vm.resetBoard = function () {
      vm.todoWidgets = angular.copy($window.boardTemplates.mornings.widgets);
      vm.inProgressWidgets = [
        { x: 0, y: 0, width: 4, height: 0 }
      ];
      vm.doneWidgets = [];
      $log.log('resetBoard');
    };

    vm.removeInProgressWidget = function (w) {
      var index = 0;
      if (w) {
        index = vm.inProgressWidgets.indexOf(w);
      }
      vm.inProgressWidgets.splice(index, 1);
      $log.log('removeWidget');
    };

    vm.removeWidget = function (w) {
      var index = 0;
      if (w) {
        index = vm.todoWidgets.indexOf(w);
      }
      vm.todoWidgets.splice(index, 1);
      $log.log('removeWidget');
    };

    vm.widgetMoveNext = function (w) {
      var index = vm.widgets.indexOf(w);
      vm.todoWidgets.splice(index, 1);
      $log.log('widgetMoveNext');
    };

    vm.onChange = function (event, items) {
      $log.log('onChange event: ' + event + ' items:' + items);
      console.log(event, items);
    };

    vm.onDragStart = function (event, ui) {
      $log.log('onDragStart event: ' + event + ' ui:' + ui);
      console.log(event, ui);
    };

    vm.onDragStop = function (event, ui) {
      $log.log('onDragStop event: ' + event + ' ui:' + ui);
      console.log(event, ui);
    };

    vm.onResizeStart = function (event, ui) {
      $log.log('onResizeStart event: ' + event + ' ui:' + ui);
      console.log(event, ui);
    };

    vm.onResizeStop = function (event, ui) {
      $log.log('onResizeStop event: ' + event + ' ui:' + ui);
      console.log(event, ui);
    };

    vm.onItemAdded = function (item) {
      $log.log('onItemAdded item: ' + item);
      console.log( item);
    };

    vm.onItemRemoved = function (item) {
      $log.log('onItemRemoved item: ' + item);
      console.log(item);
    };

  }
}());
