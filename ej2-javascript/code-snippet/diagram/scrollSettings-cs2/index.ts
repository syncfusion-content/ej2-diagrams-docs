

import {
    Diagram,BasicShapeModel,NodeModel,DiagramTools
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
    width: '100%', height: 700
});
diagram.appendTo('#element');

//Updates scroll settings
diagram.scrollSettings.horizontalOffset=200;
diagram.scrollSettings.verticalOffset=30
diagram.dataBind();



