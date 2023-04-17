/**
 * Tooltip sample
 */

var node = {
    id: "UmlDiagram",
    //Set node size
    width: 100,
    height: 100,
    //position the node
    offsetX: 200,
    offsetY: 200,
    shape: {
      type: "UmlActivity",
      //Define UmlActivity shape
      shape: "Action"
    }
};
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: [node]
}, '#element');

