import fs from 'fs';
import genDiff from '../src';

const extensionsWithFormats = [
  ['json'],
];
const fixturesPath = `${__dirname}/__fixtures__/`;
const getExpectedResult = (format) => (fs.readFileSync(`${__dirname}/__fixtures__/${format}Result.txt`, 'utf8'));


test('genDiff(empty)', () => {
  expect(() => genDiff()).toThrow();
});