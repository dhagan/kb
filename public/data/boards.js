var widget_id = 1;
var boardTemplates =
  {
    mornings: {
      widgets: [
        {wid: widget_id++, x: 0, y: 0, width: 4, height: 1, title: 'Make your bed'},
        {wid: widget_id++, x: 0, y: 0, width: 4, height: 1, title: 'Pack your lunch - make it yummy'},
        {wid: widget_id++, x: 0, y: 0, width: 4, height: 1, title: 'Brush your teeth'},
        {wid: widget_id++, x: 0, y: 0, width: 4, height: 1, title: 'Get Dressed'},
        {wid: widget_id++, x: 0, y: 0, width: 4, height: 1, title: 'Silly - bake a cake'}
      ]
    }
  };


/**

 board: {
        title: "morning board",
        cards: [
            {
                description: 'Make your bed',
                swimlane: 1,
                icon: "fa-knife-fork"
            }
        ],
        style: {
            background: "green"
        },
        rewards: {
            // on the fly?
        }
    }
 }
 */
