module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: "./src/index.ts",
        a: "./src/a.ts",
        b: "./src/b.ts"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist",
        library: ['WebpackTest', '[name]'],
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    optimization: {
        splitChunks: {
            // chunks: 'all',
            // minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: 'single'
    }
};