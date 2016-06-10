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
    is: 'cubx-paper-menu',

    _countItems: 0,

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
      this.setItems([]);
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
     *  Observe the Cubbles-Component-Model: If value for slot 'id' has changed, the paper-menu element's property with the same name is updated
     */
    modelIdChanged: function (id) {
      this.$$('paper-menu').id = id;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'activateEvent' has changed, the paper-menu element's
     *  property with the same name is updated
     */
    modelActivateEventChanged: function (activateEvent) {
      this.$$('paper-menu').activateEvent = activateEvent;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'attrForItemTitle' has changed, the paper-menu element's
     *  property with the same name is updated
     */
    modelAttrForItemTitleChanged: function (attrForItemTitle) {
      this.$$('paper-menu').attrForItemTitle = attrForItemTitle;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'attrForSelected' has changed, the paper-menu element's
     *  property with the same name is updated
     */
    modelAttrForSelectedChanged: function (attrForSelected) {
      this.$$('paper-menu').attrForSelected = attrForSelected;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'fallbackSelection' has changed, the paper-menu
     *  element's property with the same name is updated
     */
    modelFallbackSelectionChanged: function (fallbackSelection) {
      this.$$('paper-menu').fallbackSelection = fallbackSelection;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'keyEventTarget' has changed, the paper-menu element's
     *  property with the same name is updated
     */
    modelKeyEventTargetChanged: function (keyEventTarget) {
      this.$$('paper-menu').keyEventTarget = keyEventTarget;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'multi' has changed, the paper-menu element's property
     *  with the same name is updated
     */
    modelMultiChanged: function (multi) {
      this.$$('paper-menu').multi = multi;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'selectable' has changed, the paper-menu element's
     *  property with the same name is updated
     */
    modelSelectableChanged: function (selectable) {
      this.$$('paper-menu').selectable = selectable;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'selected' has changed, the paper-menu element's
     *  property with the same name is updated
     */
    modelSelectedChanged: function (selected) {
      this.$$('paper-menu').selected = selected;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'selectedAttribute' has changed, the paper-menu
     *  element's property with the same name is updated
     */
    modelSelectedAttributeChanged: function (selectedAttribute) {
      this.$$('paper-menu').selectedAttribute = selectedAttribute;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'selectedClass' has changed, the paper-menu element's
     *  property with the same name is updated
     */
    modelSelectedClassChanged: function (selectedClass) {
      this.$$('paper-menu').id = selectedClass;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'selectedValues' has changed, the paper-menu element's
     *  property with the same name is updated
     */
    modelSelectedValuesChanged: function (selectedValues) {
      this.$$('paper-menu').id = selectedValues;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'stopKeyboardEventPropagation' has changed, the
     *  paper-menu element's property with the same name is updated
     */
    modelStopKeyboardEventPropagationChanged: function (stopKeyboardEventPropagation) {
      this.$$('paper-menu').id = stopKeyboardEventPropagation;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'items' has changed, the items are added to the
     *  paper-menu element's
     */
    modelItemsChanged: function (items) {
      this._removeAllItems();
      for (var i = 0; i < this.getItems().length; i++) {
        var polyElement = this._createPaperItem(this.getItems()[i]);
        if (!this.getItems()[i].id) {
          this.getItems()[i].id = polyElement.id;
        }
        this._appendElementToTheMenu(polyElement);
        this._countItems++;
      }
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'itemToAdd', add the itemToAdd to the google-map
     */
    modelItemToAddChanged: function (itemToAdd) {
      this._addItem(itemToAdd);
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'itemToRemove', remove the itemToRemove from
     * the google-map
     */
    modelItemToRemoveChanged: function (itemToRemove) {
      this._removeItem(itemToRemove);
    },

    /**
     * Add a new paper-item to the menu.
     * @param {object} item - Object to be used as base to create the paper-item element to be added
     * @return {Element} - Added item
     */
    _addItem: function (item) {
      var newPaperItem = this._addPaperItem(item, this._createPaperItem(item));
      this._countItems++;
      return newPaperItem;
    },

    /**
     * Add an item to the menu
     * @param {object} baseObject - Base object that was used to create the element to be append to the menu
     * @param {Element} element - Html element o be append to the menu
     * @return {Object} Added item
     * @private
     */
    _addPaperItem: function (baseObject, element) {
      if (!baseObject.id) {
        baseObject.id = element.id;
      }
      this.getItems().push(baseObject);
      this._appendElementToTheMenu(element);
      return baseObject;
    },

    /**
     * Create a paper-item element using an object 'baseObject', that can have the following properties: 'active',
     * 'ariaActiveAttribute', 'disabled', 'focused', 'stopKeyboardEventPropagation', 'toggles', 'textContent',
     * 'value', 'id'
     * @param {object} baseObject - Object to be used to create the polymer element
     * @return {Element} - Created element
     * @private
     */
    _createPaperItem: function (baseObject) {
      var validProperties = ['active', 'ariaActiveAttribute', 'disabled', 'focused', 'stopKeyboardEventPropagation',
        'toggles', 'value', 'id', 'textContent'];
      if (!baseObject.id) {
        baseObject.id = this.getId() + '_' + 'paper-item' + '_' + this._countItems;
        this.setLastId(baseObject.id);
      }
      var element = document.createElement('paper-item');
      validProperties.forEach(function (key) {
        if (baseObject[key]) {
          element[key] = baseObject[key];
        }
      });
      return element;
    },

    /**
     * Append an element to the menu using the Polymer DOM
     * @param {Element} element - Html element o be appended to the menu
     * @private
     */
    _appendElementToTheMenu: function (element) {
      Polymer.dom(this.$$('paper-menu')).appendChild(element);
    },

    /**
     * Remove the children whose element name is 'tagName' from the paper-menu
     * @private
     */
    _removeAllItems: function () {
      var elements = document.querySelectorAll('paper-item');
      for (var i = 0; i < elements.length; i++) {
        this._removeFromMenu(elements[i]);
      }
    },

    /**
     * Remove an element from its parent
     * @param {Element} child - Dom element to be removed
     * @private
     */
    _removeFromMenu: function (child) {
      var parent = Polymer.dom(child).parentNode;
      Polymer.dom(parent).removeChild(child);
    },

    /**
     * Remove the given object from the menu and from the items array
     * @param {object} baseObject - Object that was used to create the Element to be removed
     * @private
     */
    _removeItem: function (baseObject) {
      var element;
      for (var i = 0; i < this.getItems().length; i++) {
        if (this.getItems()[i].id && this.getItems()[i].id === baseObject.id) {
          element = document.querySelector('#' + baseObject.id);
          this._removeFromMenu(element);
          this.getItems().splice(i, 1);
          return;
        }
      }
    }
  });
}());
