---
layout: post
title: Connectors in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Connectors in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Connectors 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Connectors in ##Platform_Name## Diagram control

Connectors are objects used to create link between two points, nodes or ports to represent the relationships between them.

## Create connector

Connector can be created by defining the source and target point of the connector. The path to be drawn can be defined with a collection of segments. To explore the properties of a [`connector`](../api/diagram/connector), refer to [`Connector Properties`](../api/diagram/connector).

## Add connectors through connectors collection

The [`sourcePoint`](../api/diagram/connector#sourcepoint-PointModel) and [`targetPoint`](../api/diagram/connector#targetpoint-PointModel) properties of connector allow you to define the end points of a connector.

The following code example illustrates how to add a connector through connector collection.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs30/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs30/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs30" %}

## Add connector at runtime

Connectors can be added at runtime by using public method, `diagram.add` and can be removed at runtime by using public method, `diagram.remove`.

The following code example illustrates how to add connector at runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs31/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs31/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs31" %}

## Connectors from palette

Connectors can be predefined and added to the symbol palette. You can drop those connectors into the diagram, when required.

For more information about adding connectors from symbol palette, refer to `Symbol Palette`.

## Draw connectors

Connectors can be interactively drawn by clicking and dragging on the diagram surface by using `drawingObject`.

For more information about drawing connectors, refer to [`Draw Connectors`](../api/diagram#drawingObject-ConnectorModel).

## Update connector at runtime

Various connector properties such as `sourcePoint`, `targetPoint`, `style`, `sourcePortID`, `targetPortID`, etc., can be updated at the runtime.

The following code example illustrates how to update a connector's source point, target point, styles properties at runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs32/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs32/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs32" %}

## Connect nodes

* The [`sourceID`](../api/diagram/connector#sourceid-string) and [`targetID`](../api/diagram/connector#targetid-string) properties allow to define the nodes to be connected.
* The [`connectorSpacing`](../api/diagram/connector#connectorSpacing-number) property allows you to define the distance between the source node and the connector. It is the minimum distance the connector will re-rout or the new segment will create.

* The following code example illustrates how to connect two nodes.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs33/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs33/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs33" %}

* When you remove NodeConstraints [`InConnect`](../api/diagram/nodeConstraints) from Default, the node accepts only an outgoing connection to dock in it. Similarly, when you remove NodeConstraints [`OutConnect`](../api/diagram/nodeConstraints) from Default, the node accepts only an incoming connection to dock in it.

* When you remove both InConnect and OutConnect NodeConstraints from Default, the node restricts connector to establish connection in it.

* The following code illustrates how to disable InConnect constraints.

```ts

//Initialize diagram
let diagram: Diagram = new Diagram({
     nodes:[
         {
            id: 'node', width: 100, height: 100, offsetX: 100, offsetY: 150,
            shape: { type: 'Basic', shape: 'Rectangle' },
            //Disable InConnect constraints
            constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
         }
     ]
});
diagram.appendTo('#diagram');

```

## Connections with ports

The [`sourcePortID`](../api/diagram/connector#sourceportid-string) and [`targetPortID`](../api/diagram/connector#targetportid-string) properties allow to create connections between some specific points of source/target nodes.

The following code example illustrates how to create port to port connections.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs34/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs34/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs34" %}

Similarly, the `sourcePortID` or `targetPortID` can be changed at the runtime by changing the port [`sourcePortID`](../api/diagram/connector#sourceportid-string) or [`targetPortID`](../api/diagram/connector#targetportid-string).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs35/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs35/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs35" %}

* When you set PortConstraints to [`InConnect`](../api/diagram/portConstraints), the port accepts only an incoming connection to dock in it. Similarly, when you set PortConstraints to [`OutConnect`](../api/diagram/portConstraints), the port accepts only an outgoing connection to dock in it.

* When you set PortConstraints to None, the port restricts connector to establish connection in it.

```ts

//Initialize diagram
let diagram: Diagram = new Diagram({
     nodes:[
         {
            id: 'node', width: 100, height: 100, offsetX: 100, offsetY: 150,
            shape: { type: 'Basic', shape: 'Rectangle' },
            ports: [
             //Enable portConstraints Inconnect
             { id: 'port', height: 10, width: 10, offset: { x: 1, y: 0.5 }, constraints: PortConstraints.InConnect },
           ]
         }
     ]
});
diagram.appendTo('#diagram');

```

## Segments

The path of the connector is defined with a collection of segments. There are three types of segments.

## Straight

To create a straight line, specify the [`type`](../api/diagram/segments) of the segment as **straight** and add a straight segment to [`segments`](../api/diagram/connector#segments) collection and need to specify [`type`](../api/diagram/connector#type-Segments) for the connector. The following code example illustrates how to create a default straight segment.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs36/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs36/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs36" %}

The [`point`](../api/diagram/straightSegment#point-PointModel) property of straight segment allows you to define the end point of it. The following code example illustrates how to define the end point of a straight segment.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs37/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs37/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs37" %}

## Orthogonal

Orthogonal segments is used to create segments that are perpendicular to each other.

Set the segment [`type`](../api/diagram/segments) as orthogonal to create a default orthogonal segment and need to specify [`type`](../api/diagram/connector#type-Segments). The following code example illustrates how to create a default orthogonal segment.

Multiple segments can be defined one after another. To create a connector with multiple segments, define and add the segments to [`connector.segments`](../api/diagram/connector#segments) collection. The following code example illustrates how to create a connector with multiple segments.

The property [`maxSegmentThumb`](../api/diagram/connector#maxSegmentThumb) is used to limit the  number of segment thumb in the connector.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs38/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs38/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs38" %}

![maxSegmentThumb](images/maxSegmentThumb.png)

The [`length`](../api/diagram/orthogonalSegment) and [`direction`](../api/diagram/orthogonalSegment) properties allow to define the flow and length of segment. The following code example illustrates how to create customized orthogonal segments.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs39/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs39/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs39" %}

>Note: You need to mention the segment type as same as what you mentioned in connector type. There should be no contradiction between connector type and segment type.

## Avoid overlapping

Orthogonal segments are automatically re-routed, in order to avoid overlapping with the source and target nodes. The following preview illustrates how orthogonal segments are re-routed.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs40/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs40/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs40" %}

## How to customize Orthogonal Segment Thumb Shape

The orthogonal connector can have any number of segments in between the source and the target point. Segments are rendered with the rhombus shape by default. The [`segmentThumbShape`](../api/diagram#segmentThumbShape-SegmentThumbShapes) property allows you to change the default shape of the segment thumb. The following predefined shapes are provided:

| Shape name | Shape |
|-------- | -------- |
|Rhombus| ![Rhombus](images/rhombus.png) |
| Square | ![Square](images/square.png) |
| Rectangle | ![Rectangle](images/Rectangle.png) |
| Ellipse |![Ellipse](images/Ellipse.png) |
|Arrow| ![Arrow](images/Arrow.png) |
| OpenArrow | ![OpenArrow](images/OpenArrow.png) |
| Circle |![Circle](images/Circle.png) |
| Fletch|![Fletch](images/Fletch.png) |
|OpenFetch| ![OpenFetch](images/OpenFetch.png) |
| IndentedArrow | ![IndentedArrow](images/IndentedArrow.png) |
| OutdentedArrow | ![OutdentedArrow](images/OutdentedArrow.png) |
| DoubleArrow |![DoubleArrow](images/DoubleArrow.png) |

 You can customize the style of the thumb shape by overriding the class e-orthogonal-thumb.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs41/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs41/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs41" %}

![Segment Thumb Shape](images/thumbshape.png)

Use the following CSS to customize the segment thumb shape.

```scss

 .e-orthogonal-thumb {

            stroke:#24039e;

            fill:rgb(126, 190, 219);

            stroke-width: 3px;

            }

```

## Bezier

Bezier segments are used to create curve segments and the curves are configurable either with the control points or with vectors.

To create a bezier segment, the [`segment.type`](../api/diagram/segments) is set as `bezier` and need to specify [`type`](../api/diagram/connector#type-Segments) for the connector. The following code example illustrates how to create a default bezier segment.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs42/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs42/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs42" %}

The [`point1`](../api/diagram/bezierSegment#point1-PointModel) and [`point2`](../api/diagram/bezierSegment#point2-PointModel) properties of bezier segment enable you to set the control points. The following code example illustrates how to configure the bezier segments with control points.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs43/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs43/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs43" %}

The [`vector1`](../api/diagram/bezierSegment#vector1-VectorModel) and [`vector2`](../api/diagram/bezierSegment#vector2-VectorModel) properties of bezier segment enable you to define the vectors. The following code illustrates how to configure a bezier curve with vectors.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs44/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs44/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs44" %}

## Avoid overlapping with bezier

By default, when there are no segments defined for a bezier connector, the bezier segments will be created automatically and routed in such a way that avoids overlapping with the source and target nodes.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs45/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs45/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs45" %}

Also, the intermediate point of two adjacent bezier segments can be edited interactively based on the bezierSettings.segmentEditOrientation property of the connector class.

### How to interact with the bezier segments efficiently

While interacting with multiple bezier segments, maintain their control points at the same distance and angle by using the bezierSettings.smoothness property of the connector class.

| BezierSmoothness value | Description |
|-------- | -------- |
| SymmetricDistance| Both control points of adjacent segments will be at the same distance when any one of them is editing. |
| SymmetricAngle | Both control points of adjacent segments will be at the same angle when any one of them is editing. |
| Default | Both control points of adjacent segments will be at the same angle and same distance when any one of them is editing. |
| None | Segment’s control points are interacted independently from each other. |

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs46/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs46/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs46" %}

Also, the visibility of control points can be controlled using the bezierSettings.controlPointsVisibility property of the connector class.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs47/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs47/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs47" %}

## Decorator

* Starting and ending points of a connector can be decorated with some customizable shapes like arrows, circles, diamond, or path. The connection end points can be decorated with the [`sourceDecorator`](../api/diagram/connector#sourcedecorator-DecoratorModel) and [`targetDecorator`](../api/diagram/connector#targetdecorator-DecoratorModel) properties of the connector.

* The [`shape`](../api/diagram/decoratorShapes) property of `sourceDecorator` allows to define the shape of the decorators. Similarly, the [shape](../api/diagram/decoratorShapes) property of `targetDecorator` allows to define the shape of the decorators.

* To create custom shape for source decorator, use [`pathData`](../api/diagram/decorator#pathdata-string) property. Similarly, to create custom shape for target decorator, use [`pathData`](../api/diagram/decorator#pathData-string) property.

* The following code example illustrates how to create decorators of various shapes.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs48/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs48/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs48" %}

## Padding

Padding is used to leave the space between the Connector's end point and the object to where it is connected.

* The [`sourcePadding`](../api/diagram/connector#sourcepadding) property of connector defines space between the source point and the source node of the connector.

* The [`targetPadding`](../api/diagram/connector#targetpadding) property of connector defines space between the end point and the target node of the connector.

* The following code example illustrates how to leave space between the connection end points and source and target nodes.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs49/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs49/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs49" %}

## Hit padding

* The [`hitPadding`](../api/diagram/connector#hitpadding) property enables you to define the clickable area around the connector path.The default value for hitPadding is 10.

* The following code example illustrates how to specify hit padding for connector.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs60/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs60/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs60" %}

## Flip

The diagram Provides support to flip the connector. The [`flip`](../api/diagram/connector#flip) is performed to give the mirrored image of the original element.

The flip types are as follows:

* HorizontalFlip
 [`Horizontal`](../api/diagram/flipDirection) is used to interchange the connector source and target x points.

* VerticalFlip
[`Vertical`](../api/diagram/flipDirection) is used to interchange the connector source and target y points.

* Both
[`Both`](../api/diagram/flipDirection) is used to interchange the source point as target point and target point as source point
.
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs50/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs50/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs50" %}

 >Note: The flip is not applicable when the connectors connect in nodes

## Bridging

Line bridging creates a bridge for lines to smartly cross over the other lines, at points of intersection. By default, [`bridgeDirection`](../api/diagram#bridgeDirection-BridgeDirection) is set to top. Depending upon the direction given bridging direction appears.
Bridging can be enabled/disabled either with the `connector.constraints` or `diagram.constraints`. The following code example illustrates how to enable line bridging.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs51/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs51/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs51" %}
>Note: You need to inject connector bridging module into the diagram.

The [`bridgeSpace`](../api/diagram/connector#bridgespace-number) property of connectors can be used to define the width for line bridging.

Limitation: Bezier segments do not support bridging.

## Corner radius

Corner radius allows to create connectors with rounded corners. The radius of the rounded corner is set with the [`cornerRadius`](../api/diagram/connector#cornerradius-number) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs52/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs52/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs52" %}

## Appearance

* The connector’s [`strokeWidth`](../api/diagram/strokeStyle#strokewidth-number), [`strokeColor`](../api/diagram/strokeStyle#strokecolor-string), [`strokeDashArray`](../api/diagram/strokeStyle#strokedasharray-string), and [`opacity`](../api/diagram/strokeStyle#opacity-number) properties are used to customize the appearance of the connector segments.

* The [`visible`](../api/diagram/connector#visible-boolean) property of the connector enables or disables the visibility of connector.

* Default values for all the `connectors` can be set using the `getConnectorDefaults` properties. For example, if all connectors have the same type or having the same property then such properties can be moved into `getConnectorDefaults`.

## Segment appearance

The following code example illustrates how to customize the segment appearance.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs53/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs53/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs53" %}

## Decorator appearance

* The source decorator’s [`strokeColor`](../api/diagram/strokeStyle#strokecolor-string), [`strokeWidth`](../api/diagram/strokeStyle#strokewidth-number), and [`strokeDashArray`](../api/diagram/strokeStyle#strokedasharray-string) properties are used to customize the color, width, and appearance of the decorator.

* To set the border stroke color, stroke width, and stroke dash array for the target decorator, use [`strokeColor`](../api/diagram/strokeStyle#strokecolor-string), [`strokeWidth`](../api/diagram/strokeStyle#strokewidth-number), and [`strokeDashArray`](../api/diagram/strokeStyle#strokedasharray-string).

* To set the size for source and target decorator, use width and height property.

The following code example illustrates how to customize the appearance of the decorator.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs54/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs54/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs54" %}

## Interaction

* Diagram allows to edit the connectors at runtime. To edit the connector segments at runtime, refer to [`Connection Editing`](../api/diagram/connectorEditing).

## Automatic line routing

Diagram provides additional flexibility to re-route the diagram connectors. A connector will frequently re-route itself when a shape moves next to it. The following screenshot illustrates how the connector automatically re-routes the segments.  

* Dependency LineRouting module should be injected to the application as the following code snippet.

  ```ts

  /**
   * Injecting the automatic line routing module.
   */
  Diagram.Inject(LineRouting);

  ```

* Now, the line routing constraints must be included to the default diagram constraints to enable automatic line routing support like below.

  ```ts
  /**
   *  Initialize the Diagram
   */
     let diagram: Diagram = new Diagram({
           //Add Line routing constraints to diagram.
          constraints: ej.diagrams.DiagramConstraints.Default |
                      ej.diagrams.DiagramConstraints.LineRouting
      });
      diagram.appendTo('#diagram');

  ```

* The following code block shows how to create the diagram with specifying nodes, connectors, constraints, and necessary modules for line routing.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs55/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs55/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs55" %}

* In some situations, automatic line routing enabled diagram needs to ignore a specific connector from automatic line routing. So, in this case, auto routing feature can be disabled to the specific connector using the [`constraints`](../api/diagram/connector#constraints-ConnectorConstraints) property of the connector like the following code snippet.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs56/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs56/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs56" %}

## Constraints

* The [`constraints`](../api/diagram/connector#constraints-ConnectorConstraints) property of connector allows to enable/disable certain features of connectors.

* To enable or disable the constraints, refer [`constraints`](../api/diagram/connectorConstraints).

The following code illustrates how to disable selection.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs57/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs57/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs57" %}

## Custom properties

* The [`addInfo`](../api/diagram/connector#addinfo-Object) property of connectors allow you to maintain additional information to the connectors.

```javascript

let connectors: ConnectorModel = {
    id: 'connector1',
    // Defines the information about the connector
    addInfo:'centralconnector',
    type: 'Straight',
    sourceID: 'Transaction',
    targetID: 'Verification'
};

```

## Stack order

The connectors [`zIndex`](../api/diagram/connector#zindex-number) property specifies the stack order of the connector. A connector with greater stack order is always in front of a connector with a lower stack order.

The following code illustrates how to render connector based on the stack order.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs58/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs58/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs58" %}

## Enable Connector Splitting

The connectors are used to create a link between two points, ports, or nodes to represent the relationship between them. Split the connector between two nodes when dropping a new node onto an existing connector and create a connection between the new node and existing nodes by setting the [`enableConnectorSplit`](../api/diagram/enableConnectorSplit) as true. The default value of the [`enableConnectorSplit`](../api/diagram/enableConnectorSplit) is false

The following code illustrates how to split the connector and create a connection with new node.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs59/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs59/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs59" %}

![Enable Connector Split](images/EnableSplit.gif)

## See Also

* [How to add annotations to the connector](./labels)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add connectors to the symbol palette](./symbol-palette)
* [How to perform the interaction on the connector](./interaction#connection-editing)
* [How to create diagram connectors using drawing tools](./tools)