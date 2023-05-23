/**
 * Default symbol palette sample
 */
//Initialize the basicshapes for the symbol palatte
var basicShapes = [{
        id: 'Rectangle',
        shape: {
            type: 'Basic',
            shape: 'Rectangle'
        }
    },
    {
        id: 'Ellipse',
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'Hexagon',
        shape: {
            type: 'Basic',
            shape: 'Hexagon'
        }
    }
];
//Initializes the symbol palette
var palette = new ej.diagrams.SymbolPalette({
    expandMode: 'Multiple',
    palettes: [{
        id: 'basic',
        expanded: true,
        symbols: basicShapes,
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic'
    }],
    symbolHeight: 80,
    symbolWidth: 80,
    getSymbolInfo: (symbol) => {
        if (symbol['text'] !== undefined) {
            return {
                width: 75,
                height: 40,
                description: {
                    text: symbol['text'],
                    overflow: 'Wrap'
                }
            };
        }
        return {
            width: 75,
            height: 40,
            description: {
                text: symbol.shape['shape']
            }
        };
    }
});
palette.appendTo('#element');

