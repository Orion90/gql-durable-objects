const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const webpack = require('webpack');

module.exports = {
  target: 'webworker',
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
    sourceMapFilename: 'index.js.map',
  },
  optimization: {
    usedExports: true,
    minimize: true
  },
  resolve: {
    // extensions: [".ts", ".mjs", ".js"],
    alias: {
      // While Apollo Server doesn't use the 'fs' Node.js builtin itself,
      // its dependency - graphql-upload - does leverage it.
      // An intention is for Apollo Server 3.x to no longer directly rely on
      // graphql-upload, so this may be re-visited when that release occurs.
      fs: path.resolve(__dirname, './null.js'),

      // The 'net' and 'tls' Node.js built-in usage within Apollo Server
      // is merely to run `instanceof` checks against an existing,
      // user-supplied "server" instance when subscriptions are desired to
      // be bound to an already-created server.  For the purposes of
      // Cloudflare, where none of these Node.js builtins exist, this
      // instanceof check is irrelevant because such a class could not
      // exist.
      net: path.resolve(__dirname, './null.js'),
      tls: path.resolve(__dirname, './null.js'),
      util: path.resolve(__dirname, './null.js'),
      url: path.resolve(__dirname, './null.js'),
      zlib: path.resolve(__dirname, './null.js'),
      stream: path.resolve(__dirname, './null.js'),
      os: path.resolve(__dirname, './null.js'),
      path: path.resolve(__dirname, './null.js'),
      sha512: path.resolve(__dirname, './node_modules/sha.js/sha512.js'),
      sha256: path.resolve(__dirname, './node_modules/sha.js/sha256.js'),
      graphql$: path.resolve(__dirname, './node_modules/graphql/index.js'),
    },
    fallback: {
      crypto: false,
      buffer: false,
      process: false,
    }
  },
  node: {
    global: true,
    __filename: false,
    __dirname: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/shim.mjs', to: 'shim.mjs' }],
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
}
