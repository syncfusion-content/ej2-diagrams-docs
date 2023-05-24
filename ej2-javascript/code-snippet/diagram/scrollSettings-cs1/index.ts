

import {
    Diagram,BasicShapeModel,NodeModel,DiagramTools
} from '@syncfusion/ej2-diagrams';
//Sets scroll status
let diagram: Diagram = new Diagram({
    width: '100%', height: 700,scrollSettings: {
    horizontalOffset: 100,verticalOffset: 50
    }
});
diagram.appendTo('#element');



