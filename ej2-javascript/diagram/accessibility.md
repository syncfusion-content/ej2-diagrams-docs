---
layout: post
title: Accessibility in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Diagram control

Diagram provides built-in compliance with the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices/) specifications. WAI-ARIA Accessibility supports are achieved through the attributes like `aria-label`. It helps to provides information about elements in a document for assistive technology.

The accessibility compliance for the diagram component is outlined below.

| Accessibility Criteria                                                              | Compatibility                                                                        |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards)                 | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards)              | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support)              | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support)              | <img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> |
| [Color Contrast](../common/accessibility#color-contrast)                            | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support)              | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support)  | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="intermediate"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility)  | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The Diagram component followed the [WAI-ARIA](?) patterns to meet the accessibility. The following ARIA attributes are used in the Diagram component:

| Attributes | Purpose |
| --- | --- |
| `aria-label` | Provides an accessible name for the Diagram Objects. |

## Aria-label
Attribute provides the text label with some default description for below elements in diagram.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Element</b></td>
<td><b>Default description</b></td>
</tr>
<tr>
<td>ResizeNorthWest</td>
<td>Thumb to resize the selected object on the top-left corner.</td>
</tr>
<tr>
<td>ResizeNorthEast</td>
<td>Thumb to resize the selected object on the top-right side direction.</td>
</tr>
<tr>
<td>ResizeSouthWest</td>
<td>Thumb to resize the selected object on the bottom-left side direction.</td>
</tr>
<tr>
<td>ResizeSouthEast</td>
<td>Thumb to resize the selected object on the bottom-right side direction.</td>
</tr>
<tr>
<td>ResizeNorth</td>
<td>Thumb to resize the selected object on the top side direction.</td>
</tr>
<tr>
<td>ResizeSouth</td>
<td>Thumb to resize the selected object on the bottom side direction.</td>
</tr>
<tr>
<td>ResizeWest</td>
<td>Thumb to resize the selected object on the left side direction.</td>
</tr>
<tr>
<td>ResizeEast</td>
<td>Thumb to resize the selected object on the right side direction.</td>
</tr>
<tr>
<td>ConnectorSourceThumb</td>
<td>Thumb to move the source point of the connector.</td>
</tr>
<tr>
<td>ConnectorTargetThumb</td>
<td>Thumb to move the target point of the connector.</td>
</tr>
<tr>
<td>RotateThumb</td>
<td>Thumb to rotate the selected object.</td>
</tr>
</table>


### Mobile device support

Syncfusion Diagram component are more user-friendly and accessible to individuals using mobile devices, including those with disabilities. These are designed to be responsive, adaptable to various screen sizes and orientations, and touch-friendly.

### Screen Reader Support

The Diagram component supports and its information was dictated properly by the screen readers based on the ARIA attributes and content.

### Keyboard navigation support

Syncfusion Diagram component support keyboard navigation, allowing users who rely on alternate methods to effortlessly navigate and interact with the component.

## Keyboard interaction

The Diagram component followed the [keyboard interaction](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Diagram component.

| **Command** | **Action** |
| --- | --- |
| Ctrl + A | Select All |
| Ctrl + X | Cut |
| Ctrl + C |Copy |
| Ctrl + V | Paste |
| Ctrl + Z | Undo |
| Ctrl + Y | Redo |
| Delete | Delete |
| <kbd>Up Arrow </kbd> | Move selected object to up |
| <kbd>Down Arrow</kbd> | Move selected object to down |
| <kbd>Left Arrow</kbd> | Move selected object to left |
| <kbd>Right Arrow</kbd> | Move selected object to right |
| <kbd>Enter</kbd> | Start Annotation Edit |
| <kbd>Escape</kbd> | End Annotation Edit |
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


## Ensuring accessibility

The Diagram component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Diagram component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/diagram.html) in a new window to evaluate the accessibility of the Diagram component with accessibility tools.

## See also

- [Accessibility in Syncfusion Javascript components](../common/accessibility)
