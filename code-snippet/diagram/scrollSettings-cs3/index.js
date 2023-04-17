var nodes = [{
    id: 'node1', width: 100, height: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Start' }]
}];

var connectors = [{
    id: 'connector1', sourcePoint: { x: 300, y: 100 }, targetPoint: { x: 500, y: 200 },
    style: {
        strokeColor: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
}];

var diagram = new ej.diagrams.Diagram({
        width: '100%',
    height: '600px',
    nodes: nodes,
    connectors: connectors,
    // set the scroll settings
    scrollSettings:{canAutoScroll: true, scrollLimit: 'Infinity'},
    getNodeDefaults: (node) => {
        node.height =  100;
        node.width =  100;
        node.style.fill =  '#6BA5D7';
        node.style.strokeColor =  'white';
        return  node;
    }
},'#element');

