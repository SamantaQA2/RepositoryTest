import globals from "globals";
import tseslint from "typescript-eslint";
import pluginUnusedImports from "eslint-plugin-unused-imports";

export default [
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
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      // ...
    },
  },
];
