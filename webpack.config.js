module.exports = {

	entry: {
		popup: './popup/index.js',
		background: './background/index.js',
		content: './content/index.js'
	},
		 	
	output: {
		path: 'assets',
		filename: "[name].js",
		publicPath: '/assets'
	},
	devServer: {
		contentBase: ['./popup', './background', './content']
		
	},
	watch:true,

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		],	
	}
};