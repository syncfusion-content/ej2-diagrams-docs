/**
 * Tooltip sample
 */
var diagram;

var node = {
    id: "node1",
    width: 100,
    height: 100,
    annotations: [{
        id: 'label',
        content: 'Rectangle',
        offset: {
            x: 0.5,
            y: 0.5
        },
        style: {
            color: 'white'
        }
    }],
    offsetX: 200,
    offsetY: 200,
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7'
    },
    constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
};
diagram = new ej.diagrams.Diagram({
    width: '650px',
    height: '350px',
    constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.Tooltip,
    nodes: [node],

    //Defines mouse over tooltip
    tooltip: {
        content: 'Nodes',
        position: 'TopLeft'
    }
}, '#element');

