/**
 * Tooltip sample
 */

var node = {
    id: 'node',
        offsetX: 400,
        offsetY: 300,
        style: {
            fill: '#26A0DA',
        },
        shape: {
            type: 'UmlClassifier',
            interfaceShape: {
                name: "Bank Account",
                property: [{
                        name: "owner",
                        type: "String[*]", style: {}
                    },
                    {
                        name: "balance",
                        type: "Dollars"
                    }],
                methods: [{
                        name: "deposit", style: {},
                        parameters: [{
                                name: "amount",
                                type: "Dollars",
                                style: {}
                            }],
                    }]
            },
            classifier: 'Interface'
        },
};
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: [node],
}, '#element');

