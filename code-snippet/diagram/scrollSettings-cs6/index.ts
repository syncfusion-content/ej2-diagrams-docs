


import {
    Diagram, NodeModel, ConnectorModel
} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [{
    id: 'Start',
    width: 100, height: 100,
    offsetX: 350, offsetY: 350,
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    }
}];

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: nodes,
    scrollSettings: {
        canAutoScroll: true,
      //Sets the scroll padding
        padding: { right: 50, bottom: 50 }
        }
    },
});

diagram.appendTo('#element');



