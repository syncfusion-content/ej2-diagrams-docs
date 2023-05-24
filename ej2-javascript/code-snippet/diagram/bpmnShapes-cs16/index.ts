


import { Diagram, NodeModel, BpmnShape, BpmnSubProcessModel, BpmnShapeModel,BpmnDiagrams, BpmnActivityModel, BpmnFlowModel, BpmnGatewayModel } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);
// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as DataObject
    shape: {
        type: 'Bpmn',
        shape: 'DataObject',
        //Sets collection as true and type as Input
        dataObject: {
            collection: true,
            type: 'Input'
        },
        //Sets the id, angle, length and text for the annotation
        annotations: [{
            id: 'left',
            angle: 45,
            length: 150,
            text: 'Left',
        }]
    }
    as BpmnShapeModel,
};
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');



