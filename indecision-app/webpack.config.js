const path = require("path");
//cofinguration details for webpack build
module.exports = { 
  //where webpack should start (The main file)  
  entry: './src/app.js', 
   //of the output file , must be absolute (complete path) but there is variable which will make it easier:
    // __dirname path to Indecision-app folder and using node function to concatenate paths ,
    // we wont use string concatenation due to edge cases
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js' // can be any name but this is the most common
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
      },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
        
      ]
    }]
    
    

},
devtool: 'cheap-module--eval-source-map',

devServer: {
  contentBase: path.join(__dirname, 'public')
}
};

