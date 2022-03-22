const path = require("path");

module.exports = {
    entry: "./src/index.js",
     output: {
         path: path.resolve(__dirname , "build"),
         filename: "bundle.js"
     },
     module :{
         rules: [{ test: /\.css$/ , use : ["style-loader" , "css-loader"]},
         { test: /\.(png|jp?g|svg)$/ , use : [{loader: "url-loader",
        options: {limit: 5000}
        }]}
        ]
     }
}