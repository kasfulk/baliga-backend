import moduleAlias from 'module-alias';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

moduleAlias.addAliases({
  '@': path.join(__dirname, '../src'),
});
