var nodes = [{
        id: 'node1',
        width: 90,
        height: 60,
        offsetX: 100,
        offsetY: 100,
        style: {
            fill:   '#6BA5D7',
            strokeColor: 'white',
            strokeWidth: 1
        },
    },
    {
        id: 'node2',
        width: 90,
        height: 60,
        offsetX: 240,
        offsetY: 100,
        style: {
            fill:   '#6BA5D7',
            strokeColor: 'white',
            strokeWidth: 1
        },
    },
    {
        id: 'node3',
        width: 90,
        height: 60,
        offsetX: 160,
        offsetY: 90,
        style: {
            fill:   '#6BA5D7',
            strokeColor: 'white',
            strokeWidth: 1
        },

    }
];
var diagram = new ej.diagrams.Diagram({
    width: '650px',
    height: '350px',
    nodes: [nodes]
}, '#element');
let selArray = [];
selArray.push(diagram.nodes[2]);
diagram.select(selArray);
//Sends back the selected elements
diagram.sendToBack();

