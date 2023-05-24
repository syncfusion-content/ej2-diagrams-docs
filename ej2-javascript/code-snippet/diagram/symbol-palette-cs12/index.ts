


import { NodeModel, SymbolPalette } from '@syncfusion/ej2-diagrams';
//Initialize basic shapes palette
export function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [
        { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' }, style: { strokeWidth: 2 } },
        { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeWidth: 2 } },
    ];

    return basicShapes;
}
//Initializes the symbol palette
let symbolPalette: SymbolPalette = new SymbolPalette ({
    palettes:  [
        {
            id: 'swimlaneShapes', expanded: true,
            title: 'Swimlane Shapes',
            symbols: [
                {
                    id: 'stackCanvas1',
                    shape: {
                        type: 'SwimLane',lanes: [
                            {
                                id: 'lane1',
                                style: { fill: '#f5f5f5'},height: 60, width: 150,
                                header:{ width: 50, height: 50, style: {fill:'#C7D4DF'} },
                            }
                        ],
                        orientation: 'Horizontal', isLane: true
                    },
                    height: 60,
                    width: 140,
                    style: { fill: '#f5f5f5'},
                    offsetX: 70,
                    offsetY: 30,
                }
            ]
        },
        { id: 'basic', expanded: true, symbols: getBasicShapes(), title: 'Basic Shapes' }],
    symbolHeight: 50, symbolWidth: 50,
    symbolPreview: { width: 100, height: 100},
    expandMode: 'Multiple',
    height: '100%',
    width: '100%',
    paletteExpanding: function (args) {
        if(args.palette.id === 'basic') {
        // Basic shapes panel does not collapse
        args.cancel = true;
        } else {
        // Swimlane shapes panel collapse and expand
        args.cancel = false;
        }
    }
});
symbolPalette.appendTo('#element');


