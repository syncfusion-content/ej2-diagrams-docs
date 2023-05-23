

import {
    Diagram,
    ConnectorModel,
    NodeModel
} from '@syncfusion/ej2-diagrams';
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
let node3: NodeModel = {
    id: 'node3',
    width: 90,
    height: 60,
    offsetX: 160,
    offsetY: 90,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
};

//Initializes the diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '350px',
    nodes: [node, node2, node3]
});
let selArray: (NodeModel)[] = [];
diagram.appendTo('#element');
selArray.push(diagram.nodes[2]);
//Selects the nodes
diagram.select(selArray);
//Brings to front
diagram.bringToFront();


