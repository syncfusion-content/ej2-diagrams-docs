/**
 * Tooltip sample
 */
var diagram;

var connector = {
    id: "connector",
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 },
    type: "Straight",
    shape: {
      type: "UmlClassifier",
      relationship: "Dependency",
      multiplicity: {
        type: "OneToMany",
        source: {
          optional: true,
          lowerBounds: 89,
          upperBounds: 67
        },
        target: {
          optional: true,
          lowerBounds: 78,
          upperBounds: 90
        }
      }
    }
};
diagram = new ej.diagrams.Diagram({
    width: '650px',
    height: '350px',
    connectors: [connector],
}, '#element');

