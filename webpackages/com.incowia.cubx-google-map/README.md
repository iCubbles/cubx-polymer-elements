# cubx-google-map component
This component wraps the `google maps` [Polymer elements](https://elements.polymer-project.org/): 
[`google-map`](https://elements.polymer-project.org/elements/google-map), 
[`google-map-marker`](https://elements.polymer-project.org/elements/google-map?active=google-map-marker),
[`google-map-directions`](https://elements.polymer-project.org/elements/google-map?active=google-map-directions) and
[`google-map-poly`](https://github.com/GoogleWebComponents/google-map/blob/master/google-map-poly.html). 

This component exposes the `google-map` properties as input slots, excepting those which are _read only_ properties. Additionaly,
this component icnludes the following input slots: 

1. **id**: id for the `google-map` contained by this component.
2. **height**: height for the `google-map` contained by this component.
3. **width**: width for the `google-map` contained by this component.
4. **markers**: array containing the markers to be added to the map.
5. **directions**: array containing the directions to be added to the map.
6. **polys**: array containing the polygons to be added to the map.

## Markers, Directions and Polys
A lis of markers, directions and polys can be added to the map using the `markers`, `directions` and `polys` input slots. Additionally, 
they can be added inidividually using the `addMarker(marker)`, `addDirections(directions)` and `addPolys(poly)` methods. They can also 
be removed using the `removeMarker(marker)`, `removeDirections(directions)` and `removePolys(poly)` methods. 

1. A `marker` is an object that can have the following properties: `icon`, `latitude`, `longitude`, `title`, `zIndex`, `animation`,
`draggable` and `id`. 
2. A `directions` is an object that can have the following properties: `startAddress`, `endAddress`, `travelMode`, `waypoints` 
and `id`
3. A `poly` is an object that can have the following properties: `closed`, `draggable`, `editable`, `fillColor`, `fillOpacity`, 
`geodesic`, `icons`, `strokeColor`, `strokeOpacity`, `strokePosition`, `strokeWeight`, `zIndex`, `id`


These (excepting`id`) properties correspond to properties defined for [`google-map-marker`](https://elements.polymer-project.org/elements/google-map?active=google-map-marker),
[`google-map-directions`](https://elements.polymer-project.org/elements/google-map?active=google-map-directions) and
[`google-map-poly`](https://github.com/GoogleWebComponents/google-map/blob/master/google-map-poly.html). 

When the `id` is not provided, it will be generated during addition. The addition methods will return the added marker (e.g. with 
the generated id).

## Use
The html file should contain the component, which is here initialized using the `<cubx-core-slot-init>` tag (available from 
_cubx.core.rte version_ 1.9.0).

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

And the component can be also manipulated from javascript as follows:

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
    title: 'Marker Three',
    id: 'myMarker3'
}
googleMapComponent.addMarker(marker);
...
googleMapComponent.removeMarker(marker);
```

## Demos
[Here](https://cubbles.world/sandbox/com.incowia.cubx-google-map@1.0.0-SNAPSHOT/cubx-google-map/demo/index.html) 
a simple demo is avaliable. And its source code can be found
[here](https://github.com/iCubbles/cubx-polymer-elements/blob/master/webpackages/com.incowia.cubx-google-map/cubx-google-map/demo/index.html).

And [here](https://cubbles.world/sandbox/com.incowia.cubx-google-map@1.0.0-SNAPSHOT/cubx-google-map/germanStatesDemo/index.html) 
a demo that uses Polys (data loaded from a kml file) to visualize Germany's states can be found. 
The source code is available 
[here](https://github.com/iCubbles/cubx-polymer-elements/blob/master/webpackages/com.incowia.cubx-google-map/cubx-google-map/germanStatesDemo/index.html).
