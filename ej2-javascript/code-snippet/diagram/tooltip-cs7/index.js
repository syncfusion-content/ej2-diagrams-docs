/**
 * Tooltip sample
 */
var diagram;
diagram = new ej.diagrams.Diagram({
    width: '650px',
    height: '350px',
    //Defines nodes
    nodes: [{
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
        //define Ports
        port: [{
            id: 'port1',
            offset: {
                x: 0.5,
                y: 0
            },
            style:{
                fill:'#FFFFFF',
            },
            visibility: PortVisibility.Visible,
            tooltip:{
                content:'Port Tooltip',
                position:"TopLeft",
            },
            constraints: PortConstraints.Default | PortConstraints.ToolTip 
        } 
        ]
    }]
}, '#element');

