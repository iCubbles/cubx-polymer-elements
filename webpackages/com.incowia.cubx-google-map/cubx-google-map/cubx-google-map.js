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
    _countPolys: 0,
    _countDirections: 0,
    _countMarkers: 0,

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
      this.setMarkers([]);
      this.setDirections([]);
      this.setPolys([]);
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
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'additionalMapOptions' has changed, the google-map
     * element's property with the same name is updated
     */
    modelAdditionalMapOptionsChanged: function (additionalMapOptions) {
      this.$$('google-map').additionalMapOptions = additionalMapOptions;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'apiKey' has changed, the apiKey property of the
     * google-map element is updated
     */
    modelApiKeyChanged: function (apiKey) {
      this.$$('google-map').apiKey = apiKey;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'clickEvents' has changed, the clickEvents property of
     * the google-map element is updated
     */
    modelClickEventsChanged: function (clickEvents) {
      this.$$('google-map').clickEvents = clickEvents;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'clientId' has changed, the clientId property of the
     * google-map element is updated
     */
    modelClientIdChanged: function (clientId) {
      this.$$('google-map').clientId = clientId;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'disableDefaultUi' has changed, the disableDefaultUi
     * property of the google-map element is updated
     */
    modelDisableDefaultUiChanged: function (disableDefaultUi) {
      this.$$('google-map').disableDefaultUi = disableDefaultUi;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'disableZoom' has changed, the disableZoom property of
     * the google-map element is updated
     */
    modelDisableZoomChanged: function (disableZoom) {
      this.$$('google-map').disableZoom = disableZoom;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'dragEvents' has changed, the dragEvents property of
     * the google-map element is updated
     */
    modelDragEventsChanged: function (dragEvents) {
      this.$$('google-map').dragEvents = dragEvents;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'fitToMarkers' has changed, the fitToMarkers property of
     * the google-map element is updated
     */
    modelFitToMarkersChanged: function (fitToMarkers) {
      this.$$('google-map').fitToMarkers = fitToMarkers;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'kml' has changed, the kml property of the
     * google-map element is updated
     */
    modelKmlChanged: function (kml) {
      this.$$('google-map').kml = kml;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'language' has changed, the language property of the
     * google-map element is updated
     */
    modelLanguageChanged: function (language) {
      this.$$('google-map').language = language;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'latitude' has changed, the latitude property of the
     * google-map element is updated
     */
    modelLatitudeChanged: function (latitude) {
      this.$$('google-map').latitude = latitude;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'longitude' has changed, the longitude property of the
     * google-map element is updated
     */
    modelLongitudeChanged: function (longitude) {
      this.$$('google-map').longitude = longitude;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'mapType' has changed, the mapType property of the
     * google-map element is updated
     */
    modelMapTypeChanged: function (mapType) {
      this.$$('google-map').mapType = mapType;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'maxZoom' has changed, the maxZoom property of the
     * google-map element is updated
     */
    modelMaxZoomChanged: function (maxZoom) {
      this.$$('google-map').maxZoom = maxZoom;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'minZoom' has changed, the minZoom property of the
     * google-map element is updated
     */
    modelMinZoomChanged: function (minZoom) {
      this.$$('google-map').minZoom = minZoom;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'noAutoTilt' has changed, the noAutoTilt property of the
     * google-map element is updated
     */
    modelNoAutoTiltChanged: function (noAutoTilt) {
      this.$$('google-map').noAutoTilt = noAutoTilt;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'signedIn' has changed, the signedIn property of the
     * google-map element is updated
     */
    modelSignedInChanged: function (signedIn) {
      this.$$('google-map').signedIn = signedIn;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'singleInfoWindow' has changed, the singleInfoWindow
     * property of the google-map element is updated
     */
    modelSingleInfoWindowChanged: function (singleInfoWindow) {
      this.$$('google-map').singleInfoWindow = singleInfoWindow;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'styles' has changed, the styles property of the
     * google-map element is updated
     */
    modelStylesChanged: function (styles) {
      this.$$('google-map').styles = styles;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'version' has changed, the version property of the
     * google-map element is updated
     */
    modelVersionChanged: function (version) {
      this.$$('google-map').version = version;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'zoom' has changed, the zoom property of the google-map
     * element is updated
     */
    modelZoomChanged: function (zoom) {
      this.$$('google-map').zoom = zoom;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'width' has changed, the width property of the google-map
     * element is updated
     */
    modelWidthChanged: function (width) {
      this.$$('google-map').style.width = width;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'height' has changed, the height of the google-map
     * element is updated
     */
    modelHeightChanged: function (height) {
      this.$$('google-map').style.height = height;
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'markers', add the markers to the google-map
     */
    modelMarkersChanged: function (markers) {
      this._removeChildrenByTagName('google-map-markers');
      for (var i = 0; i < this.getMarkers().length; i++) {
        var markerElement = this._createMarkerElement(this.getMarkers()[i], this._countMarkers);
        if (!this.getMarkers()[i].id) {
          this.getMarkers()[i].id = markerElement.id;
        }
        this._appendElementToTheMap(markerElement);
        this._countMarkers++;
      }
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'directions', add the directions to the google-map
     */
    modelDirectionsChanged: function (directions) {
      this._removeChildrenByTagName('google-map-directions');
      for (var i = 0; i < this.getDirections().length; i++) {
        var directionsElement = this._createMapDirectionsElement(this.getDirections()[i], this._countDirections);
        if (!this.getDirections()[i].id) {
          this.getDirections()[i].id = directionsElement.id;
        }
        this._appendElementToTheMap(directionsElement);
        this._countDirections++;
      }
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'polys', add the polys to the google-map
     */
    modelPolysChanged: function (polys) {
      this._removeChildrenByTagName('google-map-poly');
      for (var i = 0; i < this.getPolys().length; i++) {
        var polyElement = this._createMapPolyElement(this.getPolys()[i], this._countPolys);
        if (!this.getPolys()[i].id) {
          this.getPolys()[i].id = polyElement.id;
        }
        this._appendElementToTheMap(polyElement);
        this._countPolys++;
      }
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'markerToAdd', add the markerToAdd to the google-map
     */
    modelMarkerToAddChanged: function (markerToAdd) {
      this._addMarker(markerToAdd);
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'directionsToAdd', add the directionsToAdd to the google-map
     */
    modelDirectionsToAddChanged: function (directionsToAdd) {
      this._addDirections(directionsToAdd);
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'polyToAdd', add the polyToAdd to the google-map
     */
    modelPolyToAddChanged: function (polyToAdd) {
      this._addPoly(polyToAdd);
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'markerToRemove', remove the markerToRemove from
     * the google-map
     */
    modelMarkerToRemoveChanged: function (markerToRemove) {
      this._removeMarker(markerToRemove);
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'directionsToRemove', remove the directionsToRemove from
     * the google-map
     */
    modelDirectionsToRemoveChanged: function (directionsToRemove) {
      this._removeDirections(directionsToRemove);
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'polyToRemove', remove the polyToRemove from
     * the google-map
     */
    modelPolyToRemoveChanged: function (polyToRemove) {
      this._removePoly(polyToRemove);
    },

    /**
     * Explicitly resizes the map, updating its center. This is useful if the map does not show after you have unhidden
     * it.
     */
    resize: function () {
      this.$$('google-map').resize();
    },

    /**
     * Add a new google-map-marker to the map.
     * @param {object} marker - Object to be used as base to create the google-map-marker element to be added
     * @return {Element} - Added marker
     */
    _addMarker: function (marker) {
      var newMarker = this._addElement(
        marker,
        this._createMarkerElement(marker, this._countMarkers),
        this.getMarkers()
      );
      this._countMarkers++;
      return newMarker;
    },

    /**
     * Add a new google-map-directions to the map.
     * @param {object} directions - Object to be used as base to create the google-map-directions element to be added
     * @return {Element} - Added directions
     */
    _addDirections: function (directions) {
      var newDirections = this._addElement(
        directions,
        this._createMapDirectionsElement(directions, this._countDirections),
        this.getDirections()
      );
      this._countDirections++;
      return newDirections;
    },

    /**
     * Add a new google-map-poly to the map.
     * @param {object} poly - Object to be used as base to create the google-map-poly element to be added
     * @return {Element} - Added poly
     */
    _addPoly: function (poly) {
      var newPoly = this._addElement(poly, this._createMapPolyElement(poly, this._countPolys), this.getPolys());
      this._countPolys++;
      return newPoly;
    },

    /**
     * Remove a 'marker' from the map and its list
     * @param {object} marker - Object that represents the 'marker' to be removed
     */
    _removeMarker: function (marker) {
      this._removeElement(marker, this.getMarkers());
    },

    /**
     * Remove a 'directions' from the map and its list
     * @param {object} directions - Object that represents the 'directions' to be removed
     */
    _removeDirections: function (directions) {
      this._removeElement(directions, this.getDirections());
    },

    /**
     * Remove a 'poly' from the map and its list
     * @param {object} poly - Object that represents the 'poly' to be removed
     */
    _removePoly: function (poly) {
      this._removeElement(poly, this.getPolys());
    },

    /**
     * Append a 'baseObject' to the map using the Polymer DOM
     * @param {object} baseObject - Base object that was used to create the element to be append to the map
     * @param {Element} element - Html element o be append to the map
     * @param {object} elementList - List that contains the baseObject (markers, directions, polys)
     * @private
     */
    _addElement: function (baseObject, element, elementList) {
      if (!baseObject.id) {
        baseObject.id = element.id;
      }
      elementList.push(baseObject);
      this._appendElementToTheMap(element);
      return baseObject;
    },

    /**
     * Create a google-map-marker element using an object, that can have the following properties: 'icon', 'latitude',
     * 'longitude', 'title', 'zIndex', 'animation', 'draggable', 'id'
     * @param {object} marker - Object to be used as base to create the google-map-marker element
     * @param {number} index - Index of the element within markers list
     * @returns {Element} - google-map-marker element
     * @private
     */
    _createMarkerElement: function (marker, index) {
      var validKeys = ['icon', 'latitude', 'longitude', 'title', 'zIndex', 'animation', 'draggable', 'id'];
      var markerEl = this._createPolymerElement(marker, 'google-map-marker', validKeys, index);
      if (marker.title) {
        var titleSpan = document.createElement('span');
        titleSpan.textContent = marker.title;
        markerEl.appendChild(titleSpan);
      }
      return markerEl;
    },

    /**
     * Create a google-map-directions element using an object, that can have the following properties: 'startAddress',
     * 'endAddress', 'travelMode', 'wayPoints', 'id'
     * @param {object} directions - Object to be used as base to create the google-map-directions element
     * @param {number} index - Index of the element within directions list
     * @returns {Element} - google-map-directions element
     * @private
     */
    _createMapDirectionsElement: function (directions, index) {
      var validKeys = ['startAddress', 'endAddress', 'travelMode', 'waypoints', 'id'];
      return this._createPolymerElement(directions, 'google-map-directions', validKeys, index);
    },

    /**
     * Create a google-map-poly element using an object, that can have the following properties: 'closed', 'draggable',
     * 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icons', 'strokeColor', 'strokeOpacity', 'strokePosition',
     * 'strokeWeight', 'zIndex', 'points', 'id'.
     * @param {object} poly - Object to be used as base to create the google-map-poly element
     * @param {number} index - Index of the element within polys list
     * @returns {Element} - google-map-poly element
     * @private
     */
    _createMapPolyElement: function (poly, index) {
      var validKeys = ['closed', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icons', 'strokeColor',
        'strokeOpacity', 'strokePosition', 'strokeWeight', 'zIndex', 'id'];
      var polyEl = this._createPolymerElement(poly, 'google-map-poly', validKeys, index);
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
     * Create a marker element using an object 'baseObject', that can have the properties contain in 'validProperties'
     * @param {object} baseObject - Object to be used to create the polymer element
     * @param {string} tagName - Tag name of the polymer element to be created
     * @param {string[]} validProperties - Valid properties for the polymer element
     * @param {number} index - Index of the element within its list
     * @return {Element} - Created element
     * @private
     */
    _createPolymerElement: function (baseObject, tagName, validProperties, index) {
      if (!baseObject.id && tagName !== 'google-map-point') {
        baseObject.id = this.getId() + '_' + tagName + '_' + index;
        this.setLastId(baseObject.id);
      }
      var element = document.createElement(tagName);
      validProperties.forEach(function (key) {
        if (baseObject[key]) {
          element[key] = baseObject[key];
        }
      });
      return element;
    },

    /**
     * Append a 'baseObject' to the map using the Polymer DOM
     * @param {Element} element - Html element o be append to the map
     * @private
     */
    _appendElementToTheMap: function (element) {
      Polymer.dom(this.$$('google-map')).appendChild(element);
    },

    /**
     * Remove the children whose element name is 'tagName' from the map
     * @param {string} tagName - Name of the element's tag
     * @private
     */
    _removeChildrenByTagName: function (tagName) {
      var elements = document.querySelectorAll(tagName);
      for (var i = 0; i < elements.length; i++) {
        this._removeFromMap(elements[i]);
      }
    },

    /**
     * Remove the given child from the map and the lists that contains it (markers, directions, polys)
     * @param {object} baseObject - Object that was used to create the Element to be removed
     * @param {object} elementList - List that contains the baseObject (markers, directions, polys)
     * @private
     */
    _removeElement: function (baseObject, elementList) {
      var element;
      for (var i = 0; i < elementList.length; i++) {
        if (elementList[i].id && elementList[i].id === baseObject.id) {
          element = document.querySelector('#' + baseObject.id);
          this._removeFromMap(element);
          elementList.splice(i, 1);
          return;
        }
      }
    },

    /**
     * Remove an element from its parent
     * @param {Element} child - Dom element to be removed
     * @private
     */
    _removeFromMap: function (child) {
      child.map = null;
      Polymer.dom(child.parentNode).removeChild(child);
    }

  });
}());
