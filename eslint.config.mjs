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
      "prefer-const": "warn", // Require const for variables that are never reassigned
      "arrow-body-style": "warn", // Require braces in arrow functions for consistency
      "block-scoped-var": "warn", // Treat var as block-scoped (like let)
      "default-case-last": "warn", // Ensure default case is last in switch statements
      "default-param-last": "warn", // Default parameters should be declared last
      "max-params": ["warn", 4], // Limit function parameters (here: max 4)
      "no-else-return": "warn", // Avoid else after return in if statements
      "no-empty": "warn", // Disallow empty block statements
      "no-extra-semi": "warn", // Disallow unnecessary semicolons
      "no-floating-decimal": "warn", // Require leading 0 before decimals
      "no-nested-ternary": "warn", // Avoid nested ternary operators
      "no-new": "warn", // Disallow creating new objects for side effects only
      "no-new-object": "warn", // Disallow `new Object()`
      "no-param-reassign": "warn", // Prevent parameter reassignment
      "no-useless-concat": "warn", // Disallow unnecessary string concatenation
      "no-useless-return": "warn", // Disallow redundant return statements
      "prefer-template": "warn", // Prefer template literals over string concatenation
      yoda: "warn", // Enforce yoda conditions (literal on right)
      eqeqeq: "warn", // Require strict equality (=== and !==)
      "no-console": "warn", // Disallow console.log, warn, etc.
      "no-var": "warn", // Require let/const instead of var
      "no-undef": "warn", // Disallow undeclared variables
      "no-eval": "warn", // Disallow use of eval()
      "no-implied-eval": "warn", // Disallow implied eval() (e.g. setTimeout with string)
      "no-use-before-define": "warn", // Disallow using variables before declaration
      "max-classes-per-file": ["warn", 1], // Only allow one class per file

      /* ----------------------- 🧽 Unused Imports / Vars ----------------------- */
      "unused-imports/no-unused-imports": "warn", // Remove unused imports
      "@typescript-eslint/no-unused-vars": "warn", // Remove unused variables

      /* ----------------------- 🧠 TypeScript Rules ----------------------- */
      "@typescript-eslint/explicit-function-return-type": "warn", // Require explicit return types on functions
      "@typescript-eslint/explicit-module-boundary-types": "warn", // Require return types on exported functions
      "@typescript-eslint/naming-convention": "warn", // Enforce consistent naming conventions
      "@typescript-eslint/no-duplicate-enum-values": "warn", // Disallow duplicate values in enums
      "@typescript-eslint/no-require-imports": "warn", // Disallow require(), prefer import
      "@typescript-eslint/no-useless-empty-export": "warn", // Disallow `export {}`
      "@typescript-eslint/consistent-generic-constructors": "warn", // Enforce consistent generic constructors
      "@typescript-eslint/consistent-type-definitions": "warn", // Enforce consistent type definitions (interface vs type)
      "@typescript-eslint/consistent-type-exports": "warn", // Require consistent type export style
      "@typescript-eslint/method-signature-style": "warn", // Enforce method signature consistency
      "@typescript-eslint/no-confusing-void-expression": "warn", // Disallow confusing void expressions
      "@typescript-eslint/no-dynamic-delete": "warn", // Disallow dynamic delete
      "@typescript-eslint/no-extra-non-null-assertion": "warn", // Disallow extra non-null assertions (!!)
      "@typescript-eslint/no-inferrable-types": "warn", // Disallow explicit types that can be inferred
      "@typescript-eslint/no-non-null-assertion": "warn", // Disallow non-null assertions (!)
      "@typescript-eslint/no-redundant-type-constituents": "warn", // Simplify redundant type constituents
      "@typescript-eslint/no-this-alias": "warn", // Disallow assigning this to variables
      "@typescript-eslint/ban-ts-comment": "warn", // Disallow // @ts-ignore, etc.
      "@typescript-eslint/no-unnecessary-qualifier": "off", // Disallow unnecessary namespace qualifiers
      "@typescript-eslint/no-unnecessary-type-constraint": "off", // Disallow unnecessary generic constraints
      "@typescript-eslint/prefer-enum-initializers": "warn", // Require enum members to be initialized
      "@typescript-eslint/prefer-function-type": "warn", // Prefer function types over interfaces
      "@typescript-eslint/prefer-string-starts-ends-with": "warn", // Prefer startsWith/endsWith
      "@typescript-eslint/restrict-plus-operands": "warn", // Enforce correct operand types for +
      "@typescript-eslint/switch-exhaustiveness-check": "warn", // Require exhaustive switch statements
      "@typescript-eslint/unified-signatures": "warn", // Combine function overloads when possible
      "@typescript-eslint/no-implied-eval": "warn", // TS-safe version of no-implied-eval
      "@typescript-eslint/no-use-before-define": "error", // TS-safe version of no-use-before-define
      "no-duplicate-imports": "warn", // Disallow duplicate imports
      "@typescript-eslint/no-explicit-any": "warn", // Disallow usage of any type
      "@typescript-eslint/no-floating-promises": "warn", // Require proper promise handling
      "@typescript-eslint/no-misused-promises": "error", // Disallow misused promises
      "@typescript-eslint/consistent-type-imports": "warn", // Enforce using `import type`
      // "@typescript-eslint/array-type": "warn", // Enforce consistent array type syntax
      "@typescript-eslint/no-shadow": "error", // Disallow variable shadowing
      // "@typescript-eslint/ban-types": "error", // Disallow certain built-in types
      "@typescript-eslint/no-unsafe-argument": "warn", // Disallow unsafe arguments
      "@typescript-eslint/no-unsafe-assignment": "warn", // Disallow unsafe assignments
      "@typescript-eslint/no-unsafe-return": "warn", // Disallow unsafe return values
    },
  },
]);










