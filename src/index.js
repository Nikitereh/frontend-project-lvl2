import { readFile, getFormat } from './services.js';
import parse from './parse.js';
import buildTree from './makeTree.js';
import format from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fileContent1 = readFile(filepath1);
  const fileContent2 = readFile(filepath2);

  const data1 = parse(fileContent1, getFormat(filepath1));
  const data2 = parse(fileContent2, getFormat(filepath2));

  const tree = buildTree(data1, data2);

  return format(tree, formatName);
};

export default genDiff;

