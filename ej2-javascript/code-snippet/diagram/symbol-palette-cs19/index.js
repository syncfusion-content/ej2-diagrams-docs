//Initialize the flowshapes for the symbol palette
function getUmlShapes() {
    var flowShapes = [
        {
            id: 'class',
            style: {
                fill: '#26A0DA',
            },
            borderColor: 'white',
            shape: {
                type: 'UmlClassifier',
                classShape: {
                    attributes: [
                        { name: 'accepted', type: 'Date', style: { color: "red", fontFamily: "Arial", textDecoration: 'Underline',  italic: true },isSeparator: true },
                        { name: 'sickness', type: 'History' },
                        { name: 'prescription', type: 'String[*]' },
                        { name: 'allergies', type: 'String[*]' }
                    ],
                    methods: [{ name: 'getHistory', style: {}, parameters: [{ name: 'Date', style: {} }], type: 'History' }],
                    name: 'Patient'
                },
                classifier: 'Class'
            },
        },
        {
            id: 'Interface',
            style: {
                fill: '#26A0DA',
            }, borderColor: 'white',
            shape: {
                type: 'UmlClassifier',
                interfaceShape: {
                    name: "Bank Account",
                    attributes: [{
                            name: "owner",
                            type: "String[*]", style: {}
                        },
                        {
                            name: "balance",
                            type: "Dollars"
                        }],
                    methods: [{
                            name: "deposit", style: {},
                            parameters: [{
                                    name: "amount",
                                    type: "Dollars",
                                    style: {}
                                }],
                        }]
                },
                classifier: 'Interface'
            },
        },
        {
            id: 'Enumeration',
            style: {
                fill: '#26A0DA',
            }, borderColor: 'white',
            shape: {
                type: 'UmlClassifier',
                enumerationShape: {
                    name: 'AccountType',
                    members: [
                        {
                            name: 'Checking Account', style: {}
                        },
                        {
                            name: 'Savings Account'
                        },
                        {
                            name: 'Credit Account'
                        }
                    ]
                },
                classifier: 'Enumeration'
            },
        },
    ];
    return flowShapes;
}
function setPaletteNodeDefaults(node) {
    node.width = 100;
    node.height = 100;
}
var palette = new ej.diagrams.SymbolPalette({
    expandMode: 'Multiple',
    palettes: [
        { id: 'UML', expanded: true, symbols: getUmlShapes(), title: 'UMLClass Nodes' },
    ],
    width: '100%', height: '100%', symbolHeight: 90, symbolWidth: 90,
    getNodeDefaults: setPaletteNodeDefaults,
    symbolMargin: { left: 12, right: 12, top: 12, bottom: 12 },
    //Defines the symbol description for the symbols in the palette
    getSymbolInfo: function (symbol) {
        return { fit: true, description: { text: symbol.id, }};
    }
});
palette.appendTo('#element');
