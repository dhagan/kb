(function () {
  'use strict';

  angular
    .module('boards')
    .controller('BoardsListController', BoardsListController);

  BoardsListController.$inject = ['$rootScope', '$scope', '$log', 'BoardsService'];

  function BoardsListController($rootScope, $scope, $log, BoardsService) {
    var vm = this;

    $rootScope.navTitle = 'Morning Routine';
    vm.boards = BoardsService.query();

    vm.widgets = [
      { x: 0, y: 0, width: 4, height: 1, title: 'Make your bed' },
      { x: 0, y: 0, width: 4, height: 1, title: 'Pack your lunch - makee it yummy' }
    ];

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
      vm.widgets.push(newWidget);
      $log.log('addWidget');
    };

    vm.removeWidget = function (w) {
      var index = vm.widgets.indexOf(w);
      vm.widgets.splice(index, 1);
      $log.log('removeWidget');
    };

    vm.widgetMoveNext = function (w) {
      var index = vm.widgets.indexOf(w);
      vm.widgets.splice(index, 1);
      $log.log('widgetMoveNext');
    };

    vm.onChange = function (event, items) {
      $log.log('onChange event: ' + event + ' items:' + items);
    };

    vm.onDragStart = function (event, ui) {
      $log.log('onDragStart event: ' + event + ' ui:' + ui);
    };

    vm.onDragStop = function (event, ui) {
      $log.log('onDragStop event: ' + event + ' ui:' + ui);
    };

    vm.onResizeStart = function (event, ui) {
      $log.log('onResizeStart event: ' + event + ' ui:' + ui);
    };

    vm.onResizeStop = function (event, ui) {
      $log.log('onResizeStop event: ' + event + ' ui:' + ui);
    };

    vm.onItemAdded = function (item) {
      $log.log('onItemAdded item: ' + item);
    };

    vm.onItemRemoved = function (item) {
      $log.log('onItemRemoved item: ' + item);
    };

  }
}());
