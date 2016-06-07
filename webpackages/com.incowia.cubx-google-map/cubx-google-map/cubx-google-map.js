(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   * Access the Cubbles-Component-Model:
   * > Access slot values:
   * slot 'a': this.getA(); | this.setA(value)
   */
  CubxPolymer({
    is: 'cubx-google-map',

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    attached: function () {
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function () {
      this.cubxIsReady = true;
      this.setMarkers([]);
      this.setDirections([]);
      this.setPolys([]);
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'additionalMapOptions' has changed, the google-map
     * element's property with the same name is updated
     */
    modelAdditionalMapOptionsChanged: function (additionalMapOptions) {
      this.$$('#' + this.getId()).additionalMapOptions = additionalMapOptions;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'apiKey' has changed, the apiKey property of the
     * google-map element is updated
     */
    modelApiKeyChanged: function (apiKey) {
      this.$$('#' + this.getId()).apiKey = apiKey;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'clickEvents' has changed, the clickEvents property of
     * the google-map element is updated
     */
    modelClickEventsChanged: function (clickEvents) {
      this.$$('#' + this.getId()).clickEvents = clickEvents;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'clientId' has changed, the clientId property of the
     * google-map element is updated
     */
    modelClientIdChanged: function (clientId) {
      this.$$('#' + this.getId()).clientId = clientId;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'disableDefaultUi' has changed, the disableDefaultUi
     * property of the google-map element is updated
     */
    modelDisableDefaultUiChanged: function (disableDefaultUi) {
      this.$$('#' + this.getId()).disableDefaultUi = disableDefaultUi;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'disableZoom' has changed, the disableZoom property of
     * the google-map element is updated
     */
    modelDisableZoomChanged: function (disableZoom) {
      this.$$('#' + this.getId()).disableZoom = disableZoom;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'dragEvents' has changed, the dragEvents property of
     * the google-map element is updated
     */
    modelDragEventsChanged: function (dragEvents) {
      this.$$('#' + this.getId()).dragEvents = dragEvents;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'fitToMarkers' has changed, the fitToMarkers property of
     * the google-map element is updated
     */
    modelFitToMarkersChanged: function (fitToMarkers) {
      this.$$('#' + this.getId()).fitToMarkers = fitToMarkers;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'kml' has changed, the kml property of the
     * google-map element is updated
     */
    modelKmlChanged: function (kml) {
      this.$$('#' + this.getId()).kml = kml;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'language' has changed, the language property of the
     * google-map element is updated
     */
    modelLanguageChanged: function (language) {
      this.$$('#' + this.getId()).language = language;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'latitude' has changed, the latitude property of the
     * google-map element is updated
     */
    modelLatitudeChanged: function (latitude) {
      this.$$('#' + this.getId()).latitude = latitude;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'longitude' has changed, the longitude property of the
     * google-map element is updated
     */
    modelLongitudeChanged: function (longitude) {
      this.$$('#' + this.getId()).longitude = longitude;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'mapType' has changed, the mapType property of the
     * google-map element is updated
     */
    modelMapTypeChanged: function (mapType) {
      this.$$('#' + this.getId()).mapType = mapType;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'maxZoom' has changed, the maxZoom property of the
     * google-map element is updated
     */
    modelMaxZoomChanged: function (maxZoom) {
      this.$$('#' + this.getId()).maxZoom = maxZoom;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'minZoom' has changed, the minZoom property of the
     * google-map element is updated
     */
    modelMinZoomChanged: function (minZoom) {
      this.$$('#' + this.getId()).minZoom = minZoom;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'noAutoTilt' has changed, the noAutoTilt property of the
     * google-map element is updated
     */
    modelNoAutoTiltChanged: function (noAutoTilt) {
      this.$$('#' + this.getId()).noAutoTilt = noAutoTilt;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'signedIn' has changed, the signedIn property of the
     * google-map element is updated
     */
    modelSignedInChanged: function (signedIn) {
      this.$$('#' + this.getId()).signedIn = signedIn;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'singleInfoWindow' has changed, the singleInfoWindow
     * property of the google-map element is updated
     */
    modelSingleInfoWindowChanged: function (singleInfoWindow) {
      this.$$('#' + this.getId()).singleInfoWindow = singleInfoWindow;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'styles' has changed, the styles property of the
     * google-map element is updated
     */
    modelStylesChanged: function (styles) {
      this.$$('#' + this.getId()).styles = styles;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'version' has changed, the version property of the
     * google-map element is updated
     */
    modelVersionChanged: function (version) {
      this.$$('#' + this.getId()).version = version;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'zoom' has changed, the zoom property of the google-map
     * element is updated
     */
    modelZoomChanged: function (zoom) {
      this.$$('#' + this.getId()).zoom = zoom;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'width' has changed, the width property of the google-map
     * element is updated
     */
    modelWidthChanged: function (width) {
      this.$$('#' + this.getId()).style.width = width;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'height' has changed, the height of the google-map
     * element is updated
     */
    modelHeightChanged: function (height) {
      this.$$('#' + this.getId()).style.height = height;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'markers', add the markers to the google-map
     */
    modelMarkersChanged: function (markers) {
      if(this.getMarkers().length > 0) {
        this.clearMarkers();
      }
      var self = this;
      markers.forEach(function (marker) {
        self.addMarker(marker);
      });
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'directions', add the directions to the google-map
     */
    modelDirectionsChanged: function (directions) {
      if (this.getDirections().length > 0) {
        this.setDirections([]);
      }
      var self = this;
      directions.forEach(function (direction) {
        self.addMapDirections(direction);
      });
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'polys', add the polys to the google-map
     */
    modelPolysChanged: function (polys) {
      if (this.getDirections().length > 0) {
        this.setDirections([]);
      }
      var self = this;
      polys.forEach(function (poly) {
        self.addPoly(poly);
      });
    },

    /**
     * Clear all markers from the map
     */
    clearMarkers: function () {
      this.$$('#' + this.getId()).clear();
    },

    /**
     * Explicitly resizes the map, updating its center. This is useful if the map does not show after you have unhidden
     * it.
     */
    resize: function () {
      this.$$('#' + this.getId()).resize();
    },

    /**
     * Add a new google-map-marker to the map.
     * @param {object} marker - Object to be used as base to create the google-map-marker element to be added
     * @return {Element} - Added marker
     */
    addMarker: function (marker) {
      var markerElement = this._createMarkerElement(marker);
      this._appendElementToTheMap(markerElement, this.getMarkers());
      if (!marker.id) {
        marker.id = markerElement.id;
      }
      return marker;
    },

    /**
     * Add a new google-map-directions to the map.
     * @param {object} directions - Object to be used as base to create the google-map-directions element to be added
     * @return {Element} - Added directions
     */
    addMapDirections: function (directions) {
      var newDirections = this._createMapDirectionsElement(directions);
      this._appendElementToTheMap(newDirections, this.getDirections());
      if (!directions.id) {
        directions.id = newDirections.id;
      }
      return directions;
    },

    /**
     * Add a new google-map-poly to the map.
     * @param {object} poly - Object to be used as base to create the google-map-poly element to be added
     * @return {Element} - Added poly
     */
    addPoly: function (poly) {
      var newPoly = this._createMapPolyElement(poly);
      this._appendElementToTheMap(newPoly, this.getPolys());
      if (!poly.id) {
        poly.id = newPoly.id;
      }
      return poly;
    },

    /**
     * Remove a 'marker' from the map and its list
     * @param {object} marker - Object that represents the 'marker' to be removed
     */
    removeMarker: function (marker) {
      this._removeChild(marker, this.getMarkers());
    },

    /**
     * Remove a 'directions' from the map and its list
     * @param {object} directions - Object that represents the 'directions' to be removed
     */
    removeDirections: function (directions) {
      this._removeChild(directions, this.getDirections());
    },

    /**
     * Remove a 'poly' from the map and its list
     * @param {object} poly - Object that represents the 'poly' to be removed
     */
    removePoly: function (poly) {
      this._removeChild(poly, this.getPolys());
    },

    /**
     * Create a google-map-marker element using an object, that can have the following properties: 'icon', 'latitude',
     * 'longitude', 'title', 'zIndex', 'animation', 'draggable', 'id'
     * @param {object} marker - Object to be used as base to create the google-map-marker element
     * @returns {Element} - google-map-marker element
     * @private
     */
    _createMarkerElement: function (marker) {
      var validKeys = ['icon', 'latitude', 'longitude', 'title', 'zIndex', 'animation', 'draggable', 'id'];
      var markerEl = this._createPolymerElement(marker, 'google-map-marker', validKeys);
      if (marker.title) {
        var titleSpan = document.createElement('span');
        titleSpan.textContent = marker.title;
        markerEl.appendChild(titleSpan);
      }
      return markerEl
    },

    /**
     * Create a google-map-directions element using an object, that can have the following properties: 'startAddress',
     * 'endAddress', 'travelMode', 'wayPoints', 'id'
     * @param {object} directions - Object to be used as base to create the google-map-directions element
     * @returns {Element} - google-map-directions element
     * @private
     */
    _createMapDirectionsElement: function (directions) {
      var validKeys = ['startAddress', 'endAddress', 'travelMode', 'waypoints', 'id'];
      return this._createPolymerElement(directions, 'google-map-directions', validKeys);
    },

    /**
     * Create a google-map-poly element using an object, that can have the following properties: 'closed', 'draggable',
     * 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icons', 'strokeColor', 'strokeOpacity', 'strokePosition',
     * 'strokeWeight', 'zIndex', 'points', 'id'.
     * @param {object} poly - Object to be used as base to create the google-map-poly element
     * @returns {Element} - google-map-poly element
     * @private
     */
    _createMapPolyElement: function (poly) {
      var validKeys = ['closed', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icons', 'strokeColor',
        'strokeOpacity', 'strokePosition', 'strokeWeight', 'zIndex', 'id'];
      var polyEl = this._createPolymerElement(poly, 'google-map-poly', validKeys);
      if (poly.points) {
        var pointEl;
        var self = this;
        poly.points.forEach(function (point) {
          pointEl = self._createPolymerElement(point, 'google-map-point', ['latitude', 'longitude']);
          Polymer.dom(polyEl).appendChild(pointEl);
        });
      }
      return polyEl;
    },

    /**
     * Create a marker element using an object 'baseElement', that can have the properties contain in 'validProperties'
     * @param {object} baseElement - Object to be used to create the polymer element
     * @param {string} tagName - Tag name of the polymer element to be created
     * @param {string[]} validProperties - Valid properties for the polymer element
     * @return {Element} - Created element
     * @private
     */
    _createPolymerElement: function (baseElement, tagName, validProperties) {
      var element = document.createElement(tagName);
      validProperties.forEach(function (key) {
        if (baseElement[key]) {
          element[key] = baseElement[key];
        }
      });
      return element;
    },

    /**
     * Append a element to the map using the Polymer DOM
     * @param {object} element - Child to be append to the map
     * @param {Element[]} elementList - List that contains the element (markers, directions, polys)
     * @private
     */
    _appendElementToTheMap: function (element, elementList) {
      if (!element.id) {
        element.id = this.getId() + '_' + element.tagName + '_' + elementList.length;
      }
      elementList.push(element);
      Polymer.dom(this.$$('#' + this.getId())).appendChild(element);
    },

    /**
     * Remove the children whose element name is 'tagName' from the map
     * @param {string} tagName - Name of the element's tag
     * @private
     */
    _removeChildren: function (tagName) {
      var elements = document.querySelectorAll(tagName);
      for (var i = 0; i < elements.length; i++) {
        this.$$('#' + this.getId()).removeChild(elements[i]);
      }
    },

    /**
     * Remove the given child from the map and the lists that contains it (markers, directions, polys)
     * @param {Element} element - Element to be removed
     * @param {Element[]} elementList - List that contains the element (markers, directions, polys)
     * @private
     */
    _removeChild: function (element, elementList) {
      for (var i = 0; i < elementList.length; i++) {
        if(elementList[i].id && elementList[i].id === element.id) {
          this.$$('#' + this.getId()).removeChild(document.querySelector('#' + element.id));
          elementList.splice(i, 1);
        }
      }
    }
  });
}());
