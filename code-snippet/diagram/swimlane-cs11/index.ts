


import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
let node: NodeModel = {  
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
                    // customization of lane header
                    header: {
                        annotation: { content: 'Online Consumer' }, width: 30,
                        style: { fontSize: 11,fill: 'red' }
                    },
                     canMove: false,
                },
                ],
                phases: [
                    {
                        id: 'phase1', offset: 170,
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
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized Diagram
diagram.appendTo('#element');
let lane = [{id:"lane1",height:100,canMove: false}];
diagram.addLanes(diagram.nodes[0],lane,1);



