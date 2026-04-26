//Excel / JSON reader in Java
import fs from 'fs';

export class DataUtils {

  // Read JSON test data
  static readJSON(path: string) {
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
  }
}