/**
 * Tooltip sample
 */
var diagram;

var node = {
    id: 'node',
        offsetX: 300,
        offsetY: 200,
        shape: {
            type: 'UmlClassifier',
            enumerationShape: {
                name: 'AccountType',
                members: [
                    {
                        name: 'Checking Account', style: {}
                    },
                    {
                        name: 'Savings Account'
                    },
                    {
                        name: 'Credit Account'
                    }
                ]
            },
            classifier: 'Enumeration'
        },
};
diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: [node],
}, '#element');

