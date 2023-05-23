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
    }
];

var connector = {
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    style: {
        strokeColor : '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth :  2,
        targetDecorator: {
            style: {
                fill : '#6BA5D7',
                strokeColor :   '#6BA5D7'
            }
        }
    }
};

var diagram = new ej.diagrams.Diagram({
    width: '650px',
    height: '350px',
    nodes: [nodes],
    connectors: [connector]
}, '#element');


diagram.select([diagram.nodes[0], diagram.nodes[1], diagram.connectors[0]]);
diagram.copy();
diagram.paste(diagram.copy());

