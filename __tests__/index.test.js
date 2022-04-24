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
import * as expecteds   from '../__fixtures__';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
// const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const tests = [
  {
    filename1: 'file1.json', filename2: 'file2.json', output: 'stylish', formatName: 'stylish',
  },
  {
    filename1: 'file1.yml', filename2: 'file2.yaml', output: 'stylish', formatName: 'stylish',
  },
  {
    filename1: 'file1.json', filename2: 'file2.json', output: 'plain', formatName: 'plain',
  },
  {
    filename1: 'file1.yml', filename2: 'file2.yaml', output: 'plain', formatName: 'plain',
  },
  {
    filename1: 'file1.json', filename2: 'file2.json', output: 'json', formatName: 'json',
  },
  {
    filename1: 'file1.yml', filename2: 'file2.yaml', output: 'json', formatName: 'json',
  },
];

test.each(tests)('gendiff stylish, plain and json tests', ({
  filename1, filename2, output, formatName,
}) => {
  const filepath1 = getFixturePath(filename1);
  const filepath2 = getFixturePath(filename2);
  const expected = expecteds[output];
  const result = genDiff(filepath1, filepath2, formatName);
  expect(result).toEqual(expected);
});

test('genDiff(empty)', () => {
  expect(() => genDiff()).toThrow();
});