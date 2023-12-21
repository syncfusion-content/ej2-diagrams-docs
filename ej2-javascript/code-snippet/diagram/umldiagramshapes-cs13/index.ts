import {
  Diagram,
  NodeModel,
} from "@syncfusion/ej2-diagrams";


let node: NodeModel = {
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
//Initializes diagram control
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: [node]
});
diagram.appendTo("#element");

let addButton:any = document.getElementById('addmethod');

if (addButton) {
    addButton.addEventListener('click', function() {
      if (diagram.selectedItems.nodes[0]) {
        let node:any = diagram.selectedItems.nodes[0];
        let methods:any = { name: 'getHistory', style: { color: "red", }, parameters: [{ name: 'Date', style: {} }], type: 'History' };
        diagram.addChildToUmlNode(node, methods, 'Method');
    }
    });
}