const path = require("path");
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

const dist = path.resolve(__dirname, "dist");

module.exports = {
	mode: "development",
	entry: ['./src/index.tsx',],
	output: {
		publicPath: '/',
		path: dist,
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.css', '.less'],
	},
	devtool: 'eval-source-map',
	devServer: {
		inline: true,
		contentBase: dist,
		hot: true,
		port: 9000,
	},
  module: {
    rules: [
			{
				test: /\.(less)$/,
				use: [
					{
						loader: 'style-loader',
					},
					// {
					// 	loader: MiniCssExtractPlugin.loader,
					// },
					{
						loader: 'css-loader',
					},
					{
						loader: 'less-loader',
						options: {
							// modifyVars: {
							// 	'primary-color': '#1DA57A',
							// 	'link-color': '#1DA57A',
							// 	'border-radius-base': '2px',
							// 	hack: `true; @import "your-less-file-.less";`, // Override with less file
							// },
							lessOptions : { javascriptEnabled: true }
						},
					},
				],
			},
			{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /\*(spec|test)\.ts/],
    	}
    ],
  },
	plugins: [
		new HtmlWebPackPlugin({
			template: path.join(__dirname, 'src/index.html'),
			filename: 'index.html',
	}),
 ]
}
