---
layout: post
title: Getting started with ##Platform_Name## Diagram control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Diagram control

This section explains the steps required to create a simple diagram and demonstrates the basic usage of the diagram control.

<!-- markdownlint-disable MD033 -->

## Dependencies

The following list of dependencies are required to use the `Diagram` component in your application.

```javascript
|-- @syncfusion/ej2-diagrams
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-splitbuttons
```

## Installation and Configuration

* To get started with the diagram component, clone the [`Essential JS 2 quickStart`](https://github.com/syncfusion/ej2-quickstart.git) project and install necessary packages by using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

* `Diagram packages` should be mapped in the `system.config.js` configuration file.

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-diagrams": "syncfusion:ej2-diagrams/dist/ej2-diagrams.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});
```

>The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`) to start with all Essential JS 2 components.

## Add diagram to the project

Add the HTML div element for the diagram into your `index.html`. `[src/index.html]`

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Diagram</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
     <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--Style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--System js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
    <link href="index.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    </head>

<body>
     <!--container which is going to render the Diagram-->
     <div id='container'>
     </div>
</body>

</html>
```

Now, import the diagram component into your `app.ts` to instantiate a diagram and append the diagram instance to the `#container`. `[src/app/app.ts]`

The following example shows a basic diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/getting-started-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs11" %}

Now, the `npm run start` command is used to run the application in the browser.

```

npm run start

```

## Module Injection

The diagram component is divided into individual feature-wise modules. In order to use a particular feature, inject the required module. The following list describes the module names and their description.

* `BpmnDiagrams`: Inject this provider to add built-in BPMN shapes to diagrams.
* `ConnectorBridging`: Inject this provider to add bridges to connectors.
* `ConnectorEditing`: Inject this provider to edit the segments for connector.
* `ComplexHierarchicalTree`: Inject this provider to complex hierarchical tree like structure.
* `DataBinding`: Inject this provider to populate nodes from given data source.
* `DiagramContextMenu`: Inject this provider to manipulate context menu.
* `HierarchicalTree`: Inject this provider to use hierarchical tree like structure.
* `LayoutAnimation`: Inject this provider animation to layouts.
* `MindMap`: Inject this provider to use mind map.
* `PrintAndExport`: Inject this provider to print or export the objects.
* `RadialTree`: Inject this provider to use radial tree like structure.
* `Snapping`: Inject this provider to snap the objects.
* `SymmetricLayout`: Inject this provider to render layout in symmetrical method.
* `UndoRedo`: Inject this provider to revert and restore the changes.

These modules should be imported and injected into the Diagram component using `Diagram.Inject` method as follows.

```javascript
import { Diagram, HierarchicalTree, MindMap, RadialTree, ComplexHierarchicalTree, DataBinding, Snapping, PrintAndExport, BpmnDiagrams, SymmetricLayout, ConnectorBridging, UndoRedo, LayoutAnimation, DiagramContextMenu, ConnectorEditing } from '@syncfusion/ej2-diagrams';

Diagram.Inject(BpmnDiagrams, ConnectorBridging, ConnectorEditing, ComplexHierarchicalTree, DataBinding, DiagramContextMenu, HierarchicalTree, LayoutAnimation, MindMap, PrintAndExport, RadialTree, Snapping, SymmetricLayout, UndoRedo);
```

## Flow Diagram

### Create and add node

Create and add a `node` (JSON data) with specific position, size, label, and shape.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs12" %}

>Note: The `annotations` property is an array, which indicates that more than one label can be added to a node.

### Connect Nodes

Add two node to the diagram as shown in the previous example. Connect these nodes by adding a connector using the `connector` property and refer the source and target end by using the `sourceNode` and `targetNode` properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs13" %}

Default values for all `nodes` and `connectors` can be set using the `getNodeDefaults` and `getConnectorDefaults` properties, respectively. For example, if all nodes have the same width and height, such properties can be moved into `getNodeDefaults`.

### Complete flow diagram

Similarly, the required nodes and connectors can be added to form a complete flow diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs14" %}

## Automatic organization chart

In the 'Flow Diagram' section, how to create a diagram manually was discussed. This section explains how to create and position the diagram automatically.

### Business object (Employee information)

Define Employee Information as JSON data. The following code example shows an employee array whose, `Name` is used as an unique identifier and `ReportingPerson` is used to identify the person to whom an employee report to, in the organization.

```ts

//Initialize data source...
let data: object[] = [{Name: "Elizabeth", Role: "Director" },
{ Name: "Christina", ReportingPerson: "Elizabeth", Role: "Manager" },
{ Name: "Yoshi", ReportingPerson: "Christina", Role: "Lead" },
{ Name: "Philip", ReportingPerson: "Christina", Role: "Lead" },
{ Name: "Yang", ReportingPerson: "Elizabeth", Role: "Manager" },
{ Name: "Roland", ReportingPerson: "Yang", Role: "Lead" },
{ Name: "Yvonne", ReportingPerson: "Yang", Role: "Lead" }
];

```

### Map data source

You can configure the above "Employee Information" with diagram, so that the nodes and connectors are automatically generated using the mapping properties. The following code example show how `dataSourceSettings` is used to map ID and parent with property name identifiers for employee information.

```ts

//Initialize data source...

let data: object[] = [
    {Name: "Elizabeth", Role: "Director" },
    { Name: "Christina", ReportingPerson: "Elizabeth", Role: "Manager" },
    { Name: "Yoshi", ReportingPerson: "Christina", Role: "Lead" },
    { Name: "Philip", ReportingPerson: "Christina", Role: "Lead" },
    { Name: "Yang", ReportingPerson: "Elizabeth", Role: "Manager" },
    { Name: "Roland", ReportingPerson: "Yang", Role: "Lead" },
    { Name: "Yvonne", ReportingPerson: "Yang", Role: "Lead" }
];
let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
//Initialize data source...
let diagram: Diagram = new Diagram({
    width: '100%', height: '600px',
//Configure data source for diagram
    dataSourceSettings: {
        id: 'Name', parentId: 'ReportingPerson', dataManager: items
    }
});

```

### Visualize employee

The following code examples indicate how to define the default appearance of nodes and connectors. The `setNodeTemplate` is used to update each node based on employee data.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/getting-started-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/getting-started-cs15" %}