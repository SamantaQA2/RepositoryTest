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
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "unused-imports": pluginUnusedImports,
    },

    // ❌ Remove or comment this part to get 0 coverage
    // rules: {
    //   "no-console": "off",
    //   "no-var": "off",
    //   ...
    // },
  },
]);
