import fs from 'fs';
import genDiff from '../src';
import path from 'path';

test('genDiff(empty)', () => {
  expect(() => genDiff()).toThrow();
});