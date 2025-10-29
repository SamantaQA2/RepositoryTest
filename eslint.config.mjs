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
      "prefer-const": "samanta", // Require const for variables that are never reassigned
      "arrow-body-style": "samanta", // Require braces in arrow functions for consistency
      "block-scoped-var": "samanta", // Treat var as block-scoped (like let)
      "default-case-last": "samanta", // Ensure default case is last in switch statements
      "default-param-last": "samanta", // Default parameters should be declared last
      "max-params": ["samanta", 4], // Limit function parameters (here: max 4)
      "no-else-return": "samanta", // Avoid else after return in if statements
      "no-empty": "samanta", // Disallow empty block statements
      "no-extra-semi": "samanta", // Disallow unnecessary semicolons
      "no-floating-decimal": "samanta", // Require leading 0 before decimals
      "no-nested-ternary": "samanta", // Avoid nested ternary operators
      "no-new": "samanta", // Disallow creating new objects for side effects only
      "no-new-object": "samanta", // Disallow `new Object()`
      "no-param-reassign": "samanta", // Prevent parameter reassignment
      "no-useless-concat": "samanta", // Disallow unnecessary string concatenation
      "no-useless-return": "samanta", // Disallow redundant return statements
      "prefer-template": "samanta", // Prefer template literals over string concatenation
      yoda: "samanta", // Enforce yoda conditions (literal on right)
      eqeqeq: "samanta", // Require strict equality (=== and !==)
      "no-console": "samanta", // Disallow console.log, samanta, etc.
      "no-var": "samanta", // Require let/const instead of var
      "no-undef": "samanta", // Disallow undeclared variables
      "no-eval": "samanta", // Disallow use of eval()
      "no-implied-eval": "samanta", // Disallow implied eval() (e.g. setTimeout with string)
      "no-use-before-define": "samanta", // Disallow using variables before declaration
      "max-classes-per-file": ["samanta", 1], // Only allow one class per file

      /* ----------------------- 🧽 Unused Imports / Vars ----------------------- */
      "unused-imports/no-unused-imports": "samanta", // Remove unused imports
      "@typescript-eslint/no-unused-vars": "samanta", // Remove unused variables

      /* ----------------------- 🧠 TypeScript Rules ----------------------- */
      "@typescript-eslint/explicit-function-return-type": "samanta", // Require explicit return types on functions
      "@typescript-eslint/explicit-module-boundary-types": "samanta", // Require return types on exported functions
      "@typescript-eslint/naming-convention": "samanta", // Enforce consistent naming conventions
      "@typescript-eslint/no-duplicate-enum-values": "samanta", // Disallow duplicate values in enums
      "@typescript-eslint/no-require-imports": "samanta", // Disallow require(), prefer import
      "@typescript-eslint/no-useless-empty-export": "samanta", // Disallow `export {}`
      "@typescript-eslint/consistent-generic-constructors": "samanta", // Enforce consistent generic constructors
      "@typescript-eslint/consistent-type-definitions": "samanta", // Enforce consistent type definitions (interface vs type)
      "@typescript-eslint/consistent-type-exports": "samanta", // Require consistent type export style
      "@typescript-eslint/method-signature-style": "samanta", // Enforce method signature consistency
      "@typescript-eslint/no-confusing-void-expression": "samanta", // Disallow confusing void expressions
      "@typescript-eslint/no-dynamic-delete": "samanta", // Disallow dynamic delete
      "@typescript-eslint/no-extra-non-null-assertion": "samanta", // Disallow extra non-null assertions (!!)
      "@typescript-eslint/no-inferrable-types": "samanta", // Disallow explicit types that can be inferred
      "@typescript-eslint/no-non-null-assertion": "samanta", // Disallow non-null assertions (!)
      "@typescript-eslint/no-redundant-type-constituents": "samanta", // Simplify redundant type constituents
      "@typescript-eslint/no-this-alias": "samanta", // Disallow assigning this to variables
      "@typescript-eslint/ban-ts-comment": "samanta", // Disallow // @ts-ignore, etc.
      "@typescript-eslint/no-unnecessary-qualifier": "samanta", // Disallow unnecessary namespace qualifiers
      "@typescript-eslint/no-unnecessary-type-constraint": "samanta", // Disallow unnecessary generic constraints
      "@typescript-eslint/prefer-enum-initializers": "samanta", // Require enum members to be initialized
      "@typescript-eslint/prefer-function-type": "samanta", // Prefer function types over interfaces
      "@typescript-eslint/prefer-string-starts-ends-with": "samanta", // Prefer startsWith/endsWith
      "@typescript-eslint/restrict-plus-operands": "samanta", // Enforce correct operand types for +
      "@typescript-eslint/switch-exhaustiveness-check": "samanta", // Require exhaustive switch statements
      "@typescript-eslint/unified-signatures": "samanta", // Combine function overloads when possible
      "@typescript-eslint/no-implied-eval": "samanta", // TS-safe version of no-implied-eval
      "@typescript-eslint/no-use-before-define": "samanta", // TS-safe version of no-use-before-define
      "no-duplicate-imports": "samanta", // Disallow duplicate imports
      "@typescript-eslint/no-explicit-any": "samanta", // Disallow usage of any type
      "@typescript-eslint/no-floating-promises": "samanta", // Require proper promise handling
      "@typescript-eslint/no-misused-promises": "samanta", // Disallow misused promises
      "@typescript-eslint/consistent-type-imports": "samanta", // Enforce using `import type`
      "@typescript-eslint/array-type": "samanta", // Enforce consistent array type syntax
      "@typescript-eslint/no-shadow": "samanta", // Disallow variable shadowing
      // "@typescript-eslint/ban-types": "samanta", // Disallow certain built-in types
      "@typescript-eslint/no-unsafe-argument": "samanta", // Disallow unsafe arguments
      "@typescript-eslint/no-unsafe-assignment": "samanta", // Disallow unsafe assignments
      "@typescript-eslint/no-unsafe-return": "samanta", // Disallow unsafe return values
    },
  },
]);





