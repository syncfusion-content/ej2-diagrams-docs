/**
 * Default symbol palette sample
 */
//Initialize the basicshapes for the symbol palatte
var basicShapes = [{
        id: 'Rectangle',
        shape: {
            type: 'Basic',
            shape: 'Rectangle'
        },
        tooltip: {
            content: 'Rectangle Tooltip',
        },
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
        },
        tooltip: {
            content: 'Hexagon Tooltip',
        },
        //customized content of the Tooltip is enabled by Node Tooltip Cosnstraints
        cosntraints: NodeConstraints.Default | NodeConstraints.Tooltip
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
    symbolPreview: {
        height: 100,
        width: 100,
        offset: {
            x: 0.5,
            y: 0.5
        }
    },
    symbolMargin: {
        left: 12,
        right: 12,
        top: 12,
        bottom: 12
    },
    getSymbolInfo: (symbol) => {
        return {
            fit: true
        };
    }
});
palette.appendTo('#element');

