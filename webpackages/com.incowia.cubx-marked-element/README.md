# cubx-marked-element component
This component wraps the [`marked-element`](https://elements.polymer-project.org/elements/marked-element) Polymer element.
`cubx-marked-element` exposes the `marked-element` properties as slots. It includes the following additional slots:

1. **markdownUrl**: url of a MD file whose content will be displayed by the element.
2. **id**: id attribute for the marked-element

## Docs
The generated documentation for this component is available [here](https://cubbles.world/sandbox/com.incowia.cubx-marked-element@0.1.0-SNAPSHOT/cubx-marked-element/docs/index.html)

## Use
The html file should contain the component, which optionally can be initialized using the `<cubx-core-slot-init>` tag (available from
_cubx.core.rte version_ 1.9.0) as follows:

```html
<div cubx-core-crc>
     <cubx-marked-element cubx-dependency="com.incowia.cubx-marked-element@0.1.0-SNAPSHOT/cubx-marked-element/main">
        <cubx-core-init>
             <cubx-core-slot-init slot="markdown">"`Markdown` is _awesome_!"</cubx-core-slot-init>
         </cubx-core-init>
     </cubx-marked-element>
</div>
```

And the component can also be manipulated from Javascript as follows:

```javascript
var cubxMarkedElement = document.querySelector('cubx-marked-element');

cubxMarkedElement.setMarkdownUrl('https://raw.githubusercontent.com/iCubbles/cubx-polymer-elements/master/webpackages/com.incowia.cubx-google-map/README.md');
```

## Demo
1. [Here](https://cubbles.world/sandbox/com.incowia.cubx-marked-element@0.1.0-SNAPSHOT/cubx-marked-element/demo/index.html)
a simple demo is available. And its source code can be found
[here](https://github.com/iCubbles/cubx-polymer-elements/tree/master/webpackages/com.incowia.cubx-marked-element).
