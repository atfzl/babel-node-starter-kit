// @flow

import fs from 'fs';
import path from 'path';

const result = fs.readFileSync(path.resolve(`${__dirname}/index.js`));

console.log(result.toString());

function add(a: number): string {
  return a;
}

add(1);
