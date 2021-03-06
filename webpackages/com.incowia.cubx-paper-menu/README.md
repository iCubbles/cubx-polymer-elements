# cubx-paper-menu component
This component wraps the [`paper-menu`](https://elements.polymer-project.org/elements/paper-menu) Polymer element, using the [`paper-item`](https://elements.polymer-project.org/elements/paper-item) and 
[`paper-submenu`](https://elements.polymer-project.org/elements/paper-menu?active=paper-submenu) elements. 

This component exposes the `paper-menu` [properties](https://elements.polymer-project.org/elements/paper-menu#properties) as input slots, excepting those which are _read only_ properties. Additionally,
this component includes the following input slots: 

1. **id**: id for the `paper-menu` contained by this component.
6. **menuItems**: array of the menuItems that should be contained by the menu.
7. **menuItemToAdd**: a menuItem object to be added to the map.
10. **menuItemToRemove**: a menuItem object to be removed from the map.

An the following output slots:

1. **lastId**: last generated id (generated when the id of an element to be added is not provided).
2. **menuItems**: array of the menuItems that should be contained by the menu.
[//]: # (3. **selectedMenuItem**: current selected menuItem (same value as the [selectedItem](https://elements.polymer-project.org/elements/paper-menu#property-selectedItem) property of the paper-menu))
4. **selectedMenuItems**: current selected menuItems (same value as the [selectedItems](https://elements.polymer-project.org/elements/paper-menu#property-selectedItems) property of the paper-menu)
5. **selectedMenuValues**: current selected menuValues (same value as the [selectedValues](https://elements.polymer-project.org/elements/paper-menu#property-selectedValues) property of the paper-menu, by default the `index` of the items are returned, this can be changed giving a value to the `attrForSelected` slot).

## Docs
The generated documentation for this component is available [here](https://cubbles.world/sandbox/com.incowia.cubx-paper-menu@0.1.0-SNAPSHOT/cubx-paper-menu/docs/index.html)

## MenuItem
A MenuItem represent an item or a submenu. MenuItems can be added to the menu using the `menuItems` slot. Additionally, they can be added individually using the `menuItemToAdd` slot. They can be also removed individually using the `menuItemToRemove` slot. 

| Object   | Properties                                                                                                                         |
|----------|------------------------------------------------------------------------------------------------------------------------------------|
| Item     | `active`, `ariaActiveAttribute`, `disabled`, `focused`, `stopKeyboardEventPropagation`, `toggles`, `textContent`, `value` and `id` |
| MenuItem | `disabled`, `focused`, `opened`, `id`, `value`, `triggerItem` and `menuItems`                                                               |

The properties above (excepting `id`, `triggerItem` and `menuItems`) correspond to properties defined for [`paper-item`](https://elements.polymer-project.org/elements/paper-item) and
[`paper-submenu`](https://elements.polymer-project.org/elements/paper-menu?active=paper-submenu). 

When the `id` is not provided, it will be generated during addition. The last generated id can be accessed using the `lastId` slot.


###Examples: 

- Item

```JSON
{"textContent": "Item 1"}
```

- MenuItem
```JSON
{"triggerItem": {"textContent": "Trigger Item Submenu 1"},
 "menuItems": [
	{"textContent": "Item 2.1"}, 
	{"textContent": "Item 2.2"}
  ]}
```

## Use
The html file should contain the component, which can be optionally initialized using the `<cubx-core-slot-init>` tag (available from 
_cubx.core.rte version_ 1.9.0) as follows:

```html
<div cubx-core-crc>
     <cubx-paper-menu cubx-dependency="this/cubx-paper-menu/main">
         <cubx-core-init>
             <cubx-core-slot-init slot="menuItems">[{"textContent": "Item 1", "value": "Item 1"},{"textContent": "Item 2", "value": "Item 2"}]</cubx-core-slot-init>
             <cubx-core-slot-init slot="attrForSelected">"value"</cubx-core-slot-init>
         </cubx-core-init>
     </cubx-paper-menu>
</div>
```

And the component can be also manipulated from Javascript as follows:

```javascript
var paperMenuComponent = document.querySelector('cubx-paper-menu');

var menuItem = {
 "triggerItem": {"textContent": "Trigger Item Submenu 2"},
 "menuItems": [
	{"textContent": "Item 3.1"}
  ]
}
paperMenuComponent.setMenuItemToAdd(menuItem);
menuItem.id = paperMenuComponent.getLastId();
...
paperMenuComponent.setMenuItemToRemove(menuItem);
```

## Demos
1. [**cubx-paper-menu**](https://cubbles.world/sandbox/com.incowia.cubx-paper-menu@0.1.0-SNAPSHOT/cubx-paper-menu/demo/index.html): Simple demo show the use `cubx-paper-menu`. Links: [Sources](https://github.com/iCubbles/cubx-polymer-elements/tree/master/webpackages/com.incowia.cubx-paper-menu)
2. [**World places**](https://cubbles.world/sandbox/com.incowia.demo.cubx-polymer-elements-demos@0.1.0-SNAPSHOT/world-places/demo/index.html): Demo showing a compound component that has a `cubx-paper-menu` as a member, to add some markers of differente cities of the world to a `cubx-google-map` component. Links: [Sources](https://github.com/iCubbles/cubx-polymer-elements-demos/tree/master/webpackages/com.incowia.demo.cubx-polymer-elements-demos), [Compound component docs](https://cubbles.world/sandbox/com.incowia.demo.cubx-polymer-elements-demos@0.1.0-SNAPSHOT/world-places/docs/index.html)
