/**
 * UmlActivity sample
 */
var diagram;

var node1 = {
    id: 'node1',
    offsetX: 150,
    offsetY: 150, style: {
        fill: '#26A0DA',
    }, borderColor: 'white',
    shape: {
        type: 'UmlClassifier',
        enumerationShape: {
            name: 'AccountType',
            members: [
                {
                    name: 'Checking Account', 
                },
            ]
        },
        classifier: 'Enumeration'
    },
};
diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    nodes: [node1],
}, '#element');

document.getElementById('addmember').onclick = function () {
    if (diagram.selectedItems.nodes[0]) {
        var node = diagram.selectedItems.nodes[0];
        var members = { name: 'Checking new', style: { color: "red", }, isSeparator: true };
        diagram.addChildToUmlNode(node, members, "Member");
    }
};

