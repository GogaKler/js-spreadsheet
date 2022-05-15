import { SpreadsheetComponent } from '@core/SpreadsheetComponent';

export class FormulaComponent extends SpreadsheetComponent {
  static className = 'spreadsheet__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input"
           contenteditable
           spellcheck="false"
      ></div>
    `;
  }

  onInput(event) {
    console.log('onInput on FormualComponent', event);
  }
}
