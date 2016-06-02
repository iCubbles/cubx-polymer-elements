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
     * Observe the Cubbles-Component-Model: If value for slot 'fitToMarkers' has changed, the fitToMarkers property of the
     * google-map element is updated
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
     * Observe the Cubbles-Component-Model: If value for slot 'latitude' has changed, the latitude property of the google-map element is updated
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
     * Observe the Cubbles-Component-Model: If value for slot 'zoom' has changed, the zoom property of the google-map element is updated
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
     * Observe the Cubbles-Component-Model: If value for slot 'markers', add the markers in the list to the google-map
     */
    modelMarkersChanged: function (markers) {
      var self = this;
      markers.forEach(function (marker) {
        Polymer.dom(self.$$('#' + self.getId())).appendChild(self._createMarkerElement(marker));
      });
    },

    /**
     * Create a marker element using an object, that can have the following properties: icon, latitude, longitude,
     * title , zIndex, animation, draggable
     * @param marker
     * @returns {Element}
     * @private
     */
    _createMarkerElement: function (marker) {
      var markerEl = document.createElement('google-map-marker');
      var validKeys = ['icon', 'latitude', 'longitude', 'title', 'zIndex', 'animation', 'draggable'];
      validKeys.forEach(function (key) {
        if (marker[key]) {
          markerEl[key] = marker[key];
        }
      });
      return markerEl;
    },

    /**
     * Clear all markers from the map
     */
    clear: function () {
      this.$$('#' + this.getId()).clear();
    },

    /**
     * Explicitly resizes the map, updating its center. This is useful if the map does not show after you have unhidden
     * it.
     */
    resize: function () {
      this.$$('#' + this.getId()).resize();
    }
  });
}());
