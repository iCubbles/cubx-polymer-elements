/*global XMLHttpRequest*/
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
    is: 'cubx-marked-element',

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
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'markdown' has changed.
     */
    modelMarkdownChanged: function (markdown) {
      this.$$('marked-element').markdown = markdown;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'pedantic' has changed.
     */
    modelPedanticChanged: function (pedantic) {
      this.$$('marked-element').pedantic = pedantic;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'sanitize' has changed.
     */
    modelSanitizeChanged: function (sanitize) {
      this.$$('marked-element').sanitize = sanitize;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'smartypants' has changed.
     */
    modelSmartypantsChanged: function (smartypants) {
      this.$$('marked-element').smartypants = smartypants;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'markdownUrl' has changed.
     */
    modelMarkdownUrlChanged: function (markdownUrl) {
      this._loadMarkDown(markdownUrl);
    },

    _loadMarkDown: function (markdownUrl) {
      var self = this;
      var xhttp = new XMLHttpRequest();
      xhttp.open('GET', markdownUrl, true);
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          self.setMarkdown(xhttp.responseText);
        }
      };
      xhttp.send();
    }
  });
}());
