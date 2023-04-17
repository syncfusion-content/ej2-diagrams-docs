

import {
    Diagram,ConnectorModel,DiagramTools
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
    width: '100%', height: 700, created: () => {
        //JSON to create a polyline
        let connector: ConnectorModel = { id: 'connector1', type: 'Polyline'};
        diagram.drawingObject = connector;
        //To draw an object once, activate draw once
        diagram.tool = DiagramTools.DrawOnce;
        diagram.dataBind();
    }
});
diagram.appendTo('#element');



