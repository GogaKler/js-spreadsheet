class Dom {
  constructor(selector) {
    this.nativeNode = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.nativeNode.innerHTML = html;
      return this;
    }
    return this.nativeNode.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  on() {

  }

  append(node) {
    if (node instanceof Dom) {
      // eslint-disable-next-line no-param-reassign
      node = node.nativeNode;
    }
    if (Element.prototype.append) {
      this.nativeNode.append(node);
    } else {
      this.nativeNode.appendChild(node);
    }

    return this;
  }
}

export const $ = (selector) => new Dom(selector);

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
