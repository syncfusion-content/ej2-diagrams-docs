---
layout: post
title: Symbol palette in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Symbol palette in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Symbol palette 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Symbol palette in ##Platform_Name## Diagram control

The **SymbolPalette** displays a collection of palettes. The palette shows a set of nodes and connectors. It allows to drag and drop the nodes and connectors into the diagram.

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD010 -->

## Create symbol palette

The [`width`](../api/diagram/palette#width-number) and [`height`](../api/diagram/palette#height-number) properties of the symbol palette allows to define the size of the symbol palette.

```ts
import {
    SymbolPalette
} from '@syncfusion/ej2-diagrams';

//Initializes the symbol palette

let palette: SymbolPalette = new SymbolPalette({
    width: '100%',
    height: '700px',
});
palette.appendTo('#element');

```

## Add palettes to SymbolPalette

A palette allows to display a group of related symbols and it textually annotates the group with its header. A [`Palettes`](../api/diagram/palette#palettes-PaletteModel[]) can be added as a collection of symbol groups.

The collection of predefined symbols can be added in palettes using the [`symbols`](../api/diagram/palette#symbols-[]) property.

To initialize a palette, define a JSON object with the property [`ID`](../api/diagram/palette#id-string) that is unique ID is set to the palettes.

The following code example illustrates how to define a palette and how its added to symbol palette.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/symbol-palette-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-cs10" %}

## Customize the palette header

Palettes can be annotated with its header texts.

The [`title`](../api/diagram/palette#title-string) displayed as the header text of palette.

The [`expanded`](../api/diagram/palette#expanded-boolean) property of palette allows to expand/collapse its palette items.

The [`height`](../api/diagram/palette#height-number) property of palette sets the height of the symbol group.

The [`iconCss`](../api/diagram/palette#iconCss-string) property sets the content of the symbol group.

The [`description`](../api/diagram/symbolDescription#description) defines the text to be displayed and how that is to be handled in `getSymbolInfo`.

Also, any HTML element into a palette header can be embedded by defining the getSymbolInfo property.
The following code example illustrates how to customize palette headers.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/symbol-palette-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-cs11" %}

## Restrict expansion of the palette panel

The symbol palette panel can be restricted from getting expanded. The [`cancel`] argument of the [`paletteExpanding`] property defines whether the palette's panel should be expanded or collapsed. By default, the panel is expanded. This restriction can be done for each of the palettes in the symbol palette as desired. In the following code example the basic shapes palette is restricted from getting collapsed whereas the swimlane shapes palette can be expanded or collapsed.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/symbol-palette-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-cs12" %}

## Stretch the symbols into the palette

The [`fit`](../api/diagram/symbolInfo#fit-boolean) property defines whether the symbol has to be fit inside the size, that is defined by the symbol palette. For example, when you resize the rectangle in the symbol, ratio of the rectangle size has to be maintained rather changing into square shape. The following code example illustrates how to customize the symbol size.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/symbol-palette-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-cs13" %}

## Add/Remove symbols to palette at runtime

* Symbols can be added to palette at runtime by using public method, [`addPaletteItem`](../api/diagram/palette#addPaletteItem-number).

* Symbols can be removed from palette at runtime by using public method, [`removePaletteItem`](../api/diagram/palette#removePaletteItem-number).

## Customize the size of symbols

The size of the individual symbol can be customized. The [`symbolWidth`](../api/diagram/symbolPaletteModel/#symbolwidth) and  [`symbolHeight`](../api/diagram/symbolPaletteModel/#symbolheight) properties of node enables you to define the size of the symbols. The following code example illustrates how to change the size of a symbol.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/symbol-palette-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-cs14" %}

The [`symbolMargin`](../api/diagram/symbolPaletteModel/#symbolmargin) property is used to create the space around elements, outside of any defined borders.

## Symbol preview

The symbol preview size of the palette items can be customized using [`symbolPreview`](../api/diagram/symbolPreview). The [`width`](../api/diagram/symbolPreview#width-number) and [`height`](../api/diagram/symbolPreview#height-number) properties of SymbolPalette enables you to define the preview size to all the symbol palette items. The [`offset`](../api/diagram/symbolPreview#offset-PointModel) of the dragging helper relative to the mouse cursor.

The following code example illustrates how to change the preview size of a palette item.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/symbol-palette-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-cs15" %}

## Default settings

While adding more number of symbols such as nodes and connectors to the palette, define the default settings for those objects through the [`getNodeDefaults`](../api/diagram/symbolPaletteModel/#getnodedefaults) and the [`getConnectorDefaults`](../api/diagram/symbolPaletteModel/#getconnectordefaults) properties of diagram allows to define the default settings for nodes and connectors.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/symbol-palette-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-cs16" %}

## Adding symbol description for symbols in the palette

The diagram provides support to add symbol description below each symbol of a palette. This descriptive representation of each symbol will enhance the details of the symbol visually. The height and width of the symbol description can also be set individually.
* The property `getSymbolInfo`, can be used to add the symbol description at runtime.
  The following code is an example to set a symbol description for symbols in the palette.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/symbol-palette-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-cs17" %}

## Appearance of symbol description

The appearance of a symbol description in the palette can be customized by changing its `color,` `fontSize,` `fontFamily,` `bold,` `italic,` `textDecoration,`  and `margin.`

The following code is an example to change the color of a symbol description for symbols in the palette.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/symbol-palette-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/symbol-palette-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/symbol-palette-cs18" %}

## Palette interaction

Palette interaction notifies the element enter, leave, and dragging of the symbols into the diagram.

## DragEnter

[`DragEnter`] [`IDragEnterEventArgs`](../api/diagram/iDragEnterEventArgs) notifies, when the element enter into the diagram from symbol palette.

## DragLeave

[`DragLeave`] [`IDragLeaveEventArgs`](../api/diagram/iDragLeaveEventArgs) notifies, when the element leaves from  the diagram.

## DragOver

[`DragOver`] [`IDragOverEventArgs`](../api/diagram/iDragOverEventArgs) notifies, when an element drag over another diagram element.

>Note: The diagram provides support to cancel the drag and drop operation from the symbol palette to the diagram when the ESC key is pressed

## See Also

* [How to add the symbol to the diagram](./nodes)