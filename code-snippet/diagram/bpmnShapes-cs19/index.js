var connector = {
    // Position of the node
    sourcePoint: { x: 100, y: 200 }, targetPoint: { x: 300, y: 200 }, type: 'Orthogonal',
    shape: {
type: 'Bpmn',
flow: 'Sequence',
sequence: 'Conditional'
}, 
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', connectors: [connector]
    }, '#element');

