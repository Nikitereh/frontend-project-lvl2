import readFile from './utils/readFile.js';
import parse from './parse.js';
import genTree from './genTree.js';
import format from './formatters/index.js';
import getFormat from './utils/getFormat.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fileContent1 = readFile(filepath1);
  const fileContent2 = readFile(filepath2)

  const parsedFile1 = parse(fileContent1, getFormat(filepath1));
  const parsedFile2 = parse(fileContent2, getFormat(filepath2));

  const tree = genTree(parsedFile1, parsedFile2);

  return format(tree, formatName);
};

export default genDiff;

