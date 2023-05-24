


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
    //Sets type of the connector as Orthogonal
    type: 'Orthogonal',
    //Sets type as Bpmn, shflowape as Association and association as BiDirectional
    shape: {
        type: 'Bpmn',
        flow: 'Association',
        association: 'BiDirectional'
    },
};
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add Connectors
    connectors: [connector]
});
// render initialized diagram
diagram.appendTo('#element');



