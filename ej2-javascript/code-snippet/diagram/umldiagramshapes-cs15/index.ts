

import {
  Diagram,
  NodeModel,
} from "@syncfusion/ej2-diagrams";


let node: NodeModel = {
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
//Initializes diagram control
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: [node]
});
diagram.appendTo("#element");

let addButton:any = document.getElementById('addmember');

if (addButton) {
  addButton.addEventListener('click', function() {
      if (diagram.selectedItems.nodes[0]) {
        let node:any = diagram.selectedItems.nodes[0];
        let members:any = { name: 'Checking new', style: { color: "red", }};
        diagram.addChildToUmlNode(node, members, "Member");
    }
  });
};