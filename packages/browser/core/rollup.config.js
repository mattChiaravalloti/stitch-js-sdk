/**
 * Copyright 2018-present MongoDB, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import nodeGlobals from 'rollup-plugin-node-globals';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

const plugins = [
  json(),
  nodeResolve({
    browser: true,
    preferBuiltins: false
  }),
  commonjs(),
  nodeGlobals(),
  nodeBuiltins(),
  typescript({
    tsconfig: "tsconfig.esm.json"
  }),
  uglify()
];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/browser/stitch-core.js',
      format: 'iife',
      name: 'stitch',
      sourcemap: true,
      extend: true
    }
  ],
  plugins
}
