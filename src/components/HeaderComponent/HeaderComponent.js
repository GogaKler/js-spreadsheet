import { SpreadsheetComponent } from '@core/SpreadsheetComponent';

export class HeaderComponent extends SpreadsheetComponent {
  static className = 'spreadsheet__header'

  toHTML() {
    return `
      <label>
          <input type="text" class="input" placeholder="Новая талица">
      </label>
      <div>
          <div class="button">
              <span class="material-icons">delete</span>
          </div>
          <div class="button">
              <span class="material-icons">exit_to_app</span>
          </div>
      </div>
    `;
  }
}
