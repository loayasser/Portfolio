export default {
  plugins: {
    // FIX: Changed 'tailwindcss' to '@tailwindcss/postcss' to match the modern package structure.
    // This resolves the Internal server error due to the outdated plugin name.
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}