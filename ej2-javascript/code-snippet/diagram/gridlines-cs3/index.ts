


import {Diagram,SnapConstraints,SnapSettingsModel,Snapping} from '@syncfusion/ej2-diagrams';
Diagram.Inject(Snapping);
let snapSettings: SnapSettingsModel = {
    constraints: SnapConstraints.ShowLines,
    horizontalGridlines: {
        // Sets the lineIntervals of Gridlines
        lineIntervals: [1.25, 14, 0.25, 15, 0.25, 15, 0.25, 15, 0.25, 15],
        lineColor: 'blue',
        lineDashArray: '2 2'
    },
    verticalGridlines: {
        // Sets the lineIntervals of Gridlines
        lineIntervals: [1.25, 14, 0.25, 15, 0.25, 15, 0.25, 15, 0.25, 15],
        lineColor: 'blue',
        lineDashArray: '2 2'
    }
};
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '500px',
    snapSettings: snapSettings
});
diagram.appendTo('#element');



