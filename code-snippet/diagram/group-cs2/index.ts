


import {Diagram,NodeModel,} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [{
        id: "rectangle1",
        offsetX: 100,
        offsetY: 100,
        width: 100,
        height: 100,
        annotations: [{
            content: 'rectangle1'
        }]
    }, {
        id: "rectangle2",
        offsetX: 200,
        offsetY: 200,
        width: 100,
        height: 100,
        annotations: [{
            content: 'rectangle2'
        }]
    },
    {
        id: 'group',
        children: ['rectangle1', 'rectangle2']
    },
];
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: nodes,
    getNodeDefaults: (node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
});
diagram.appendTo('#element');
diagram.selectAll();
// Ungroup the selected group into nodes
diagram.unGroup();



