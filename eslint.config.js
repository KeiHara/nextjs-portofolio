import { tanstackConfig } from "@tanstack/eslint-config"
import router from "@tanstack/eslint-plugin-router"
import query from "@tanstack/eslint-plugin-query"
import hooks from "eslint-plugin-react-hooks"
export default [
  {
    ignores: [
      ".output/**",
      ".vercel/**",
      ".nitro/**",
      ".tanstack/**",
      "dist/**",
      "src/routeTree.gen.ts",
      "eslint.config.js",
    ],
  },
  ...tanstackConfig,
  ...router.configs["flat/recommended"],
  ...query.configs["flat/recommended"],
  hooks.configs.flat.recommended,
  {
    rules: {
      "import/no-cycle": "off",
      "import/order": "off",
      "sort-imports": "off",
      "@typescript-eslint/array-type": "off",
      "pnpm/json-enforce-catalog": "off",
    },
  },
  {
    files: ["src/components/ui/**"],
    rules: {
      "import/consistent-type-specifier-style": ["error", "prefer-inline"],
    },
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["src/components/ui/**"],
    rules: { "max-lines": ["error", 199] },
  },
]
