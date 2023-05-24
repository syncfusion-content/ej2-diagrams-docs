/**
 * UmlActivity sample
 */
var diagram;

var connector = {
     id: 'connector',
     type: 'Straight',
     //Define connector start and end points
     sourcePoint: { x: 100, y: 700 },
     targetPoint: { x: 200, y: 800 },
     shape: { type: 'UmlActivity', flow: 'Exception' }
};
diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    connectors: [connector],
}, '#element');

