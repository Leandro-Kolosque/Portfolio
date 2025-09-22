import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Desabilitar warning de variáveis não utilizadas
      "@typescript-eslint/no-unused-vars": "off",
      
      // Desabilitar erro de uso de 'any'
      "@typescript-eslint/no-explicit-any": "off",
      
      // Desabilitar warning de prefer-const
      "prefer-const": "off",
      
      // Desabilitar warning de imagens (se quiser)
      "@next/next/no-img-element": "off",
      
      // Desabilitar warning de hooks do React (se quiser)
      "react-hooks/exhaustive-deps": "off",
      
      // Desabilitar warning de entidades não escapadas
      "react/no-unescaped-entities": "off",
      
      // Desabilitar warning de var (use let/const)
      "no-var": "off"
    }
  }
];

export default eslintConfig;
