import { DOMListener } from '@core/DOMListener';

export class SpreadsheetComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.options = options;
  }

  // return template for components
  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }
}
