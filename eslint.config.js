import { fileURLToPath } from "node:url";

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import query from "@tanstack/eslint-plugin-query";
import router from "@tanstack/eslint-plugin-router";
import boundaries from "eslint-plugin-boundaries";
import importer from "eslint-plugin-import";
import jestDom from "eslint-plugin-jest-dom";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import sonarjs from "eslint-plugin-sonarjs";
import testingLibrary from "eslint-plugin-testing-library";
import globals from "globals";
import tseslint from "typescript-eslint";

const ignorePath = fileURLToPath(new URL(".prettierignore", import.meta.url));

export default tseslint.config(
  includeIgnoreFile(ignorePath, "Imported .prettierignore patterns"),
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      query.configs["flat/recommended"],
      router.configs["flat/recommended"],
      jsxA11y.flatConfigs.recommended,
      jestDom.configs["flat/recommended"],
      testingLibrary.configs["flat/react"],
      importer.flatConfigs.recommended,
      sonarjs.configs.recommended,
    ],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      boundaries,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
      "boundaries/elements": [
        { type: "components", pattern: "src/components/**" },
        { type: "features", pattern: "src/features/**" },
        { type: "hooks", pattern: "src/hooks/**" },
        { type: "lib", pattern: "src/lib/**" },
        { type: "routes", pattern: "src/routes/**" },
        { type: "testing", pattern: "src/testing/**" },
        { type: "types", pattern: "src/types/**" },
        { type: "utils", pattern: "src/utils/**" },
      ],
    },
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: false,
        },
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              from: "components",
              allow: ["components", "hooks", "utils"],
            },
            {
              from: "features",
              allow: ["components", "features", "lib", "routes"],
            },
            {
              from: "hooks",
              allow: ["hooks"],
            },
            {
              from: "lib",
              allow: ["lib"],
            },
            {
              from: "routes",
              allow: ["features", "routes", "utils"],
            },
            {
              from: "testing",
              allow: ["testing"],
            },
            {
              from: "types",
              allow: ["types"],
            },
            {
              from: "utils",
              allow: ["utils"],
            },
          ],
        },
      ],
      "boundaries/entry-point": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              target: ["components", "features"],
              allow: "**/index.{ts,tsx}",
            },
            {
              target: ["hooks", "lib", "routes", "testing", "types", "utils"],
              allow: "**/*.{ts,tsx}",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["e2e/**/*"],
    rules: {
      "testing-library/prefer-screen-queries": "off",
    },
  },
);
