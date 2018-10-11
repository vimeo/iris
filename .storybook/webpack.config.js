module.exports = (baseConfig, env, config) => {

    config.module.rules = config.module.rules.filter(loader => !loader.test.exec('.svg'));

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [{
                loader: 'awesome-typescript-loader'
            },
            {
                loader: 'react-docgen-typescript-loader'
            }
        ]
    }, {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }, );
    
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
};