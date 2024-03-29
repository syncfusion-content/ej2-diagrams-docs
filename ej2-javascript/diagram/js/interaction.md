---
layout: post
title: Interaction in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Interaction in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Interaction 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Interaction in ##Platform_Name## Diagram control

## Selection

Selector provides a visual representation of selected elements. It behaves like a container and allows to update the size, position, and rotation angle of the selected elements through interaction and by using program. Single or multiple elements can be selected at a time.

## Single selection

An element can be selected by clicking that element. During single click, all previously selected items are cleared. The following image shows how the selected elements are visually represented.

![Single Selection](images/single-select.gif)

* While selecting the diagram elements, the following events can be used to do your customization.
* When selecting/unselecting the diagram elements, the [`selectionChange`](../api/diagram#selectionChange--emittypeiselectionchangeeventargs) event gets triggered.

## Selecting a group

When a child element of any group is clicked, its contained group is selected instead of the child element. With consecutive clicks on the selected element, selection is changed from top to bottom in the hierarchy of parent group to its children.

## Multiple selection

Multiple elements can be selected with the following ways:

* Ctrl+Click

During single click, any existing item in the selection list be cleared, and only the item clicked recently is there in the selection list. To avoid cleaning the old selected item, Ctrl key must be on hold when clicking.

* Selection rectangle/rubber band selection

Clicking and dragging the diagram area allows to create a rectangular region. The elements that are covered under the rectangular region are selected at the end.

![Multiple Selection](images/multiselect_Highlight.gif)

## Select/Unselect elements using program

The client-side methods [`select`](../api/diagram#select) and [`clearSelection`](../api/diagram#clearselection) help to select or clear the selection of the elements at runtime. The following code example illustrates how to select or clear the selection of an item using program.

Get the current selected items from the [`nodes`](../api/diagram/selectorModel#nodes-nodemodel[]) and [`connectors`](../api/diagram/selectorModel#connectors-connectormodel[]) collection of the [`selectedItems`](../api/diagram#selectAll#selecteditems-selectormodel) property of the diagram model.

## Select entire elements in diagram programmatically

The client-side method [`selectAll`](../api/diagram#selectAll) used to select all the elements such as nodes/connectors in the diagram. Refer to the following link which shows how to use [`selectAll`](../api/diagram#selectAll) method on the diagram.

## Drag

* An object can be dragged by clicking and dragging it. When multiple elements are selected, dragging any one of the selected elements move every selected element.
* When you drag the elements in the diagram, the [`positionChange`](../api/diagram#positionChange--emittypeidraggingeventargs) event gets triggered and to do customization in this event.

![Drag](images/drag.gif)

## Resize

* Selector is surrounded by eight thumbs. When dragging these thumbs, selected items can be resized.
* When one corner of the selector is dragged, opposite corner is in a static position.
* When a node is resized, the [`sizeChange`](../api/diagram#sizeChange--emittypeisizechangeeventargs) event gets triggered.

![Resize](images/resize.gif)

>Note:  While dragging and resizing, the objects are snapped towards the nearest objects to make better alignments. For better alignments, refer to `Snapping`.

## Customize the resize-thumb

You can change the size of the node resize thumb and the connector end point handle by using the `handleSize` property. The appearance such as fill, stroke, and stroke width of the node resize thumb and connector end point handle can be customized by overriding the e-diagram-resize-handle and e-diagram-endpoint-handle classes respectively.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/interaction-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/interaction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/interaction-cs1" %}

![handleSize](images/handleSize.gif)

## Rotate

* A rotate handler is placed above the selector. Clicking and dragging the handler in a circular direction lead to rotate the node.
* The node is rotated with reference to the static pivot point.
* Pivot thumb (thumb at the middle of the node) appears while rotating the node to represent the static point.

![rotate](images/rotate.gif)

## Connection editing

* Each segment of a selected connector is editable with some specific handles/thumbs.

>Note: For connector editing, you have to inject the [`ConnectorEditing`](../api/diagram/connectorEditing) module.

## End point handles

Source and target points of the selected connectors are represented with two handles. Clicking and dragging those handles help you to adjust the source and target points.

![Drag End Point Handles](images/connector-end-point.gif)

* If you drag the connector end points, then the following events can be used to do your customization.
* When the connector source point is changed, the [`sourcePointChange`](../api/diagram#sourcePointChange--emittypeiendchangeeventargs) event gets triggered.
* When the connector target point is changed, the [`targetPointChange`](../api/diagram#targetPointChange--emittypeiendchangeeventargs) event gets triggered.
* When you connect connector with ports/node or disconnect from it, the [`connectionChange`](../api/diagram#connectionChange--emittypeiconnectionchangeeventargs) event gets triggered.

## Straight segment editing

* End point of each straight segment is represented by a thumb that enables to edit the segment.
* Any number of new segments can be inserted into a straight line by clicking, when Shift and Ctrl keys are pressed (Ctrl+Shift+Click).

![Straight Segment Editing Addition](images/straight-segment-add.gif)

* Straight segments can be removed by clicking the segment end point, when Ctrl and Shift keys are pressed (Ctrl+Shift+Click).

![Straight Segment Editing Remove](images/straight-segment-remove.gif)

## Orthogonal thumbs

* Orthogonal thumbs allow you to adjust the length of adjacent segments by clicking and dragging it.
* When necessary, some segments are added or removed automatically, when dragging the segment. This is to maintain proper routing of orthogonality between segments.

![orthogonal Segment Edit](images/orthogonal-segment-edit.gif)

## Bezier thumbs

* Bezier segments are annotated with two thumbs to represent the control points. Control points of the curve can be configured by clicking and dragging the control thumbs.

![Bezier Segement Thumb](images/bezier-segement-thumb.gif)

## Drag and drop nodes over other elements

Diagram provides support to drop a node/connector over another node/connector. The [`drop`](../api/diagram#drop--emittypeidropeventargs) event is raised to notify that an element is dropped over another one and it is disabled, by default. It can enabled with the constraints property.

## User handles

* User handles are used to add some frequently used commands around the selector. To create user handles, define and add them to the [`userHandles`](../api/diagram/selectorModel#userHandles-userhandlemodel[]) collection of the [`selectedItems`](../api/diagram#selectAll#selecteditems-selectormodel) property.
* The name property of user handle is used to define the name of the user handle and its further used to find the user handle at runtime and do any customization.

## Alignment

User handles can be aligned relative to the node boundaries. It has [`margin`](../api/diagram/userHandle#margin-marginmodel), [`offset`](../api/diagram/userHandle#offset-number), [`side`](../api/diagram/userHandle#side-side), [`horizontalAlignment`](../api/diagram/userHandle#horizontalalignment-horizontalalignment), and [`verticalAlignment`](../api/diagram/userHandle#verticalalignment-verticalalignment) settings. It is quite tricky when all four alignments are used together but gives more control over alignment.

## Offset

The [`offset`](../api/diagram/userHandle#offset-number) property of [`userHandles`](../api/diagram/selectorModel#userHandles-userhandlemodel[]) is used to align the user handle based on fractions. 0 represents top/left corner, 1 represents bottom/right corner, and 0.5 represents half of width/height.

## Side

The [`side`](../api/diagram/userHandle#side-side) property of [`userHandles`](../api/diagram/selectorModel#userHandles-userhandlemodel[]) is used to align the user handle by using the [`Top`](../api/diagram/side#top), [`Bottom`](../api/diagram/side#bottom), [`Left`](../api/diagram/side#left), and [`Right`](../api/diagram/side#right) options.

## Horizontal and vertical alignments

The [`horizontalAlignment`](../api/diagram/userHandle#horizontalalignment-horizontalalignment) property of [`userHandles`](../api/diagram/selectorModel#userHandles-userhandlemodel[]) is used to set how the user handle is horizontally aligned at the position based on the [`offset`](../api/diagram/userHandle#offset-number). The [`verticalAlignment`](../api/diagram/userHandle#verticalalignment-verticalalignment) property is used to set how user handle is vertically aligned at the position.

## Margin

Margin is an absolute value used to add some blank space in any one of its four sides. The [`userHandles`](../api/diagram/selectorModel#userHandles-userhandlemodel[]) can be displaced with the [`margin`](../api/diagram/userHandle#margin-marginmodel) property.

## Notification for the mouse button clicked

The diagram component notifies the mouse button clicked. For example, when the right mouse button is clicked, the clicked button is notified as right. The mouse click is notified with,

| Notification | Description |
|----------------|--------------|
| Left | When the left mouse button is clicked, left is notified  |
| Middle | When the mouse wheel is clicked, middle is notified |
| Right | When the right mouse button is clicked, right is notified |

```javascript
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: 900
},'#diagram');
diagram.click = function (args: IClickEventArgs) {
// Obtains the mouse button clicked
   let clickedButtons = args.button
};
```

## Appearance

The appearance of the user handle can be customized by using the [`size`](../api/diagram/userHandle#size-number), [`borderColor`](../api/diagram/userHandle#bordercolor-string), [`backgroundColor`](../api/diagram/userHandle#backgroundcolor-string), [`visible`](../api/diagram/userHandle#visible-boolean), [`pathData`](../api/diagram/userHandle#pathdata-string), and [`pathColor`](../api/diagram/userHandle#pathcolor-string) properties of the [`userHandles`](../api/diagram/selectorModel#userHandles-userhandlemodel[]).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/interaction-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/interaction-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/interaction-cs2" %}

## Zoom pan

* When a large diagram is loaded, only certain portion of the diagram is visible. The remaining portions are clipped. Clipped portions can be explored by scrolling the scrollbars or panning the diagram.
* Diagram can be zoomed in or out by using Ctrl + mouse wheel.
* When the diagram is zoomed or panned, the [`scrollChange`](../api/diagram#scrollChange--emittypeiscrollchangeeventargs) event gets triggered.

![Zoom Pan](images/Zoom-pan.gif)

## Zoom pan status

Diagram provides the support to notify the pan status of the zoom pan tool. Whenever the diagram is panning [`scrollChange`](../api/diagram#scrollChange--emittypeiscrollchangeeventargs) event is triggered and hence the pan status can be obtained. The pan status is notified with Start, Progress, and Completed.

|  Pan Status  | Description|
|--------------|---------|
| Start | When the mouse is clicked and dragged the status is notified as start.|
| Progress | When the mouse is in motion the status is notified as progress.|
| Completed | When panning is stopped the status is notified with completed.|

```ts

let diagram: Diagram = new Diagram({
    width: '100%', height: 900
    tool: DiagramTools.ZoomPan, scrollChange:function (args:IScrollChangeEventArgs | IBlazorScrollChangeEventArgs) {
    // Obtains the zoom pan status
    let mouseButton = args.panState
    }
});
diagram.appendTo('#element');

```

## Keyboard

Diagram provides support to interact with the elements with key gestures. By default, some in-built commands are bound with a relevant set of key combinations.

The following table illustrates those commands with the associated key values.

| Shortcut Key | Command | Description|
|--------------|---------|------------|
| Ctrl + A | `selectAll` | Select all nodes/connectors in the diagram.|
| Ctrl + C | copy | Copy the diagram selected elements.|
| Ctrl + V | paste | Pastes the copied elements.|
| Ctrl + X | cut | Cuts the selected elements.|
| Ctrl + Z | undo | Reverses the last editing action performed on the diagram.|
| Ctrl + Y | redo | Restores the last editing action when no other actions have occurred since the last undo on the diagram.|
| Delete | delete | Deletes the selected elements.|
| Ctrl/Shift + Click on object |  | Multiple selection (Selector binds all selected nodes/connectors).|
| Up Arrow | nudge(“up”) | `nudgeUp`: Moves the selected elements towards up by one pixel.|
| Down Arrow | nudge(“down”) | `nudgeDown`: Moves the selected elements towards down by one pixel.|
| Left Arrow | nudge(“left”) | `nudgeLeft`: Moves the selected elements towards left by one pixel.|
| Right Arrow | nudge(“right”) | `nudgeRight`: Moves the selected elements towards right by one pixel.|
| Ctrl + MouseWheel | zoom | Zoom (Zoom in/Zoom out the diagram).|
| F2 | `startLabelEditing` | Starts to edit the label of selected element.|
| Esc | `endLabelEditing` | Sets the label mode as view and stops editing.|
| Tab | Tab to Focus | Select the diagram element based on the rendering order when using the "Tab" key.|
| Shift + Tab | Go to Previous Object | This command is employed to shift the selection to the preceding object based on the z-order.|
| Control + B | Bold | Toggle bold formatting for the selected text.|
| Control + I | Italic | Toggle italic formatting for the selected text.|
| Control + U | Underline | Toggle underline formatting for the selected text.|
| Control + D | Duplicate | Duplicate a selected shape.|
| Control + G | Group | Group together multiple selected shapes, allowing them to be treated as a single shape.|
| Control + Shift + U | UnGroup | Ungroup shapes within a previously grouped selection.|
| Control + R | Rotate clockwise | Rotate the selected nodes in clockwise.|
| Control + L | Rotate anti-clockwise | Rotate the selected nodes in counterclockwise.|
| Control + H | Flip Horizontal | Flip the selected elements horizontally.|
| Control + J | Flip Vertical | Flip the selected elements vertically.|
| Control + 1 | Pointer tool | Activate the pointer tool.|
| Control + 2 | Text tool | Activate the text  tool.|
| Control + 3 | Connector tool | Activate the connector tool.|
| Control + 5 | Freeform  tool | Activate the freeform tool.|
| Control + 6 | Line tool | Activate the polyline tool.|
| Control + + | Zoom In | Zoom in the diagram.|
| Control + - | Zoom Out | Zoom out the diagram.|
| Shift + Up Arrow | Up | Moves the selected elements towards up by 5 pixel.|
| Shift + Down Arrow | Down | Moves the selected elements towards down by 5 pixel.|
| Shift + Left Arrow | Left | Moves the selected elements towards left by 5 pixel.|
| Shift + Right Arrow | Right | Moves the selected elements towards right by 5 pixel.|
| Control + Shift + L | Align Text Left | Align the selected text to the left.|
| Control + Shift + C | Center Text Horizontally | Center the selected text horizontally.|
| Control + Shift + R | Align Text Right | Align the selected text to the right.|
| Control + Shift + J | Justify Text Horizontally | Justify the selected text, aligning it to both the left and right margins.|
| Control + Shift + E | Top-align Text Vertically | Align the selected text to the top vertically.|
| Control + Shift + M | Center Text Vertically | Center the selected text vertically.|
| Control + Shift + V | Bottom-align Text Vertically | Align the selected text to the bottom vertically.|
| Control + Shift + B | Send To Back | Send the selected shape backward in the stacking order, making it appear behind other shapes.|
| Control + Shift + F | Bring To Front | Bring the selected shape forward in the stacking order, making it appear in front of other shapes.|
| Control + [ | Send Backward | Move the selected shape one step backward in the layer order. |
| Control + ] | Bring Forward | Move the selected shape one step forward in the layer order.|

## See Also

* [How to create diagram nodes using drawing tools](./tools#Shapes)
* [How to create diagram connectors using drawing tools](./tools#Connectors )
* [How to disable the diagram interaction](./tools)
* [How to control the diagram history](./undo-redo)
* [How to create overview control to the diagram](./overview)
