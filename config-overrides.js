const { override, fixBabelImports} = require('customize-cra');

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    })
  )
}