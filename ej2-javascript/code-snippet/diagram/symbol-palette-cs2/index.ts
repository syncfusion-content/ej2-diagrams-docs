


import {
    Diagram,
    NodeModel,
    SymbolPalette,
    SymbolInfo,
    Node
} from '@syncfusion/ej2-diagrams';
//Initialize the basicshapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [{
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
    return basicShapes;
}
//Initializes the symbol palette
let palette: SymbolPalette = new SymbolPalette({
    expandMode: 'Multiple',
    palettes: [{
        id: 'basic',
        expanded: true,
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic'
    }],
    symbolHeight: 80,
    symbolWidth: 80,
    enableAnimation: false,
    //Sets the size, appearance and description of a symbol
    getSymbolInfo: (symbol: Node | Connector): SymbolInfo => {
        if (symbol['text'] !== undefined) {
            return {
                width: 75,
                height: 40,
                //Add or remove the text for symbol palette item.
                description: {
                    //Defines the symbol description
                    text: symbol['text'],
                    //Defines how to handle the text when its size exceeds the given symbol size
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


