import './scss/index.scss';
import { Spreadsheet } from '@/components/Spreadsheet/Spreadsheet';
import { HeaderComponent } from '@/components/HeaderComponent/HeaderComponent';
import { ToolbarComponent } from '@/components/ToolbarComponent/ToolbarComponent';
import { FormulaComponent } from '@/components/FormulaComponent/FormulaComponent';
import { TableComponent } from '@/components/TableComponent/TableComponent';

const spreadsheet = new Spreadsheet('#app', {
  components: [
    HeaderComponent,
    ToolbarComponent,
    FormulaComponent,
    TableComponent,
  ],
});

spreadsheet.render();
