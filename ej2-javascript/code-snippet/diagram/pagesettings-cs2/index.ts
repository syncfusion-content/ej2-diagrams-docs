

import {Diagram} from '@syncfusion/ej2-diagrams';
let diagram: Diagram;
diagram = new Diagram({
    width: '1000px',
    height: '500px',
    pageSettings: {
        orientation: 'Landscape',
        showPageBreaks: true,
        // Defines the background Image source
        background: {
            source: 'https://www.w3schools.com/images/w3schools_green.jpg',
            // Defines the scale values for the background image
            scale:'Meet',
            // Defines the align values for the background image
            align:'XMinYMin'
        },
        width: 300,
        height: 300,
        margin: {
            left: 10,
            top: 10,
            bottom: 10
        },
    }
});
diagram.appendTo('#element');



