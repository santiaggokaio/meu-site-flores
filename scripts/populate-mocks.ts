import fs from 'fs/promises';
import path from 'path';

async function generateMocks() {
  try {
    // Diretório raiz do projeto
    const rootDir = process.cwd();
    
    // Caminhos dos arquivos de origem e destino
    const dataFile = path.join(rootDir, 'src', 'data', 'products.json');
    const mocksFile = path.join(rootDir, 'src', 'data', 'productMocks.json');

    // Lê e parseia os dados originais
    const content = await fs.readFile(dataFile, 'utf-8');
    const products = JSON.parse(content);

    // Gera o arquivo de mocks com indentação de 2 espaços
    await fs.writeFile(mocksFile, JSON.stringify(products, null, 2), 'utf-8');
    console.log(`✅ productMocks.json gerado em: ${mocksFile}`);
  } catch (error) {
    console.error('❌ Erro ao gerar productMocks.json:', error);
    process.exit(1);
  }
}

// Executa a função principal
generateMocks();
