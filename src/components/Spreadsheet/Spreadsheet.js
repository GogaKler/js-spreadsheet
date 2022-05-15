import { $ } from '@core/dom';

export class Spreadsheet {
  // this.$el = это элемент ( Например строка '#app'), который
  // уходит в функцию $ и преобразуется в ноду,
  // посредством document.querySelector(selector)
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
    this.test = selector;
  }

  getRoot() {
    const $root = $.create('div', 'spreadsheet');

    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());

    this.components.forEach((component) => component.init());
  }
}
