ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
// A node is created and stored in nodes array.
var data = [
    {
        'Id': 'parent', 'Name': 'Maria Anders', 'Designation': 'Managing Director',
        'ImageUrl': '../content/images/orgchart/Clayton.png', 'IsExpand': 'true', 'RatingColor': '#C34444'
    },
    {
        'Id': 1, 'Name': 'Ana Trujillo', 'Designation': 'Project Manager',
        'ImageUrl': '../content/images/orgchart/Thomas.PNG', 'IsExpand': 'false',
        'RatingColor': '#68C2DE', 'ReportingPerson': 'parent'
    },
    {
        'Id': 2, 'Name': 'Anto Moreno', 'Designation': 'Project Lead',
        'ImageUrl': '../content/images/orgchart/image53.png', 'IsExpand': 'false',
        'RatingColor': '#93B85A', 'ReportingPerson': 'parent'
    },
    {
        'Id': 3, 'Name': 'Thomas Hardy', 'Designation': 'Senior S/w Engg',
        'ImageUrl': '../content/images/orgchart/image57.png', 'IsExpand': 'false',
        'RatingColor': '#68C2DE', 'ReportingPerson': 1
    },
    {
        'Id': 4, 'Name': 'Christina kaff', 'Designation': 'S/w Engg',
        'ImageUrl': '../content/images/orgchart/Robin.png', 'IsExpand': 'false',
        'RatingColor': '#93B85A', 'ReportingPerson': 3
    }]
var items = new ej.data.DataManager(data , new ej.data.Query().take(7));
var overview;
var diagram = new ej.diagrams.Diagram({
    snapSettings: { constraints: 0 },
    layout: {
        type: 'OrganizationalChart', margin: { top: 20 },
        getLayoutInfo: (node, tree) => {
            if (!tree.hasSubTree) {
                tree.orientation = 'Vertical';
                tree.type = 'Alternate';
            }
        }
    },
    dataSourceSettings: {
        id: 'Id', parentId: 'ReportingPerson', dataManager: items
    },

    getNodeDefaults: (obj) => {
        obj.height = 50;
        obj.backgroundColor = 'lightgrey';
        obj.style = { fill: 'transparent', strokeWidth: 2 };
        return obj;
    }, getConnectorDefaults: (connector) => {
        connector.targetDecorator.shape = 'None';
        connector.type = 'Orthogonal';
        return connector;
    },

    setNodeTemplate: (obj) => {
        var content = new ej.diagrams.StackPanel();
        content.id = obj.id + '_outerstack';
        content.style.strokeColor = 'darkgreen';
        content.orientation = 'Horizontal';
        content.padding = { left: 5, right: 10, top: 5, bottom: 5 };
        var image = new ej.diagrams.ImageElement();
        image.width = 50;
        image.height = 50;
        image.style.strokeColor = 'none';
        image.source = './employee.PNG';
        image.id = obj.id + '_pic';
        var innerStack = new ej.diagrams.StackPanel();
        innerStack.style.strokeColor = 'none';
        innerStack.margin = { left: 5, right: 0, top: 0, bottom: 0 };
        innerStack.id = obj.id + '_innerstack';

        var text = new ej.diagrams.TextElement();
        text.content = obj.data['Name'];

        text.style.color = 'blue';
        text.style.strokeColor = 'none';
        text.style.fill = 'none';
        text.id = obj.id + '_text1';

        var desigText = new ej.diagrams.TextElement();
        desigText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
        desigText.content = obj.data['Designation'];
        desigText.style.color = 'blue';
        desigText.style.strokeColor = 'none';
        desigText.style.fill = 'none';
        desigText.style.textWrapping = 'Wrap';
        desigText.id = obj.id + '_desig';
        innerStack.children = [text, desigText];

        content.children = [image, innerStack];

        return content;
    }
});
diagram.appendTo('#element');
overview = new ej.diagrams.Overview({
    sourceID: 'element'
});
 overview.appendTo('#overview');

