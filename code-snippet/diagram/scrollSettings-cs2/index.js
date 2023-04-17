
var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '700px',scrollSettings: {
    horizontalOffset:100,verticalOffset:50
    }
},'#element');

//Updates scroll settings
diagram.scrollSettings.horizontalOffset=200;
diagram.scrollSettings.verticalOffset=30
diagram.dataBind();

