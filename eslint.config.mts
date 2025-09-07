import js from "@eslint/js";
import globals from "globals";
import { configs as tsConfigs } from "typescript-eslint";
import { importX } from "eslint-plugin-import-x";

export default [
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  js.configs.recommended,
  ...tsConfigs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
];
