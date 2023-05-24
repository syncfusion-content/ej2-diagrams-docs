


import {
    Diagram,
    DiagramContextMenu,
    ConnectorModel,
    NodeModel
} from '@syncfusion/ej2-diagrams';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { createElement } from '@syncfusion/ej2-base';
Diagram.Inject(DiagramContextMenu);
//Initializes the connector
let connector: ConnectorModel = {
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    style: {
        strokeColor : '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth :  2,
    },
    targetDecorator: {
        style: {
            fill : '#6BA5D7',
            strokeColor :   '#6BA5D7'
        }
    }
};
//Initializes the nodes
let node: NodeModel = {
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
    annotations: [{
        id: 'label1',
        content: 'Rectangle1',
        offset: {
            x: 0.5,
            y: 0.5
        },
        style: {
            color: 'white'
        }
    }]
};
let node2: NodeModel = {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
    annotations: [{
        id: 'label2',
        content: 'Rectangle2',
        offset: {
            x: 0.5,
            y: 0.5
        },
        style: {
            color: 'white'
        }
    }]
};
//Initializes the Diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '350px',
    nodes: [node, node2],
    connectors: [connector],
    contextMenuSettings: {
        //Enables the context menu
        show: true,
        items: [{
           text: 'Cut', id: 'Cut', target: '.e-diagramcontent',
            iconCss: 'e-Cut'
        },
        {
            text: 'Copy', id: 'Copy', target: '.e-diagramcontent',
            iconCss: 'e-Copy'
        }],
        // Hides the default context menu items
        showCustomMenuOnly: true,
    },
     contextMenuBeforeItemRender: (args: MenuEventArgs) => {
        // To render template in li.
        let shortCutSpan: HTMLElement = createElement('span');
        let text: string = args.item.text;
        let shortCutText: string = text === 'Cut' ? 'Ctrl + S' : (text === 'Copy' ?
            'Ctrl + U' : 'Ctrl + Shift + I');
        shortCutSpan.textContent = shortCutText;
        args.element.appendChild(shortCutSpan);
        shortCutSpan.setAttribute('class', 'shortcut');
    }
}, '#element');



