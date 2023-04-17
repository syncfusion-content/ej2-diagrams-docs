var nodes = [{
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [{
        id: 'label1',
        content: 'Start'
    }],
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    }
}];

var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    nodes: nodes,
    scrollSettings:{
        canAutoScroll: true,
    //Sets the scroll limit
    scrollLimit: 'infinity',
    //Sets the scrollable Area
    scrollableArea: {
            x: 0,
            y: 0,
            width: 500,
            height: 500
        }

    },
    getNodeDefaults: (node) => {
        node.height =  100;
        node.width =  100;
        node.style.fill =  '#6BA5D7';
        node.style.strokeColor =  'white';
        return  node;
    }
},'#element');


