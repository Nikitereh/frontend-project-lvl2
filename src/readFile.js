import { resolve } from 'path';
import { readFileSync } from 'fs';

const getFixturePath = (filename) => {
  console.log('filename', filename);
  console.log('resolve(process.cwd(), filename)', resolve(process.cwd(), filename)); 
  return resolve(process.cwd(), filename) 
};
const readFile = (filename) => {
  console.log('1');
  return readFileSync(getFixturePath(filename), 'utf-8') // 
};

export default readFile;

