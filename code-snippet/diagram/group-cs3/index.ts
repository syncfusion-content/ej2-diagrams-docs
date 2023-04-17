


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
}, ];
let group: NodeModel = {
    id: 'group2',
    children: ['rectangle1', 'rectangle2']
};
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    getNodeDefaults: (node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
    nodes: nodes,
});
diagram.appendTo('#element');
// Add the group into the diagram
diagram.add(group);



