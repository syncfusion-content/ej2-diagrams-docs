


import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

let node: NodeModel = {
    id: 'node1', width: 150, height: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1' }]
};
var node2: NodeModel = {
    id: 'node2', width: 80, height: 130, offsetX: 200, offsetY: 200, annotations: [{ content: 'Node2' }]
};
var group: NodeModel = {
    id: 'group1', children: ['node1', 'node2']
};
var node3: NodeModel = {
    id: 'node3', width: 100, height: 100, offsetX: 300, offsetY: 300, annotations: [{ content: 'Node3' }]
};

let diagram: Diagram = new Diagram({
    width: '100%',
    height: 900,
    nodes: [node, node2, node3, group],
    getNodeDefaults: (node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    }
});
diagram.appendTo('#element');

let addButton: any = document.getElementById('addChild');
if (addButton) {
  addButton.addEventListener('click', function () {
    //To Add child to specifc group at Runtime
    diagram.addChildToGroup(group, 'node3');
  });
}

let removeButton: any = document.getElementById('removeChild');
if (removeButton) {
  removeButton.addEventListener('click', function () {
    //To remove the specific children from group at runtime
    diagram.removeChildFromGroup(group, 'node3');
  });
}