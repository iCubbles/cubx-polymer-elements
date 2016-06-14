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

    _countIds: 0,

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
      this.setMenuItems([]);
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
      var self = this;
      var paperMenu = self.$$('paper-menu');
      this.addEventListener('iron-select', function () {
        self.setSelected(paperMenu.selected);

        /* (function (selectedItem) {
          var validProperties = ['active', 'ariaActiveAttribute', 'disabled', 'focused', 'stopKeyboardEventPropagation',
            'toggles', 'value', 'id', 'textContent'];
          var item = {};
          for (var i = 0; i < validProperties.length; i++) {
            if (selectedItem[validProperties[i]]) {
              item[validProperties[i]] = selectedItem[validProperties[i]];
            }
          }
          self.setSelectedMenuItem(item);
        })(self.$$('paper-menu').selectedItem);*/

        self.setSelectedMenuItems(paperMenu.selectedItems);
        self.setSelectedMenuValues(paperMenu.selectedValues);
      });

      this.addEventListener('iron-deselect', function () {
        self.setSelectedMenuItems(paperMenu.selectedItems);
        self.setSelectedMenuValues(paperMenu.selectedValues);
      });
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'id' has changed, the paper-menu element's property with
     *  the same name is updated
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
     *  Observe the Cubbles-Component-Model: If value for slot 'menuItems' has changed, the menuItems are added to the
     *  paper-menu element's
     */
    modelMenuItemsChanged: function (menuItems) {
      this._removeChildrenByTagName('paper-item');
      for (var i = 0; i < this.getMenuItems().length; i++) {
        var polyElement = this._createMenuItem(this.getMenuItems()[i]);
        if (!this.getMenuItems()[i].id) {
          this.getMenuItems()[i].id = polyElement.id;
        }
        this._appendElementToTheMenu(polyElement);
      }
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'itemToAdd', add the itemToAdd to the google-map
     */
    modelMenuItemToAddChanged: function (itemToAdd) {
      this._addMenuItem(itemToAdd);
    },

    /**
     * Observe the Cubbles-Component-Model: If value for slot 'itemToRemove', remove the itemToRemove from
     * the google-map
     */
    modelMenuItemToRemoveChanged: function (itemToRemove) {
      this._removeElement(itemToRemove);
    },

    /**
     * Add a new paper-item to the menu.
     * @param {object} item - Object to be used as base to create the paper-item element to be added
     * @return {Element} - Added item
     */
    _addMenuItem: function (item) {
      return this._addElement(item, this._createMenuItem(item));
    },

    /**
     * Add an item to the menu
     * @param {object} baseObject - Base object that was used to create the element to be append to the menu
     * @param {Element} element - Html element o be append to the menu
     * @return {Object} Added item
     * @private
     */
    _addElement: function (baseObject, element) {
      if (!baseObject.id) {
        baseObject.id = element.id;
      }
      this.getMenuItems().push(baseObject);
      this._appendElementToTheMenu(element);
      return baseObject;
    },

    /**
     * Create a paper-item or a paper-submenu depending on the passed argument
     * @param {object} baseObject - Object to be used to create the polymer element
     * @return {Element} - Created element
     * @private
     */
    _createMenuItem: function (baseObject) {
      if (baseObject.menuItems) {
        return this._createSubmenuItem(baseObject);
      } else {
        return this._createPaperItem(baseObject);
      }
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
      return this._createPolymerElement(baseObject, 'paper-item', validProperties);
    },

    /**
     * Create a paper-submenu element using an object 'baseObject', that can have the following properties: 'disabled',
     * 'focused', 'opened', 'id', 'value', 'triggerItem' and 'menuItems'
     * @param {object} baseObject - Object to be used to create the polymer element
     * @return {Element} - Created element
     * @private
     */
    _createSubmenuItem: function (baseObject) {
      var validProperties = ['disabled', 'focused', 'opened', 'id', 'value', 'menuItems', 'triggerItem'];
      var subMenuElement = this._createPolymerElement(baseObject, 'paper-submenu', validProperties);
      var triggerItem = this._createMenuItem(baseObject.triggerItem);
      triggerItem.className = 'menu-trigger';
      Polymer.dom(subMenuElement).appendChild(triggerItem);
      var subMenuContent = this._createPolymerElement({className: 'menu-content'}, 'paper-menu', ['className']);
      for (var i = 0; i < baseObject.menuItems.length; i++) {
        Polymer.dom(subMenuContent).appendChild(this._createMenuItem(baseObject.menuItems[i]));
      }
      Polymer.dom(subMenuElement).appendChild(subMenuContent);
      return subMenuElement;
    },

    /**
     * Create a marker element using an object 'baseObject', that can have the properties contain in 'validProperties'
     * @param {object} baseObject - Object to be used to create the polymer element
     * @param {string} tagName - Tag name of the polymer element to be created
     * @param {string[]} validProperties - Valid properties for the polymer element
     * @return {Element} - Created element
     * @private
     */
    _createPolymerElement: function (baseObject, tagName, validProperties) {
      if (!baseObject.id) {
        baseObject.id = this.getId() + '_' + tagName + '_' + this._countIds;
        this.setLastId(baseObject.id);
        this._countIds ++;
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
     * Append an element to the menu using the Polymer DOM
     * @param {Element} element - Html element o be appended to the menu
     * @private
     */
    _appendElementToTheMenu: function (element) {
      Polymer.dom(this.$$('paper-menu')).appendChild(element);
    },

    /**
     * Remove the children whose element name is 'tagName' from the paper-menu
     * @param {string} tagName - Name of the element's tag
     * @private
     */
    _removeChildrenByTagName: function (tagName) {
      var elements = document.querySelectorAll(tagName);
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
     * @param {object} element - Element to be removed, should contain at least its id as property
     * @private
     */
    _removeElement: function (element) {
      if (element.id) {
        for (var i = 0; i < this.getMenuItems().length; i++) {
          if (this.getMenuItems()[i].id && this.getMenuItems()[i].id === element.id) {
            if (this._removeElementFromAMenu(element, this.getMenuItems())) return;
          } else if (this.getMenuItems()[i].menuItems) {
            if (this._removeElementFromAMenu(element, this.getMenuItems()[i].menuItems)) return;
          }
        }
        console.error('The element with id \'' + element.id + '\' was not found');
      } else {
        console.error('The element should have the property \'id\' to be removed');
      }
    },

    _removeElementFromAMenu: function (baseObject, baseObjectList) {
      var element;
      for (var i = 0; i < baseObjectList.length; i++) {
        if (baseObjectList[i].id && baseObjectList[i].id === baseObject.id) {
          element = document.querySelector('#' + baseObject.id);
          this._removeFromMenu(element);
          baseObjectList.splice(i, 1);
          return true;
        }
      }
      return false;
    }
  });
}());
