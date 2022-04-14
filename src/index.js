import readFile from './readFile.js';
import parse from './parse.js';
import genTree from './genTree.js';
import formattedTree from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fileContent1 = readFile(filepath1);
  console.log('fileContent1',fileContent1);
  const fileContent2 = readFile(filepath2);
  console.log('fileContent2',fileContent2);

  const parsedFile1 = parse(fileContent1, filepath1.split('.').at(-1));
  console.log('parsedFile1',parsedFile1)
  const parsedFile2 = parse(fileContent2, filepath2.split('.').at(-1));
  console.log('parsedFile2',parsedFile2)

  const tree = genTree(parsedFile1, parsedFile2);

  return formattedTree(tree, formatName);
};

export default genDiff;

