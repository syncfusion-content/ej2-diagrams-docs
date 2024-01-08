/**
 * UmlActivity sample
 */
var diagram;

var node1 = {
    id: 'node1',
    offsetX: 150,
    offsetY: 150, 
    style: {
        fill: '#26A0DA',
    },
    shape: {
        type: 'UmlClassifier',
        classShape: {
            attributes: [
                { name: 'accepted', type: 'Date', },
            ],
            methods: [{ name: 'getHistory', style: {}, parameters: [{ name: 'Date', style: {} }], type: 'History' }],
            name: 'Patient'
        },
        classifier: 'Class'
    },
};
diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    nodes: [node1],
}, '#element');

document.getElementById('addattribute').onclick = function () {
    if (diagram.selectedItems.nodes[0]) {
        var node = diagram.selectedItems.nodes[0];
        var attributes = { name: 'accepted', type: 'Date', style: { color: "red", } };
        diagram.addChildToUmlNode(node, attributes, "Attribute");
    }
};

