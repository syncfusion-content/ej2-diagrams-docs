---
layout: post
title: Serialization in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Serialization in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Serialization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Serialization in ##Platform_Name## Diagram control

**Serialization** is the process of saving and loading for state persistence of the diagram.

## Save

The diagram is serialized as string while saving. The client-side method, [`saveDiagram`](../api/diagram#saveDiagram) helps to serialize the diagram as a string. The following code illustrates how to save the diagram.

```ts
let diagramElement = document.getElementById('element');
let diagram: Object[] = diagramElement.ej2_instances[0];
let saveData: string;
//returns serialized string of the Diagram
saveData = diagram.saveDiagram();

```

This string can be converted to JSON data and stored for future use. The following snippet illustrates how to save the serialized string into local storage.

```ts
//Saves the string in to local storage
localStorage.setItem('fileName', saveData);
saveData = localStorage.getItem('fileName');

```

Diagram can also be saved as raster or vector image files. For more information about saving the diagram as images, refer to `Print and Export`.

## Load

Diagram is loaded from the serialized string data by client-side method, [`loadDiagram`](../api/diagram#loadDiagram). The following code illustrates how to load the diagram from serialized string data.

```ts
let diagramElement = document.getElementById('element');
let diagram: Object[] = diagramElement.ej2_instances[0];

//Loads the diagram from saved json data
diagram.loadDiagram(saveData);

```

>Note: Before loading a new diagram, existing diagram is cleared.

## Prevent Default Values

The [`preventDefaults`](../api/diagram/serializationSettingsModel) property of serializationSettings is used to simplifying the saved JSON object without adding the default properties that are presented in the diagram.

The following code illustrates how to simplify the JSON object.

```ts
let diagram: Diagram = new Diagram({
 serializationSettings: { preventDefaults: true },
});

```