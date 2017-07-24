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

    var todoWidgets = angular.copy($window.boardTemplates.mornings.widgets);
    var widget_id = angular.copy($window.widget_id);
    vm.widgets = [
      todoWidgets,
      [], // grid1 empty
      []  // grid2 empty
    ];

    vm.resetBoard = function () {
      vm.todoWidgets = angular.copy($window.boardTemplates.mornings.widgets);
      vm.inProgressWidgets = [
        { x: 0, y: 0, width: 4, height: 0 }
      ];
      vm.doneWidgets = [];
      $log.log('resetBoard');
    };

    vm.options = {
      //animate: true,
      oneColumnMode: true,
      disableResize: true,
      width: 4,
      cellHeight: 100,
      verticalMargin: 5,
      acceptWidgets: '.grid-stack-item'
    };


    vm.addWidget = function (gridNum) {
      var newWidget = { wid: widget_id++, x: 0, y: 0, width: 4, height: 1, title: 'Your new task' };
      vm.widgets[gridNum].push(newWidget);
    };

    vm.moveWidget = function (gridNum) {
      vm.widgets[gridNum][0].x = 1;
      vm.widgets[gridNum][0].width = 2;
      vm.widgets[gridNum][0].height = 2;
    };

    vm.removeWidget = function (w, gridNum) {
      var index = vm.widgets[gridNum].indexOf(w);
      vm.widgets[gridNum].splice(index, 1);
    };


    vm.onChange = function (event, items) {
      $log.log("onChange event: " + event + " items:" + items);
      //$log.log(event);
      //$log.log(items);
    };

    // DJH
    vm.onAdded = function (event, items, gridNum) {
      $log.log("onAdded event: ", event, " items:", items);

      // TODO dependency on existence of _id, better way to do this?
      if (!items[0]._id) {
        var newItem = items[0];
        newItem.title = angular.copy(newItem.el[0].innerText.trim());

        // remove widget from DOM
        var _grid = items[0]._grid;
        _grid.removeWidget(items[0].el);

        // add to angular model
        var newWidget = {
          wid: widget_id++,
          x: angular.copy(newItem.x),
          y: angular.copy(newItem.y),
          height: angular.copy(newItem.height),
          width: angular.copy(newItem.width),
          title: angular.copy(newItem.title)
        };
        console.log('!!! add to angular model - pushing to widgets:', gridNum, newWidget);
        if (gridNum === 0) {
          vm.widgets[gridNum].unshift(newWidget);
        } else {
          vm.widgets[gridNum].unshift(newWidget);
        }
      }
    };

    vm.onRemoved = function (event, items, gridNum) {
      console.log("onRemoved event: ", event, " items:", items);

      if (!items[0]) {
        debugger;
        return;
      }

      if (!items[0].el) {
        // when gridstack dom element removed
        debugger;
        return;
      }

      if (!items[0].el[0].attributes['data-gs-item-id']) {
        // likely not a gs-item, short circuit
        return;
      }

      var findIndex = function (i, items) {
        return _.findIndex(vm.widgets[i], function (item) {
          return item.wid.toString() === items[0].el[0].attributes['data-gs-item-id'].value;
        });
      };

      if (items[0].el[0].attributes['data-gs-item-id']) {
        // DJH 7/22/17 - this makes no sense - getting events on grid1
        // but item is remove from grid0
        // tested on('removed') from gristack standalone, works as expected
        // see also console.log(items[0]._grid.container.context.id);

        for (var i = 0; i < vm.widgets.length; i++) {
          var index = findIndex(i, items);

          if (index > -1) {
            console.log('!!!! remove from angular - wid from widgets[' + i + ' ]: ', index);
            vm.widgets[i].splice(index, 1);
          }
        }

      }
    };


    vm.onDragStart = function (event, ui) {
      $log.log("onDragStart event: " + event + " ui:" + ui);
    };

    vm.onDragStop = function (event, ui) {
      $log.log("onDragStop event: " + event + " ui:" + ui);
    };

    vm.onResizeStart = function (event, ui) {
      $log.log("onResizeStart event: " + event + " ui:" + ui);
    };

    vm.onResizeStop = function (event, ui) {
      $log.log("onResizeStop event: " + event + " ui:" + ui);
    };

    vm.onItemAdded = function (item) {
      $log.log("onItemAdded item: " + item);
    };

    vm.onItemRemoved = function (item) {
      console.log("onItemRemoved item: ", item);
      //item.el[0].attributes[11].id;
      // console.log(item);
    };

  }
}());
