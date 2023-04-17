---
layout: post
title: Context menu in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Context menu in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Context menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in ##Platform_Name## Diagram control

<!-- markdownlint-disable MD010 -->

In graphical user interface (GUI), a context menu is a type of menu that appears when you perform right-click operation. Nested level of context menu items can be created. Diagram provides some in-built context menu items and allows to define custom menu items through the [`contextMenuSettings`](../api/diagram#contextMenuSettings) property.

## Customize context menu

The [`show`](../api/diagram/contextMenuSettings#show-boolean) property helps you to enable/disable the context menu. Diagram provides some default context menu items to ease the execution of some frequently used commands. The following code illustrates how to enable the default context menu items.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/contextmenu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/contextmenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/contextmenu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/contextmenu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/contextmenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/contextmenu-cs1" %}
{% endif %}

Context menu can be defined for individual node with the desired context menu items.

* Apart from the default context menu items, define some additional context menu items. Those additional items have to be defined and added to the [`items`](../api/diagram/contextMenuSettingsModel#items) property of the context menu.

* Set text and ID for context menu item using the context menu [`text`](../api/diagram/contextMenuItemModel#text-string) and [`ID`](../api/diagram/contextMenuItemModel#id-string) properties respectively.

* Set an image for the context menu item using the context menu [url](../api/diagram/contextMenuItemModel#url) property.

* The [`iconCss`](../api/diagram/contextMenuItemModel#iconCss-string) property defines the class/multiple classes separated by a space for the menu item that is used to include an icon. Menu item can include font icon and sprite image.

* The [`target`](../api/diagram/contextMenuItemModel#target-string) property used to set the target to show the menu item.

* The [`separator`](../api/diagram/contextMenuItemModel#separator-boolean) property defines the horizontal lines that are used to separate the menu items. You cannot select the separators. You can enable separators to group the menu items using the separator property.

The following code example illustrates how to add custom context menu items.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/contextmenu-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/contextmenu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/contextmenu-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/contextmenu-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/contextmenu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/contextmenu-cs2" %}
{% endif %}

To display the custom context menu items alone, set  the [`showCustomMenuOnly`](../api/diagram/contextMenuSettingsModel#showCustomMenuOnly) property to true.

## Template Support for Context menu

* Diagram provides template support for context menu. The context menu items can be customized by using the `contextMenuBeforeItemRender` event. The contextMenuBeforeItemRender event triggers while rendering each menu item.

* In the following sample, the menu item is rendered with key code for specified action in ContextMenu using the template. Here, the key code is specified for the cut and copy at right corner of the menu items by adding a span element in the `contextMenuBeforeItemRender` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/contextmenu-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/contextmenu-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/contextmenu-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/contextmenu-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/contextmenu-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/contextmenu-cs3" %}
{% endif %}

## Context menu events

You would be notified with events, when you try to open the context menu items [`contextMenuOpen`](../api/diagram/diagramBeforeMenuOpenEventArgs#DiagramBeforeMenuOpenEventArgs) and when you click the menu items `contextMenuClick`.The following code example illustrates how to define those events.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/contextmenu-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/contextmenu-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/contextmenu-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/contextmenu-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/contextmenu-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/contextmenu-cs4" %}
{% endif %}