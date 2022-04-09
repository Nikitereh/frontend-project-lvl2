#!/usr/bin/env node
import { program } from 'commander/esm.mjs';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0', '-V, --version', 'output the version number')
  .Options('-h, --help', 'output usage information')

program.parse();

