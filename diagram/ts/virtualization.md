---
layout: post
title: Virtualization in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Virtualization in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Virtualization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in ##Platform_Name## Diagram control

## Virtualization in Diagram

Virtualization is the process of loading the diagramming objects available in the visible area of the Diagram control, that is, only the diagramming objects that lie within the ViewPort of the Scroll Viewer are loaded (remaining objects are loaded only when they come into view).

This feature gives an optimized performance while loading and dragging items to the Diagram that consists of many Nodes and Connectors.

The following code illustrates how to enable Virtualization mode in the diagram.

```ts

//Initialize diagram
let diagram: Diagram = new Diagram({
    width: '800px', height: '500px',
    //Enable virtualization in diagram
    constraints: DiagramConstraints.Default | DiagramConstraints.Virtualization,
});
diagram.appendTo('#diagram');

```