import fs from 'fs';
import path from 'path';

// Importa diretamente do diretório src/data
import produtos from '../src/data/products.json';

fs.writeFileSync(
  path.resolve(__dirname, '../src/data/productMocks.json'),
  JSON.stringify(produtos, null, 2),
);
