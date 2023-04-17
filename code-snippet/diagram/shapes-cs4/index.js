var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    shape: { type: 'Image', source: 'http://www.syncfusion.com/content/images/nuget/sync_logo_icon.png',  scale: 'None' },
    //Customizes the appearances such as text, font, fill, and stroke.
    style: { fill: 'none' }
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');

