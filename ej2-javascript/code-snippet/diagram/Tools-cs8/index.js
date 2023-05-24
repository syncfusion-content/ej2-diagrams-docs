var diagram = new ej.diagrams.Diagram({
    width: 700, height: 700, created: () => {
        var connectors = {
            id: 'connector1',
            type: 'Straight',
           segments: [{ type: "Straight" }]
        }
        diagram.drawingObject = connectors;
        diagram.tool = ej.diagrams.DiagramTools.ContinuousDraw;
        elementDraw : elementDraw;
        diagram.dataBind();

    }
});
diagram.appendTo('#element');
function elementDraw(args){
    alert("Event triggered");
}

