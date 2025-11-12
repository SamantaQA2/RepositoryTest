// import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,ts,mjs,cjs}"],
    ignores: ["node_modules", "dist", "build", "eslint.config.mjs"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node, // Enables Node.js globals like `process`, `__dirname`, etc.
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      /* ----------------------- 🧹 General JavaScript Rules ----------------------- */
      "prefer-const": "off", // Require const for variables that are never reassigned
      "arrow-body-style": "off", // Require braces in arrow functions for consistency
      "block-scoped-var": "off", // Treat var as block-scoped (like let)
      "default-case-last": "off", // Ensure default case is last in switch statements
      "default-param-last": "off", // Default parameters should be declared last
      "max-params": ["off", 4], // Limit function parameters (here: max 4)
      "no-else-return": "off", // Avoid else after return in if statements
      "no-empty": "off", // Disallow empty block statements
      "no-extra-semi": "off", // Disallow unnecessary semicolons
      "no-floating-decimal": "off", // Require leading 0 before decimals
      "no-nested-ternary": "off", // Avoid nested ternary operators
      "no-new": "off", // Disallow creating new objects for side effects only
      "no-new-object": "off", // Disallow `new Object()`
      "no-param-reassign": "off", // Prevent parameter reassignment
      "no-useless-concat": "off", // Disallow unnecessary string concatenation
      "no-useless-return": "off", // Disallow redundant return statements
      "prefer-template": "off", // Prefer template literals over string concatenation
      yoda: "off", // Enforce yoda conditions (literal on right)
      eqeqeq: "off", // Require strict equality (=== and !==)
      "no-console": "off", // Disallow console.log, off, etc.
      "no-var": "off", // Require let/const instead of var
      "no-undef": "off", // Disallow undeclared variables
      "no-eval": "off", // Disallow use of eval()
      "no-implied-eval": "off", // Disallow implied eval() (e.g. setTimeout with string)
      "no-use-before-define": "off", // Disallow using variables before declaration
      "max-classes-per-file": ["off", 1], // Only allow one class per file

      // /* ----------------------- 🧽 Unused Imports / Vars ----------------------- */
      "unused-imports/no-unused-imports": "off", // Remove unused imports
      "@typescript-eslint/no-unused-vars": "off", // Remove unused variables

      /* ----------------------- 🧠 TypeScript Rules ----------------------- */
      "@typescript-eslint/explicit-function-return-type": "off", // Require explicit return types on functions
      "@typescript-eslint/explicit-module-boundary-types": "off", // Require return types on exported functions
      "@typescript-eslint/naming-convention": "off", // Enforce consistent naming conventions
      "@typescript-eslint/no-duplicate-enum-values": "off", // Disallow duplicate values in enums
      "@typescript-eslint/no-require-imports": "off", // Disallow require(), prefer import
      "@typescript-eslint/no-useless-empty-export": "off", // Disallow `export {}`
      "@typescript-eslint/consistent-generic-constructors": "off", // Enforce consistent generic constructors
      "@typescript-eslint/consistent-type-definitions": "off", // Enforce consistent type definitions (interface vs type)
      "@typescript-eslint/consistent-type-exports": "off", // Require consistent type export style
      "@typescript-eslint/method-signature-style": "off", // Enforce method signature consistency
      "@typescript-eslint/no-confusing-void-expression": "off", // Disallow confusing void expressions
      "@typescript-eslint/no-dynamic-delete": "off", // Disallow dynamic delete
      "@typescript-eslint/no-extra-non-null-assertion": "off", // Disallow extra non-null assertions (!!)
      "@typescript-eslint/no-inferrable-types": "off", // Disallow explicit types that can be inferred
      "@typescript-eslint/no-non-null-assertion": "off", // Disallow non-null assertions (!)
      "@typescript-eslint/no-redundant-type-constituents": "off", // Simplify redundant type constituents
      "@typescript-eslint/no-this-alias": "off", // Disallow assigning this to variables
      "@typescript-eslint/ban-ts-comment": "off", // Disallow // @ts-ignore, etc.
      "@typescript-eslint/no-unnecessary-qualifier": "off", // Disallow unnecessary namespace qualifiers
      "@typescript-eslint/no-unnecessary-type-constraint": "off", // Disallow unnecessary generic constraints
      "@typescript-eslint/prefer-enum-initializers": "off", // Require enum members to be initialized
      "@typescript-eslint/prefer-function-type": "off", // Prefer function types over interfaces
      "@typescript-eslint/prefer-string-starts-ends-with": "off", // Prefer startsWith/endsWith
      "@typescript-eslint/restrict-plus-operands": "off", // Enforce correct operand types for +
      "@typescript-eslint/switch-exhaustiveness-check": "off", // Require exhaustive switch statements
      "@typescript-eslint/unified-signatures": "off", // Combine function overloads when possible
      "@typescript-eslint/no-implied-eval": "off", // TS-safe version of no-implied-eval
      "@typescript-eslint/no-use-before-define": "off", // TS-safe version of no-use-before-define
      "no-duplicate-imports": "off", // Disallow duplicate imports
      "@typescript-eslint/no-duplicate-imports": "off", // Disallow duplicate imports
      "@typescript-eslint/no-explicit-any": "off", // Disallow usage of any type
      "@typescript-eslint/no-floating-promises": "off", // Require proper promise handling
      "@typescript-eslint/no-misused-promises": "off", // Disallow misused promises
      "@typescript-eslint/consistent-type-imports": "off", // Enforce using `import type`
      "@typescript-eslint/array-type": "off", // Enforce consistent array type syntax
      "@typescript-eslint/no-shadow": "off", // Disallow variable shadowing
      //"@typescript-eslint/ban-types": "off", // Disallow certain built-in types
      "@typescript-eslint/no-unsafe-argument": "off", // Disallow unsafe arguments
      "@typescript-eslint/no-unsafe-assignment": "off", // Disallow unsafe assignments
      "@typescript-eslint/no-unsafe-return": "off", // Disallow unsafe return values
    },
  },
]);











