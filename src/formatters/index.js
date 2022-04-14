import stylish from './stylish.js';
import plain from './plain.js';

const json = (tree, spacesCount = 2) => JSON.stringify(tree, null, ' '.repeat(spacesCount));

const formattedTree = (tree, format) => {
  switch (format) {
    case 'stylish': {
      return stylish(tree);
    }
    case 'plain': {
      return plain(tree);
    }
    case 'json': {
      return json(tree);
    }
    default:
      throw new Error(`Unknown format to generate a tree: '${format}'!`);
  }
};

export default formattedTree;
