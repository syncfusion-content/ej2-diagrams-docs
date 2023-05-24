---
layout: post
title: Grid lines in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Grid lines in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Grid lines 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Grid lines in ##Platform_Name## Diagram control

Gridlines are the pattern of lines drawn behind the diagram elements. It provides a visual guidance while dragging or arranging the objects on the diagram surface.

The model’s [`snapSettings`](../api/diagram#snapsettings-SnapSettingsModel) property is used to customize the gridlines and control the snapping behavior in the diagram.

## Customize the gridlines visibility

The [`snapSettings.snapConstraints`](../api/diagram/snapSettings#constraints-SnapConstraints) enables you to show/hide the gridlines. The following code example illustrates how to show or hide gridlines.

If you need to enable snapping, then inject snapping module into the diagram.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/gridlines-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/gridlines-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/gridlines-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/gridlines-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/gridlines-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/gridlines-cs1" %}
{% endif %}

To show only horizontal/vertical gridlines or to hide gridlines, refer to [`Constraints`](../api/diagram/snapSettings#constraints-SnapConstraints).

## Appearance

The appearance of the gridlines can be customized by using a set of predefined properties.

* The [`horizontalGridLines`](../api/diagram/snapSettings#horizontalgridlines-GridlinesModel) and the [`verticalGridLines`](../api/diagram/snapSettings#verticalgridlines-GridlinesModel) properties allow to customize the appearance of the horizontal and vertical gridlines respectively.

* The horizontal gridlines [`lineColor`](../api/diagram/gridlines#linecolor-string) and [`lineDashArray`](../api/diagram/gridlines#linedasharray-string) properties are used to customizes the line color and line style of the horizontal gridlines.

* The vertical gridlines [`lineColor`](../api/diagram/gridlines#linecolor-string) and [`lineDashArray`](../api/diagram/gridlines#linedasharray-string) properties are used to customizes the line color and line style of the vertical gridlines.

The following code example illustrates how to customize the appearance of gridlines.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/gridlines-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/gridlines-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/gridlines-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/gridlines-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/gridlines-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/gridlines-cs2" %}
{% endif %}

## Line intervals

Thickness and the space between gridlines can be customized by using horizontal gridlines’s [`linesInterval`](../api/diagram/gridlines#lineintervals-number) and vertical gridlines’s [`linesInterval`](../api/diagram/gridlines#lineintervals-number) properties. In the lines interval collections, values at the odd places are referred as the thickness of lines and values at the even places are referred as the space between gridlines.

The following code example illustrates how to customize the thickness of lines and the line intervals.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/gridlines-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/gridlines-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/gridlines-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/gridlines-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/gridlines-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/gridlines-cs3" %}
{% endif %}

## Snapping

## Snap to lines

This feature allows the diagram objects to snap to the nearest intersection of gridlines while being dragged or resized. This feature enables easier alignment during layout or design.

Snapping to gridlines can be enabled/disabled with the [`snapSettings.snapConstraints`](../api/diagram/snapSettings#constraints-SnapConstraints). The following code example illustrates how to enable/disable the snapping to gridlines.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/gridlines-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/gridlines-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/gridlines-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/gridlines-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/gridlines-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/gridlines-cs4" %}
{% endif %}

## Customization of snap intervals

By default, the objects are snapped towards the nearest gridline. The gridline or position towards where the diagram object snaps can be customized with the horizontal gridlines’s [`snapInterval`](../api/diagram/gridlines#snapintervals-number) and the vertical gridlines’s [`snapInterval`](../api/diagram/gridlines#snapintervals-number) properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/gridlines-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/gridlines-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/gridlines-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/gridlines-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/gridlines-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/gridlines-cs5" %}
{% endif %}

## Snap to objects

The snap to object provides visual cues to assist with aligning and spacing diagram elements. A node can be snapped with its neighboring objects based on certain alignments. Such alignments are visually represented as smart guides.

The [`snapObjectDistance`](../api/diagram/snapSettings/#snapobjectdistance) property allows you to define minimum distance between the selected object and the nearest object.

The [`snapAngle`](../api/diagram/snapSettings/#snapangle) property allows you to define the snap angle by which the object needs to be rotated.

The [`snapConstraints`](../api/diagram/snapSettings/#constraints) property allows you to enable or disable the certain features of the snapping, refer to `snapConstraints`.

The [`snapLineColor`](../api/diagram/snapSettings/#snaplinecolor) property allows you to define the color of the snapline.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/gridlines-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/gridlines-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/gridlines-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/gridlines-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/gridlines-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/gridlines-cs6" %}
{% endif %}