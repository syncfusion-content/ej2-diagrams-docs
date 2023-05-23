var nodes = [{
   id: 'Start',
    visible: true,
    backgroundColor: 'black',
    offset: 0, side: 'Right', margin: { top: 0, bottom: 0, left: 25, right: 0 },
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    }
}];

var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    nodes: nodes,
    scrollSettings: {
        canAutoScroll: true,
      //Sets the scroll padding
        padding: { right: 50, bottom: 50 }
        }
    },'#element');

