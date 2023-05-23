---
layout: post
title: Page settings in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Page settings in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Page settings 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Page settings in ##Platform_Name## Diagram control

Page settings enable to customize the appearance, width, and height of the diagram page.

## Page size and appearance

* The size and appearance of the diagram pages can be customized with the page settings property.

* The [`width`](../api/diagram/pageSettings#width-number) and [`height`](../api/diagram/pageSettings#height-number) properties of page settings define the size of the page and based on the size, the [`orientation`](../api/diagram/pageSettings#orientation-PageOrientation) will be set for the page. In addition to that, the appearance of the page can be customized with [`source`](../api/diagram/background#source-string) and set of appearance specific properties.

* The [`color`](../api/diagram/background#color-string) property is used to customize the background color and border color of the page.

* The [`margin`](../api/diagram/pageSettings#margin-MarginModel) property is used to define the page margin.

* To explore those properties, refer to [`Page Settings`](../api/diagram/pageSettings).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/pagesettings-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/pagesettings-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/pagesettings-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/pagesettings-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/pagesettings-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/pagesettings-cs1" %}
{% endif %}

## Set background image

Stretch and align the background image anywhere over the diagram area. The [`source`](../api/diagram/background#source-string) property of [`background`](../api/diagram/pageSettings#background-BackgroundModel) allows you to set the path of the image. The [`scale`](../api/diagram/background#scale-string) and the [`align`](../api/diagram/background#align-ImageAlignment) properties help to stretch/align the background images.

The following code illustrates how to stretch and align the background image.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/pagesettings-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/pagesettings-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/pagesettings-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/pagesettings-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/pagesettings-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/pagesettings-cs2" %}
{% endif %}

## Multiple page and page breaks

When multiple page is enabled, the size of the page dynamically increases or decreases in multiples of page width and height and completely fits diagram within the page boundaries. Page breaks is used as a visual guide to see how pages are split into multiple pages.

The [`multiplePage`](../api/diagram/pageSettings#multiplepage-boolean) and [`showPageBreak`](../api/diagram/pageSettings#showpagebreaks-boolean) properties of page settings allow you to enable/disable multiple pages and page breaks respectively.

The following code illustrates how to enable multiple page and page break lines.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/pagesettings-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/pagesettings-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/pagesettings-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/pagesettings-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/pagesettings-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/pagesettings-cs3" %}
{% endif %}

## Boundary constraints

The diagram provides support to restrict/customize the interactive region, out of which the elements cannot be dragged, resized, or rotated. The [`boundaryConstraints`](../api/diagram/pageSettings#boundaryconstraints-BoundaryConstraints) property of page settings allows you to customize the interactive region. To explore the boundary constraints, refer to [`Boundary Constraints`](../api/diagram/boundaryConstraints).

The following code example illustrates how to define boundary constraints with respect to the page.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/pagesettings-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/pagesettings-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/pagesettings-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/pagesettings-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/pagesettings-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/pagesettings-cs4" %}
{% endif %}