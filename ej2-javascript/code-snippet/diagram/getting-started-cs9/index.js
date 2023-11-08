
var nodes = [
    { id: 'Start', offsetY: 50, annotations: [{ content: 'Start' }], shape: { type: 'Flow', shape: 'Terminator' } },
    { id: 'Init', offsetY: 140, annotations: [{ content: 'var i = 0;' }], shape: { type: 'Flow', shape: 'Process' } },
    { id: 'Condition', offsetY: 230, annotations: [{ content: 'i < 10?' }], shape: { type: 'Flow', shape: 'Decision' } },
    { id: 'Print', offsetY: 320, annotations: [{ content: 'print(\'Hello!!\');' }], shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
    { id: 'Increment', offsetY: 410, annotations: [{ content: 'i++;' }], shape: { type: 'Flow', shape: 'Process' } },
    { id: 'End', offsetY: 500, annotations: [{ content: 'End' }], shape: { type: 'Flow', shape: 'Terminator' } },
];

var connector = [
    { id: 'connector1', sourceID: 'Start', targetID: 'Init' },
    { id: 'connector2', sourceID: 'Init', targetID: 'Condition' },
    { id: 'connector3', sourceID: 'Condition', targetID: 'Print', annotations: [{ content: 'Yes' }] },
    {
        id: 'connector4', sourceID: 'Condition', targetID: 'End', annotations: [{ content: 'No' }],
        type: 'Orthogonal',
        segments: [
            { type: 'Orthogonal', length: 50, direction: "Right" },
            { type: 'Orthogonal', length: 300, direction: "Bottom" }
        ]
    },
    { id: 'connector5', sourceID: 'Print', targetID: 'Increment' },
    {
        id: 'connector6', sourceID: 'Increment', targetID: 'Condition',
        type: 'Orthogonal',
        segments: [
            { type: 'Orthogonal', length: 50, direction: "Left" },
            { type: 'Orthogonal', length: 200, direction: "Top" }
        ]
    }
];

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes, connectors: connector,
    getNodeDefaults: function (node) {
        node.height = 50;
        node.width = 140;
        node.offsetX = 300;
        return node;
    },
    getConnectorDefaults: function (obj) {
        obj.type = "Orthogonal";
        obj.targetDecorator = { shape: 'Arrow', width: 10, height: 10 };
        return obj;
    },
    created: function () { diagram.fitToPage(); }
    }, '#element');

