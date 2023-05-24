var node = {
    // Id of the node
    id: "Node",
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    shape: {
        type: 'HTML'
        }
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node], nodeTemplate: '#nodetemplate'
    }, '#element');

