var ExtractTextPlugin=require("extract-text-webpack-plugin")
module.exports={
    entry:[ `${__dirname}/src/js/index.jsx`,`${__dirname}/src/css/styles.css`],
    output:{
        path:`${__dirname}/dist/js`,
        filename:"bundle.js"
    },
 
    module:{
        rules:[
            {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                
                loader:"babel-loader",
                options:{
                    presets:["env"]
                }
            }
        },
        {
            test:/\.jsx$/,
            exclude:/node_modules/,
            use:{
                
                loader:"babel-loader",
                options:{
                    presets:["react","env"]
                }
            } 
        }
        ,{
            test:/\.css$/,
            use:ExtractTextPlugin.extract({
                use:[
                    {
                        loader:"css-loader",
                        options:{
                            url:false,
                        }
                    },
               
                ]
            })
        },
        {
            test: /\.scss$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  url: false
                }
              },
              "sass-loader"
            ]
          }
    ]
    },
   
    
    resolve:{extensions:[".jsx",".js",".css"]},
    plugins:[
        new ExtractTextPlugin({
            filename:"../css/styles.css"
        })
    ]
}
