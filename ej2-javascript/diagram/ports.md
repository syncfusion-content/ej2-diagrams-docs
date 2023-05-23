---
layout: post
title: Ports in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Ports in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Ports 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ports in ##Platform_Name## Diagram control

Diagram provides support to define custom ports for making connections.

![Port](images/Port1.png)

<!-- markdownlint-disable MD033 -->

When a connector is connected between two nodes, its end points are automatically docked to the node’s nearest boundary as shown in the following image.

![Port to Port](images/port2.png)

Ports act as the connection points of the node and allows to create connections with only those specific points as shown in the following image.

![Port Image](images/Port3.png)

## Create port

## Add ports when initializing nodes

To add a connection port, define the port object and add it to node’s ports collection. The `offset` property of port accepts an object of fractions and used to determine the position of ports. The following code illustrates how to add ports when initializing the node.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/ports-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/ports-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/ports-cs1" %}

## Add ports at runtime

Add ports at runtime by using the client-side method [`addPorts`](../api/diagram#addPorts). The following code illustrates how to add ports to node at runtime.

The port’s ID property is used to define the unique ID for the port and its further used to find the port at runtime.
If ID is not set, then default ID is automatically set.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/ports-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/ports-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/ports-cs2" %}

## Remove ports at runtime

Remove ports at runtime by using client-side method [`removePorts`](../api/diagram#removePorts). Refer to the following example which shows how to remove ports at runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/ports-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/ports-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/ports-cs3" %}

## Update port at runtime

You can change any port properties at runtime and update it through the client-side method [`dataBind`](../api/diagram#dataBind).

The following code example illustrates how to change the port properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/ports-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/ports-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/ports-cs4" %}

## Appearance

* The shape of port can be changed by using its shape property. To explore the different types of port shapes, refer to Port Shapes. If you need to render a custom shape, then you can set shape as path and define path using path data property of port.

* The appearance of ports can be customized by using [`strokeColor`](../api/diagram/port#strokeColor-string), [`strokeWidth`](../api/diagram/port#strokeWidth-string), and [`fill`](../api/diagram/port#fill-string) properties of the port.

* Customize the port size by using the [`width`](../api/diagram/port#width-number) and [`height`](../api/diagram/port#height-number) properties of port.

* The ports [`visibility`](../api/diagram/port#visibility-boolean) property allows you to define, when the port should be visible.

The following code illustrates how to change the appearance of port.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/ports-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/ports-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/ports-cs5" %}

## Offset

The offset property of port is used to align the port based on fractions. 0 represents top/left corner, 1 represents bottom/right corner, and 0.5 represents half of width/height.

## Constraints

The constraints property allows to enable/disable certain behaviors of ports. For more information about port constraints, refer to [`Port Constraints`](../api/diagram/port#constraints-portconstraints).
