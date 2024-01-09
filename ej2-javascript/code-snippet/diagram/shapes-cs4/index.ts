


import {
    Diagram,
    NodeModel,
    NodeConstraints
} from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //sets the type of the shape as Image
        shape: {
            type: 'Image',
            source: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAAAsVBMVEX///8rNXz2kh4aJ3YeKnejpsGMkLAyPIIoM3u7vc8UI3UjLnlrcZ9fZZfCxNYKHHLc3efQ0d9LUoz1igD+8eP3n0IRIXRXXZJzeaQ5QoT95M32jQD1iAD2kBT96tj83MD+9/D70Kn4r2gAAGv5u4H+8+j6wYz6yp/3mTH71bP3pVI/R4b6xpf4s3H3okr4qVr2lib7zqX4sWwAEW/x8fXk5Ox9gqqsr8aRlbUAC26oq8Veod7kAAAEZ0lEQVR4nO2d4VbiMBBGQ8VV0BW0gC5toQooKgIusq77/g+2srhtgXaSaelJwvnu//HMPaWTzCSgEAAAAAAAQCeh7gRKZ+L3dKdQMn3fcfu6kyiVnus4jj/RnUaJhIGzwn3RnUh5jNeKjjcNdadSEjPP+SKYt3QnUwrDyPDT0evqTqcEXl0niXurO6G90/WdTfx73SntmZbrbOPNdCe1V0In2FF0vHaoO6890k4xXBWdw9nN3XlphqsHeSi7ufvdFzEqOoexm3vcLqZJDmI3181+hv8+q1PdCRZmlPUeRkVnPtKdYzHCeWox3XC0fDc3lRquXshH3WkW4EX2MV1j8W5uQpeaxHO8051qTsjlYhNLd3M91We4IggsbJNDlUqTcLRwNydfLrbwH3SnzGTGNfwsOkPZH62dnfCo3ESx3yvM2OoFnYzicrGJ9yRT7JzyqJ7HimfM2Aat+MApNTHBmN7N1eoVHmdJRWZsnVTsqy8XW450m2yOImu52ILczRmjmDqqUYZqk41RHBcxJHdzpijO8hTTJF7bcMVhUUPHfTVb8TZvMY0fYvYOwAjFnck+35AYk5ug2Cr8KQ3G2YYmKBZbLtaKodmKdwXW/DX0lQ4DFAs7+nTTaIKiuC9UblzJAYARipyBzQ6ebPxvhqLoenlLTiBrF01RFCP2SOPLcC4zNEZRiKdcq6MnP9wwR1G85CisvsLRhkGK4oFddHyVgw2TFEWf+RxdpWMNoxRFL+AUHe+niqFhiiIcqxedILMJNlqR0f4HTmipohgqvpCu6pGNeYqKIwBX+STcQEWl3ZyvfqvRREXRkhZWYlRjh6IIp3TRYd1oNFNR0iaToxprFMUku+gE5KjGHkWiTXZ59zXNVRS9jMIqGdXYpChGqUc5Lvd032TF1DaZs1zYoLjbJstHNbYpbrfJvOXCDsWtNtkLD1Bxo01mLhe2KIqw/b/oKI1qbFSM2mS1UY2dius2WXFUY6niqk1WHdXYqvjZJquOaqxVFL3c35WyRjE/UDwIxUGDx+J7FHu9YMYOajoU35pcllHskh37pkMRAAAAADFvl1yaUWyTHRsv/V02uRVrgw6PjQ0cMzaxgXO5+Lm/qqhrG86+8aZ8tA9FKEIRilCEIhShCEUoQhGKUIQiFKEIRShCEYpQhCIUoQhFKEIRilCEIhShCEUoQhGKUIQiFKFokmKjwA/cV/P/wH3AJf991IvnKya/otgbbuhzrNjmIvmhfgAAAACANc1vXI6j2Hd27GUU+5sdu0xLX4WLRZVH/SqKPe8wYxfvUezJETP2o5mWvpJih9tpXEexN+xOI/5a2I9TZmwDilDkAEUSKJJAEYosoEgCRRIoQpEFFEmgSAJFKLKAIgkUSaAIRRZQJIEiCRShyAKKJFAkgSIUWUCRBIokUIQiCyiSQJEEilBkAUUSKJJAkVL8OOLRSdxHbTBjE/dRK3Vm7OAyLX0Vlsdc4jRr7Nj4Sfxhx+IfOAEAAAAAAAAAKMhf3Xcl0U5GidEAAAAASUVORK5CYII=',
            scale: 'None'
        },
        //Customizes the appearances such as text, font, fill, and stroke.
        style: {
            fill: 'none'
        }
    };
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');


