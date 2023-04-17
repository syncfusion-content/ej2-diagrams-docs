---
layout: post
title: Labels in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Labels in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Labels 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Labels in ##Platform_Name## Diagram control

[`Annotation`](../api/diagram/annotationModel) is a block of text that can be displayed over a node or connector. Annotation is used to textually represent an object with a string that can be edited at runtime. Multiple annotations can be added to a node/connector.

<!-- markdownlint-disable MD033 -->

## Create annotation

An annotation can be added to a node/connector by defining the annotation object and adding that to the annotation collection of the node/connector. The [`content`](../api/diagram/annotationModel#content-string) property of annotation defines the text to be displayed. The following code illustrates how to create a annotation.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs20" %}

## Add annotations at runtime

* Annotations can be added at runtime by using the client-side method [`addLabels`](../api/diagram/#addLabels). The following code illustrates how to add a annotation to a node.

* The annotation's [`ID`](../api/diagram/annotationModel#id-string) property is used to define the name of the annotation and its further used to find the annotation at runtime and do any customization.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs21" %}

## Remove annotation

A collection of annotations can be removed from the node by using client-side method [`removeLabels`](../api/diagram/#removeLabels). The following code illustrates how to remove a annotation to a node.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs22" %}

## Update annotation at runtime

You can change any annotation properties at runtime and update it through the client-side method [`dataBind`](../api/diagram/#dataBind).

The following code example illustrates how to change the annotation properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs23" %}

## Alignment

Annotation can be aligned relative to the node boundaries. It has [`margin`](../api/diagram/annotationModel#margin-marginmodel), [`offset`](../api/diagram/textStyleModel), horizontal, and vertical alignment settings. It is quite tricky when all four alignments are used together but gives more control over alignment.

## Offset

The offset property of annotation is used to align the annotations based on fractions. 0 represents top/left corner, 1 represents bottom/right corner, and 0.5 represents half of width/height.

Set the size for a nodes annotation by using [`width`](../api/diagram/annotationModel#width-number) and
[`height`](../api/diagram/annotationModel#height-number) properties.

The following code shows the relationship between the annotation position (black color circle) and offset (fraction values).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs24/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs24/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs24" %}

## Horizontal and vertical alignment

The [`horizontalAlignment`](../api/diagram/annotationModel#horizontalAlignment-string) property of annotation is used to set how the annotation is horizontally aligned at the annotation position determined from the fraction values. The [`verticalAlignment`](../api/diagram/annotationModel#horizontalAlignment-string) property is used to set how annotation is vertically aligned at the annotation position.

The following tables illustrates all the possible alignments visually with 'offset (0, 0)'.

| Horizontal Alignment | Vertical Alignment | Output with Offset(0,0) |
| -------- | -------- | -------- |
| Left | Top | ![Left Top Label Alignment](images/Label1.png) |
| Center | Top | ![Center Top Label Alignment](images/Label2.png) |
| Right | Top |  ![Right Top Label Alignment](images/Label3.png) |
| Left | Center | ![Left Center Label Alignment](images/Label4.png) |
| Center | Center| ![Center Center Label Alignment](images/Label5.png) |
| Right | Center | ![Right Center Label Alignment](images/Label6.png) |
| Left | Bottom | ![Left Bottom Label Alignment](images/Label7.png) |
| Center | Bottom | ![Center Bottom Label Alignment](images/Label8.png) |
| Right |Bottom |![Right Bottom Label Alignment](images/Label9.png) |

The following codes illustrates how to align annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs25/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs25/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs25" %}

## Annotation alignment with respect to segments

The offset and alignment properties of annotation allows you to align the connector annotations with respect to the segments.

The following code example illustrates how to align connector annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs26/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs26/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs26" %}

## Margin

[`Margin`](../api/diagram/annotationModel#margin-marginmodel) is an absolute value used to add some blank space in any one of its four sides. The annotations can be displaced with the margin property. The following code example illustrates how to align a annotation based on its `offset`, `horizontalAlignment`, `verticalAlignment`, and `margin` values.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs27/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs27/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs27" %}

## Text align

The [`textAlign`](../api/diagram/textStyleModel#textAlign-textalign) property of annotation allows you to set how the text should be aligned (left, right, center, or justify) inside the text block. The following codes illustrate how to set textAlign for an annotation.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs28/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs28/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs28" %}

## Hyperlink

Diagram provides a support to add a [`hyperlink`](../api/diagram/annotationModel#hyperLink-hyperlinkmodel) for the nodes/connectors annotation. It can also be customized.

A User can open the hyperlink in the new window, the same tab and the new tab by using the  [`hyperlinkOpenState`](../api/annotationModel/hyperlinkmodel#hyperlinkopenstate)  property

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs29/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs29/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs29" %}

## Template Support for Annotation

Diagram provides template support for annotation. you should define a SVG/HTML content as string in the annotation's [`template`](../api/diagram/annotationModel#template-string) property.

The following code illustrates how to define a template in node's annotation. similarly, you can define it in connectors.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs30/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs30/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs30" %}

## Wrapping

When text overflows node boundaries, you can control it by using [`text wrapping`](../api/diagram/textStyleModel#textWrapping-textwrap). So, it is wrapped into multiple lines. The wrapping property of annotation defines how the text should be wrapped. The following code illustrates how to wrap a text in a node.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs31/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs31/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs31" %}

| Value | Description | Image |
| -------- | -------- | -------- |
| No Wrap | Text will not be wrapped. | ![Label No Wrap](images/Wrap1.png) |
| Wrap | Text-wrapping occurs, when the text overflows beyond the available node width. | ![Label Wrap](images/Wrap2.png) |
| WrapWithOverflow (Default) | Text-wrapping occurs, when the text overflows beyond the available node width. However, the text may overflow beyond the node width in the case of a very long word. | ![Label WrapWith Overflow](images/Wrap3.png) |

## Text overflow

The label’s [`TextOverflow`](../api/diagram/textStyleModel#textOverFlow-textoverflow) property is used control whether to display the overflowed content in node or not.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs32/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs32/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs32" %}

## Appearance

* You can change the font style of the annotations with the font specific properties (fontSize, fontFamily, color). The following code illustrates how to customize the appearance of the annotation.

* The label’s [`bold`](../api/diagram/textStyleModel#bold-boolean), [`italic`](../api/diagram/textStyleModel#italic-boolean), and [`textDecoration`](../api/diagram/textStyleModel#textDecoration-textdecoration) properties are used to style the label’s text.

* The label’s [`fill`](../api/diagram/textStyleModel#fill-string), [`strokeColor`](../api/diagram/textStyleModel#strokeColor-string), and [`strokeWidth`](../api/diagram/textStyleModel#strokeWidth-number) properties are used to define the background color and border color of the annotation and the [`opacity`](../api/diagram/textStyleModel#opacity-number) property is used to define the transparency of the annotations.

* The [`visible`](../api/diagram/annotationModel#visibility-number) property of the annotation enables or disables the visibility of annotation.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs33/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs33/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs33" %}

The fill, border, and opacity appearances of the text can also be customized with appearance specific properties of annotation. The following code illustrates how to customize background, opacity, and border of the annotation.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs34/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs34/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs34" %}

## Interaction

Diagram allows annotation to be interacted by selecting, dragging, rotating, and resizing. Annotation interaction is disabled, by default. You can enable annotation interaction with the [`constraints`](./constraints#Annotation-Constraints) property of annotation. You can also curtail the services of interaction by enabling either selecting, dragging, rotating, or resizing individually with the respective constraints property of annotation. The following code illustrates how to enable annotation interaction.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs35/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs35/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs35" %}

## Edit

Diagram provides support to edit an annotation at runtime, either programmatically or interactively. By default, annotation is in view mode. But it can be brought to edit mode in two ways;

* Programmatically
By using [`startTextEdit`](../api/diagram/#startTextEdit) method, edit the text through programmatically.

* Interactively
    1. By double-clicking the annotation.
    2. By selecting the item and pressing the F2 key.

Double-clicking any annotation will enables editing and the node enables first annotation editing. When the focus of editor is lost, the annotation for the node is updated. When you double-click on the node/connector/diagram model, the [`doubleClick`](../api/diagram/#doubleClick--emittypeidoubleClickeventargs) event gets triggered.

## Read-only annotations

Diagram allows to create read-only annotations. You have to set the read-only property of annotation to enable/disable the read-only [`constraints`](../api/diagram/annotationModel#constraints-annotationconstraints). The following code illustrates how to enable read-only mode.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs36/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs36/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs36" %}

## Drag Limit

* The diagram control now supports defining the [`dragLimit`](../api/diagram/annotationModel#dragLimit) to the label while dragging from the connector and also update the position to the nearest segment offset.

* You can set the value to dragLimit [`left`](../api/diagram/marginModel#left), [`right`](../api/diagram/marginModel#right), [`top`](../api/diagram/marginModel#top), and [`bottom`](../api/diagram/marginModel#bottom) properties which allow the dragging of connector labels to a certain limit based on the user defined values.

* By default, drag limit will be disabled for the connector. It can be enabled by setting connector constraints as drag.

* The following code illustrates how to set a dragLimit for connector annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs37/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs37/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs37" %}

## Multiple annotations

You can add any number of annotations to a node or connector. The following code illustrates how to add multiple annotations to a node.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs38/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs38/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs38" %}

## Constraints

The constraints property of annotation allows you to enable/disable certain annotation behaviors. For instance, you can disable annotation editing.
