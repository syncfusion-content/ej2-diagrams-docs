

import {
  Diagram,
  NodeModel,
  UmlClassifierShapeModel
} from "@syncfusion/ej2-diagrams";
let node: NodeModel = {
    id: "Patient",
    //Position of the node
    offsetX: 200,
    offsetY: 200,
    shape: {
      type: "UmlClassifier",
      //Define class object
      class: {
        name: "Patient",
        //Define class attributes
        attributes: [{ name: "accepted", type: "Date" }],
        //Define class methods
        methods: [{ name: "getHistory", type: "getHistory" }]
      },
      classifier: "Class"
    } as UmlClassifierShapeModel
};
//Initializes diagram control
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  //Add node
  nodes: [node]
});
diagram.appendTo("#element");


