// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: "npm",

  reporters: [
    "html",
    "clear-text",
    "progress"
  ],

  testRunner: "jasmine",

  coverageAnalysis: "perTest",

  jasmineConfigFile: "spec/support/jasmine.mjs",

  mutate: [
    "busquedaBinaria.js"
  ]
};

export default config;