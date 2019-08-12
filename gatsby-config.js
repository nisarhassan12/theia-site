module.exports = {
    siteMetadata: {
        title: 'Theia - Cloud and Desktop IDE',
        description: "Theia is an open-source cloud &nbsp; desktop IDE framework implemented in TypeScript."
    },
    plugins: [
        'gatsby-plugin-emotion',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_self",
                            rel: "nofollow"
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // CommonMark mode (default: true)
                commonmark: true,
                // Footnotes mode (default: true)
                footnotes: true,
                // Pedantic mode (default: true)
                pedantic: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [],
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/layouts/layout.js')
                }
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'docs',
                path: `${__dirname}/src/docs`
            }
        }
    ]
}
