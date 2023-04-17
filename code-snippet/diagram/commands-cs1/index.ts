


import {
    Diagram,
    ConnectorModel,
    NodeModel
} from '@syncfusion/ej2-diagrams';
//Initializes the connector
let connector: ConnectorModel = {
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    style: {
        strokeColor : '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth :  2,
    },
    targetDecorator: {
        style: {
            fill : '#6BA5D7',
            strokeColor :   '#6BA5D7'
        }
    }
};
//Initializes the nodes
let node: NodeModel = {
    id: 'node1',
    width: 90,
    height: 60,
    offsetX: 100,
    offsetY: 100,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
};
let node2: NodeModel = {
    id: 'node2',
    width: 90,
    height: 60,
    offsetX: 240,
    offsetY: 100,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
};
//Initializes the Diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '350px',
    nodes: [node, node2],
    connectors: [connector]
});
diagram.appendTo('#element');
diagram.select([diagram.nodes[0], diagram.nodes[1], diagram.connectors[0]]);
//copies the selected nodes
diagram.copy();
//pastes the copied objects
diagram.paste(diagram.copy() as(NodeModel | ConnectorModel)[]);


