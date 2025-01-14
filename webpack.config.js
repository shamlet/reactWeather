var webpack = require('webpack')

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    // allows you to not have to require 'jquery' in every file
    // it will look for '$' and know what module to find it in.
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  // where webpack to start processing code
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname, // ('HelloReact' folder) allows you to remove './' from path to required components
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx'] // list of file extensions we want to process
  },
  module: {
    loaders: [ // list of loaders, each loader is within an object
      {
        loader: 'babel-loader', // tell babel-loader to get files, and parse them with react and es2015
        query: { // tell loader what to do
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/, // which files to get (in this case, all *.jsx files)
        exclude: /(node_modules|bower_components)/ // folders to exclude
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
