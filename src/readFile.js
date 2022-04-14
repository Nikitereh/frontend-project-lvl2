import { resolve } from 'path';
import { readFileSync } from 'fs';

const getFixturePath = (filename) => {
  return resolve(process.cwd(), filename) 
};
const readFile = (filename) => {
  return readFileSync(getFixturePath(filename), 'utf-8') // 
};

export default readFile;
