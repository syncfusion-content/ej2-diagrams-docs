


import {
    Diagram,
    NodeModel,
    DiagramConstraints,
    NodeConstraints,
    PointPortModel,
    PortConstraints,
    PortVisibility
} from '@syncfusion/ej2-diagrams';
import {
    NodeAnimationSettings
} from '@syncfusion/ej2-navigations';
let port: PointPortModel[] = [{
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
];
//Initializes the Diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '350px',
    constraints: DiagramConstraints.Default | DiagramConstraints.Tooltip,
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
        port:port,
    }]
}, '#element');



