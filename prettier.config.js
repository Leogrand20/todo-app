const config = {
  tabWidth: 2,
  printWidth: 100,
  semi: false,
  singleQuote: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^.+\\.css$', // ✅ CSS и side-effect импорты — в самом начале
    '^react$', // React отдельно
    '<THIRD_PARTY_MODULES>', // npm пакеты
    '^@/.*', // алиасы
    '^[./]', // локальные модули
  ],
  importOrderSeparation: true, // пустая строка между группами
  importOrderSortSpecifiers: true, // { b, a } → { a, b }
  importOrderBuiltinModulesToTop: false, // не поднимаем built-in модули
  experimentalBabelParserPluginsList: ['jsx', 'typescript'],
}

export default config
