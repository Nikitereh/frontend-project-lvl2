import { test, expect } from '@jest/globals';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import parse from '../src/parse.js';
import buildTree from '../src/makeTree.js';
import format from '../src/formatters/index.js';
import { getFormat } from '../src/services';
import plain from '../src/formatters/plain.js';
import stylish from '../src/formatters/stylish.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');



test('genDiff(empty)', () => {
  expect(() => genDiff()).toThrow();
});