


import { Diagram, NodeModel, ConnectorModel, BpmnShape, BpmnSubProcessModel, BpmnShapeModel,BpmnDiagrams, BpmnActivityModel, BpmnFlowModel, BpmnGatewayModel } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);
// A node is created and stored in nodes array.
let connector: ConnectorModel = {
    // Position of the node
    sourcePoint: {
        x: 100,
        y: 200
    },
    targetPoint: {
        x: 300,
        y: 200
    },
    type: 'Orthogonal',
    //Sets type as Bpmn, flow as Sequence, and sequence as Conditional
    shape: {
        type: 'Bpmn',
        flow: 'Sequence',
        sequence: 'Conditional'
    },
};
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    connectors: [connector]
});
// render initialized diagram
diagram.appendTo('#element');


