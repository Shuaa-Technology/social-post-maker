const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            const sassRule = {
                test: /\.scss$/,
                use: [
                    {
                        loader: require.resolve('sass-loader'),
                        options: {
                            sassOptions: {
                                includePaths: [path.join(__dirname, 'src')],
                            },
                        },
                    },
                ],
            };
            webpackConfig.module.rules.push(sassRule);
            return webpackConfig;
        },
    },
};
