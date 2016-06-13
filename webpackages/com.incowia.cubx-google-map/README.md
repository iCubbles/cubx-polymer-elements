# cubx-google-map component
This component wraps the [`google-map`](https://elements.polymer-project.org/elements/google-map),using the [`google-map-marker`](https://elements.polymer-project.org/elements/google-map?active=google-map-marker),
[`google-map-directions`](https://elements.polymer-project.org/elements/google-map?active=google-map-directions) and [`google-map-poly`](https://github.com/GoogleWebComponents/google-map/blob/master/google-map-poly.html) elements. 

This component exposes the `google-map` properties as input slots, excepting those which are _read only_ properties. Additionally,
this component includes the following input slots: 

1. **id**: id for the `google-map` contained by this component.
2. **height**: height for the `google-map` contained by this component.
3. **width**: width for the `google-map` contained by this component.
4. **markers**: array containing the markers that should be contained by the map.
5. **directions**: array containing the directions that should be contained by the map.
6. **polys**: array containing the polygons that should be contained by the map.
7. **markerToAdd**: a marker object to be added to the map.
8. **directionsToAdd**: a directions object to be added to the map.
9. **polyToAdd**: a poly object to be added to the map.
10. **markerToRemove**: a marker object to be removed from the map.
11. **directionsToRemove**: a directions object to be removed to the map.
12. **polyToRemove**: a poly object to be removed to the map.
13. **lastId**: last generated id (generated when the id of an element to be added is not provided).

## Markers, Directions and Polys
Markers, directions and polys of the map can be added to the map using the `markers`, `directions` and `polys` input slots. Additionally, they can be added individually using the `markerToAdd`, `directionsToAdd` and `polyToAdd` input slots. They can be also removed individually using the `markerToRemove`, `directionsToRemove` and `polyToRemove` input slots. 

| Object     | Properties                                                                                                                                                           |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Marker     | `icon`, `latitude`, `longitude`, `title`, `zIndex`, `animation`,`draggable` and `id`                                                                                 |
| Directions | `startAddress`, `endAddress`, `travelMode`, `waypoints` and `id`                                                                                                     |
| Poly       | `closed`, `draggable`, `editable`, `fillColor`, `fillOpacity`, `geodesic`, `icons`, `strokeColor`, `strokeOpacity`, `strokePosition`, `strokeWeight`, `zIndex`, `id` |

The properties above (excepting`id`) correspond to properties defined for [`google-map-marker`](https://elements.polymer-project.org/elements/google-map?active=google-map-marker),
[`google-map-directions`](https://elements.polymer-project.org/elements/google-map?active=google-map-directions) and
[`google-map-poly`](https://github.com/GoogleWebComponents/google-map/blob/master/google-map-poly.html). 

When the `id` is not provided, it will be generated during addition. The last generated id can be accessed using the `lastId` slot.

## Docs
The generated documentation for this component is available [here](https://cubbles.world/sandbox/com.incowia.cubx-google-map@1.0.0-SNAPSHOT/cubx-google-map/docs/index.html)

## Use
The html file should contain the component, which can be optionally initialized using the `<cubx-core-slot-init>` tag (available from 
_cubx.core.rte version_ 1.9.0) as follows:

```html
<div cubx-core-crc>
     <cubx-google-map cubx-dependency="this/cubx-google-map/main">
        <cubx-core-init>
             <cubx-core-slot-init slot="id">"myCubxGoogleMap"</cubx-core-slot-init>
             <cubx-core-slot-init slot="zoom">6</cubx-core-slot-init>
             <cubx-core-slot-init slot="mapType">"satellite"</cubx-core-slot-init>
         </cubx-core-init>
     </cubx-google-map>
</div>
```

And the component can be also manipulated from Javascript as follows:

```javascript
var googleMapComponent = document.querySelector('cubx-google-map');
googleMapComponent.setMarkers([
	{
		latitude: 37.779,
		longitude: -122.3892,
		draggable: true,
		animation: 'BOUNCE',
		title: 'Marker One',
		id: 'myMarker1'
	},
	{
		latitude: 37.804,
		longitude: -122.2711,
		draggable: false,
		animation: 'DROP',
		title: 'Marker Two',
		id: 'myMarker2'
	}
]);

...
var marker = {
    latitude: 37.979,
    longitude: -122.6892,
    title: 'Marker Three'
}
googleMapComponent.setMarkerToAdd(marker);
marker.id = googleMapComponent.getLatsId();
...
googleMapComponent.setMarkerToRemove(marker);
```

## Demos
1. [**cubx-google-map**](https://cubbles.world/sandbox/com.incowia.cubx-google-map@1.0.0-SNAPSHOT/cubx-google-map/demo/index.html): 
a simple demo to show the use of `cubx-google-map`. Links: 
[Sources](https://github.com/iCubbles/cubx-polymer-elements/blob/master/webpackages/com.incowia.cubx-google-map/cubx-google-map/demo/index.html).

2. [**German States**](https://cubbles.world/sandbox/com.incowia.cubx-google-map@1.0.0-SNAPSHOT/cubx-google-map/germanStatesDemo/index.html): a demo that uses Polys (data loaded from a kml file) to visualize Germany's states. 
Links: [Sources](https://github.com/iCubbles/cubx-polymer-elements/blob/master/webpackages/com.incowia.cubx-google-map/cubx-google-map/germanStatesDemo/index.html).

 * [**German States (Only Cubbles)**](https://cubbles.world/sandbox/com.incowia.demo.cubx-polymer-elements-demos@0.1.0-SNAPSHOT/german-states/demo/index.html) the same demo from above but this time as a compound component using the [`cubx-checkbox` component](https://github.com/iCubbles/base-html-components) and the `cubx-google-map` as memebers. Links: [Sources](https://github.com/iCubbles/cubx-polymer-elements-demos/tree/master/webpackages/com.incowia.demo.cubx-polymer-elements-demos), [Compound component docs](https://cubbles.world/sandbox/com.incowia.demo.cubx-polymer-elements-demos@0.1.0-SNAPSHOT/german-states/docs/index.html).

3. [My location app](https://cubbles.world/sandbox/com.incowia.demo.cubx-polymer-elements-demos@0.1.0-SNAPSHOT/my-location/index.html): Application to show current location on a `cubx-google-map`. Links: [Sources](https://github.com/iCubbles/cubx-polymer-elements-demos/tree/master/webpackages/com.incowia.demo.cubx-polymer-elements-demos)
