var config = {
	entry: './src/react_modules/index.js',
	output: {
		path: './build',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015','react']
				},
			}
		]
	}
}

module.exports = config;