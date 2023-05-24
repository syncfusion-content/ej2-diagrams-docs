

import {
    Diagram, NodeModel, ConnectorModel
} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [{
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{
        content: 'Start'
    }],
}];
let connectors: ConnectorModel[] = [{
    id: 'connector1', sourcePoint: { x: 300, y: 100 }, targetPoint: { x: 450, y: 200 },
    style: {
        strokeColor: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    }
}];
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: nodes,
    connectors: connectors,
    // set the autoScroll
    scrollSettings:{canAutoScroll: true, scrollLimit: 'Infinity'},
    getNodeDefaults: (node: NodeModel) => {
        node.height =  100;
        node.width =  100;
        node.style.fill =  '#6BA5D7';
        node.style.strokeColor =  'white';
        return  node;
    }
});
diagram.appendTo('#element');



