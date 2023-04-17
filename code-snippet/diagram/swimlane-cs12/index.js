var node = {
    shape: {
                type: 'SwimLane',
                orientation: 'Horizontal',
                //Intialize header to swimlane
                header: {
                    annotation: { content: 'ONLINE PURCHASE STATUS', style: { fill: '#111111' } },
                    height: 50, style: { fontSize: 11 },
                },
                lanes: [
                    {
                        id: 'stackCanvas1',
                        height: 100,
                        header: {
                            annotation: { content: 'CUSTOMER' }, width: 50,
                            style: { fontSize: 11 }
                        },
                          children: [
                            {
                                id: 'Order',
                                margin: { left: 60, top: 20 },
                                height: 40, width: 100
                            }
                        ],
                    },

                ],
                phases: [
                 {
                     id: 'phase1', offset: 120,
                     header: { annotation: { content: 'Phase' } }
                 },{
                    id: 'phase2', offset: 200,
                    header: { annotation: { content: 'Phase' } }
                },
                 ],
                phaseSize: 20,
            },
            offsetX: 300, offsetY: 200,
         height: 200,
         width: 350  
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
});
diagram.appendTo('#element');
    diagram.nodes[0].shape.header.style.fill = 'red'
diagram.dataBind();

