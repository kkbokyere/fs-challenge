const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        '@root': path.resolve(__dirname, './src'),
        '@ducks': path.resolve(__dirname, './src/state/ducks'),
        '@containers': path.resolve(__dirname, './src/containers'),
        '@components': path.resolve(__dirname, './src/components'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@state': path.resolve(__dirname, './src/state'),
        '@tests': path.resolve(__dirname, './src/tests'),
        '@views': path.resolve(__dirname, './src')
    })
);
