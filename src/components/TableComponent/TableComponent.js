import { SpreadsheetComponent } from '@core/SpreadsheetComponent';

export class TableComponent extends SpreadsheetComponent {
  static className = 'spreadsheet__table'

  toHTML() {
    return `
      <div class="row">
        <div class="row-info"></div>
        <div class="row-data">
            <div class="column">A</div>
        </div>
      </div>
  `;
  }
}
