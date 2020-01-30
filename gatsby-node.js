/* ========================================================

    gatsby-node

======================================================== */

const path = require('path')

/* ========================================================
    onCreateWebpackConfig

    modify the webpack config
======================================================== */

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                components: path.resolve('./src/components'),
                modules:    path.resolve('./src/modules'),
                layouts:    path.resolve('./src/layouts'),
                pages:      path.resolve('./src/pages'),
                assets:     path.resolve('./src/assets'),
                styles:     path.resolve('./src/styles')
            }
        },
        module: {
            rules: [
                {
                    test: /stickyfilljs/,
                    use: loaders.null()
                }
            ]
        },
        node: {
            fs: 'empty',
            stickyfilljs: 'empty'
        }
    })

    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /stickyfilljs/,
                        use: loaders.null()
                    }
                ]
            },
            node: {
                stickyfilljs: 'empty'
            }
        })
    }
}