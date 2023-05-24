var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    shape: {
        type: 'Bpmn', shape: 'Activity', activity: {
            activity: 'SubProcess',
            subProcess: {
                collapsed: true, type: 'Transition',
                event: [ { event: 'Intermediate', trigger: 'Cancel', offset: { x: 0.25, y: 1 } },
                { event: 'Intermediate', trigger: 'Error', offset: { x: 0.25, y: 1 } }, ]
            }
        },
    },
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');


