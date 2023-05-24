var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', 
        rulerSettings: {
            showRulers: true, horizontalRuler:{interval:8, segmentWidth:100, thickness:35, tickAlignment:"LeftOrTop"}, verticalRuler:{interval:10, segmentWidth:150, thickness:35, tickAlignment:"RightOrBottom"}
        },
});
diagram.appendTo('#element');

