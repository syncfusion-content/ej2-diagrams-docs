/**
 * Tooltip sample
 */
var diagram;

var nodes = [
    {
      id: "Patient",
      shape: {
        type: "UmlClassifier",
        classShape: {
          name: "Patient",
          attributes: [          
            createProperty("allergies", "String[*]")
          ],
          methods: [createMethods("getHistory", "History")]
        },
        classifier: "Class"
      },
      offsetX: 200,
      offsetY: 250
    }    
  ];
function createProperty(name, type) {
  return { name: name, type: type };
}
function createMethods(name, type) {
  return { name: name, type: type };
}
diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
}, '#element');

