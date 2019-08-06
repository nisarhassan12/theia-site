import React from 'react'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/use-site-metadata'
import { fontSizes, colors, grid, breakpoints } from '../utils/variables'

const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata()
    return (
        <>
            <Global styles={css`

                /* --------------------------------------------- */
                /* ----- Basic Setup ----- */
                /* --------------------------------------------- */

                *,
                *::before,
                *::after {
                    margin: 0;
                    padding: 0;
                    box-sizing: inherit;
                }

                html {
                    font-size: 62.5%;

                    @media(max-width: ${breakpoints.md}) {
                        font-size: 58.5%;
                    }
                }

                body {
                    font-family: 'Open sans', sans-serif;
                    font-size: ${fontSizes.default};
                    color: ${colors.greyOne};
                    line-height: 1.5;
                    box-sizing: border-box;
                }

                a,
                button {
                    cursor: pointer;
                }

                button,
                input {
                    font-family: inherit;
                }


                /* --------------------------------------------- */
                /* ----- Headlines and Paragraphs ----- */
                /* --------------------------------------------- */

                h1,
                h2,
                h3,
                h4 {
                    font-family: 'Anonymous Pro', monospace;
                    font-weight: 100;
                }

                .heading-primary {
                    font-size: 6rem;
                }

                .heading-tertiary {
                    font-size: 2.5rem;
                }

                /* --------------------------------------------- */
                /* ----- Layout Helpers ----- */
                /* --------------------------------------------- */

                .row {
                    max-width: ${grid.maxWidth};
                    width: 80%;
                    margin: 0 auto;

                    @media (max-width: ${breakpoints.md}) {
                        width: 95%;
                    }
                }

                /* --------------------------------------------- */
                /* ----- Buttons ----- */
                /* --------------------------------------------- */

                .btn {
                    display: inline-block;
                    padding: .8rem 1.6rem;
                    color: inherit;
                    text-decoration: none;
                    border: 2px solid;
                    border-radius: 3px;
                }
            `} />
            <Helmet>
                <html lang='en' />
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#FFFFFF" />
	            <link rel="canonical" href="https://www.theia-ide.org/" />
	            <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href={require("../resources/favicon.ico")} />
                <link rel="apple-touch-icon" href={require("../resources/apple-touch-icon.png")} />
                <link rel="apple-touch-icon" sizes="57x57" href={require("../resources/apple-icon-57x57.png")} />
                <link rel="apple-touch-icon" sizes="60x60" href={require("../resources/apple-icon-60x60.png")} />
                <link rel="apple-touch-icon" sizes="72x72" href={require("../resources/apple-icon-72x72.png")} />
                <link rel="apple-touch-icon" sizes="76x76" href={require("../resources/apple-icon-76x76.png")} />
                <link rel="apple-touch-icon" sizes="114x114" href={require("../resources/apple-icon-114x114.png")} />
                <link rel="apple-touch-icon" sizes="120x120" href={require("../resources/apple-icon-120x120.png")} />
                <link rel="apple-touch-icon" sizes="144x144" href={require("../resources/apple-icon-144x144.png")} />
                <link rel="apple-touch-icon" sizes="152x152" href={require("../resources/apple-icon-152x152.png")} />
                <link rel="apple-touch-icon" sizes="180x180" href={require("../resources/apple-icon-180x180.png")} />
                <link rel="icon" type="image/png" sizes="192x192" href={require("../resources/android-icon-192x192.png")} />
                <link rel="icon" type="image/png" sizes="32x32" href={require("../resources/favicon-32x32.png")} />
                <link rel="icon" type="image/png" sizes="96x96" href={require("../resources/favicon-96x96.png")} />
                <link rel="icon" type="image/png" sizes="16x16" href={require("../resources/favicon-16x16.png")} />
                <link rel="manifest" href={require("../resources/manifest.json")} />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content={require("../resources/ms-icon-144x144.png")} />
            </Helmet>
            <>
                {children}
            </>
        </>
    )
}

export default Layout