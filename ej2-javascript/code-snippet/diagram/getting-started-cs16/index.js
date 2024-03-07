 ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
 
   var data = [
	{Name: "CEO", Role: "CEO" },
    { Name: "Project Manager1", ReportingPerson: "CEO", Role: "Manager" },
    { Name: "Project Manager2", ReportingPerson: "CEO", Role: "Manager" },
    { Name: "Engineer1", ReportingPerson: "Project Manager1", Role: "Lead" },
    { Name: "Engineer2", ReportingPerson: "Project Manager2", Role: "Lead" }
];

    
var items = new ej.data.DataManager(data, new ej.data.Query().take(7));
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '350px',
    mode: 'SVG', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
     dataSourceSettings: {
            id: 'Name', parentId: 'ReportingPerson', dataManager: items
        },
       layout: {
            type: 'OrganizationalChart',
            margin: { left: 10, top: 10 },
            horizontalSpacing: 50,
            verticalSpacing: 50,
            orientation: 'TopToBottom',
            getLayoutInfo: function (node, tree) {
                if (!tree.hasSubTree) {
                    tree.orientation = 'Vertical';
                    tree.type = 'Alternate';
                }
            }
        },
            getNodeDefaults: function (obj, diagram) {
            obj.height = 30;
            obj.width = 70;
            obj.shape = { type: 'Basic', shape: 'Rectangle' };
            obj.annotations = [{
                    id: "label1",
                    content: (obj.data).Name,
                    style: {
                        fontSize: 11,
                        bold: true,
                        fontFamily: "Segoe UI",
                        color: "white"
                    }
                }];
            return obj;
        },
        getConnectorDefaults: function (connector, diagram) {
            connector.targetDecorator.shape = 'Arrow';
            connector.type = 'Orthogonal';
            return connector;
        },
        
});
diagram.appendTo('#element');

