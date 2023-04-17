


import { Diagram, NodeModel, NodeConstraints } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [{
    //Id of the node
    id: "Node",
    //Position of the node
    offsetX: 100,
    offsetY: 100,
    //Size of the node
    width: 100,
    height: 100,
    //sets the type of the shape as HTML
    shape: {
        type: 'HTML'
    }
}
];
//initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: nodes,
    nodeTemplate: "#nodetemplate"
});
//render initialized diagram
diagram.appendTo('#element');


