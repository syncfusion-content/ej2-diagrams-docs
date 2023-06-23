


import {
    Diagram, ConnectorModel, Node, DataBinding,
    LayoutType, Rect, HorizontalAlignment, VerticalAlignment, NodeModel, TextModel, MindMap, NodeConstraints, ConnectorConstraints
} from  '@syncfusion/ej2-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';
Diagram.Inject(DataBinding, MindMap);
//Initializes data source
let data: object[] = [
    { id: 1, Label: "Creativity", fill: "red", branch: "Root" },
    { id: 3, Label: "Brainstorming", parentId: 1, branch: "Right", fill: "red" },
    { id: 4, Label: "Complementing", parentId: 1, branch: "Left", fill: "red" },
    { id: 22, Label: "Sessions", parentId: 3, branch: "subRight", fill: "red" },
    { id: 23, Label: "Generate", parentId: 3, branch: "subRight", fill: "red" },
    { id: 25, Label: "Local", parentId: 22, branch: "subRight" },
    { id: 26, Label: "Remote", parentId: 22, branch: "subRight" },
    { id: 27, Label: "Individual", parentId: 22, branch: "subRight" },
    { id: 28, Label: "Teams", parentId: 22, branch: "subRight" },
    { id: 29, Label: "Ideas", parentId: 23, branch: "subRight" },
    { id: 30, Label: "Engagement", parentId: 23, branch: "subRight" },
    { id: 31, Label: "Product", parentId: 29, branch: "subRight" },
    { id: 32, Label: "Service", parentId: 29, branch: "subRight" },
    { id: 33, Label: "Business Direction", parentId: 29, branch: "subRight" },
    { id: 34, Label: "Empowering", parentId: 30, branch: "subRight" },
    { id: 35, Label: "Ownership", parentId: 30, branch: "subRight" },
    { id: 50, Label: "Information", parentId: 4, branch: "subLeft" },
    { id: 51, Label: "Expectations", parentId: 4, branch: "subLeft" },
    { id: 53, Label: "Competitors", parentId: 50, branch: "subLeft" },
    { id: 54, Label: "Products", parentId: 50, branch: "subLeft" },
    { id: 55, Label: "Features", parentId: 50, branch: "subLeft" },
    { id: 56, Label: "Other Data", parentId: 50, branch: "subLeft" },
    { id: 59, Label: "Organization", parentId: 51, branch: "subLeft" },
    { id: 60, Label: "Customer", parentId: 51, branch: "subLeft" },
    { id: 61, Label: "Staff", parentId: 51, branch: "subLeft" },
    { id: 62, Label: "Stakeholders", parentId: 51, branch: "subLeft" }
];
let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
// Initializes Diagram
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '550px',
    //Uses layout to auto-arrange nodes on the diagram page
    layout: {
        //Sets layout type
        type: 'MindMap',
        orientation : 'Horizontal'
    },//Configures data source for diagram
    dataSourceSettings: {
        id: 'id',
        parentId: 'parentId',
        dataManager: items,
        root: String(1)
    },//Sets the default properties for nodes and connectors
    getNodeDefaults: (obj: Node) => {
        obj.constraints = NodeConstraints.Default & ~NodeConstraints.Drag;
        let empInfo: EmployeeInfo = obj.data as EmployeeInfo;
        if (empInfo.branch === 'Left' || empInfo.branch === 'Right'
            || empInfo.branch === 'Root') {
            obj.shape = { type: 'Basic', shape: 'Ellipse' }; obj.borderColor = 'black'; /* tslint:disable:no-string-literal */
            obj.style = {
                fill: empInfo.branch === 'Root' ? '#E74C3C' : '#F39C12', strokeColor: 'none',
                strokeWidth: 2
            };
            obj.annotations = [{
                content: empInfo.Label, margin: { left: 10, right: 10, top: 10, bottom: 10 },
                style: { color: 'white' }
            }];
        } else {
            let color: string; /* tslint:disable:no-string-literal */
            if (empInfo.branch === 'Right' || empInfo.branch === 'subRight') {
                color = '#8E44AD';
            } else {
                color = '#3498DB';
            }
            obj.shape = { type: 'Basic', shape: 'Rectangle' };
            obj.style = { fill: color, strokeWidth: 0 };
            obj.minWidth = 100;
            obj.height = 4;
            obj.annotations = [{
                content: empInfo.Label, offset: { x: .5, y: 0 }, verticalAlignment: 'Bottom'
            }];
            (obj.shape as TextModel).margin = { left: 0, right: 0, top: 0, bottom: 0 };
        }
        return obj;
},
    getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
        connector.type = 'Bezier';
        connector.targetDecorator = { shape: 'None' };
        connector.constraints &= ~ConnectorConstraints.Select;
        let sourceNode: Node = diagram.getObject(connector.sourceID) as Node;
        let targetNode: Node = diagram.getObject(connector.targetID) as Node;
        let nodeInfo: EmployeeInfo = (targetNode.data as EmployeeInfo);
        if (nodeInfo.branch === 'Right' || nodeInfo.branch === 'subRight') {
            connector.sourcePortID = sourceNode.ports[0].id;
            connector.targetPortID = targetNode.ports[1].id;
            connector.style = { strokeWidth: 5, strokeColor: '#8E44AD' };
        } else if (nodeInfo.branch === 'Left' || nodeInfo.branch === 'subLeft') {
            connector.sourcePortID = sourceNode.ports[1].id;
            connector.targetPortID = targetNode.ports[0].id;
            connector.style = { strokeWidth: 5, strokeColor: '#3498DB' };
        }
        return connector;
    }
});

diagram.appendTo('#element');



