import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/variables'
import Layout from '../components/Layout'

export default () => {
    return (
        <Layout>
            <div>

                {/* ***** Header ***** */}

                <header className="header" role="header">
                    <div className="row">
                    <nav className="nav">
                        <ul className="nav__items">
                            <li className="nav__item">
                                <a href="#features" className="nav__link">Features</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Documentation</a>
                            </li>
                            <li className="nav__item">
                                <a href="https://spectrum.chat/theia" target="_blank" className="nav__link">Comunity</a>
                            </li>
                            <li className="nav__item">
                                <a href="https://typefox.io/eclipse-theia" className="nav__link">Support</a>
                            </li>
                            <li className="nav__item">
                                <a href="https://typefox.io/trainings-2" className="nav__link">Training</a>
                            </li>
                        </ul>
                </nav>
                <div className="header__text-box">
                    <div className="header__logo-box">
                    <img className="header__logo" src="resources/theia-logo-dark.svg" alt="theia logo" />
                    </div>
                    <h1 className="heading-primary">
                    Cloud and Desktop IDE
                    </h1>
                    <a className="btn" href="https://github.com/theia-ide/theia" target="_blank">View on GitHub</a>
                    <a className="btn" href="https://gitpod.io#https://github.com/theia-ide/theia" target="_blank">Try in Gitpod</a>
                </div>
                <div className="header__github-details">
                    <iframe className="header__github-button" src="https://ghbtns.com/github-btn.html?user=theia-ide&repo=theia&type=star&count=true" frameBorder={0} scrolling={0} />
                    <iframe className="header__github-button" src="https://ghbtns.com/github-btn.html?user=theia-ide&repo=theia&type=fork&count=true" frameBorder={0} scrolling={0} />
                </div>
            </div>
            <div className="header__screenshot-container">
                <img className="header__screenshot" src="resources/theia-screenshot.png" alt="Screenshot of Theia IDE" />
            </div>

            <div className="row">
                
            {/* ***** Contributors ***** */}

                <section className="contributors">
                    <h3 className="heading-tertiary">Contributors</h3>
                    <div className="contributors__images">
                        <div className="contributors__image-container">
                            <a target="_blank" href="https://typefox.io">
                            <img className="contributors__image" src="resources/typefox.png" alt="Typefox Logo" />
                            </a>
                        </div>
                        <div className="contributors__image-container">
                            <a target="_blank" href="https://www.redhat.com">
                            <img className="contributors__image" src="resources/redhat.svg" alt="Redhat Logo" />
                            </a>
                        </div>
                        <div className="contributors__image-container">
                            <a target="_blank" href="https://www.ibm.com">
                            <img className="contributors__image contributors__image--ibm" src="resources/ibm.svg" alt="IBM logo" />
                            </a>
                        </div>
                        <div className="contributors__image-container">
                            <a target="_blank" href="https://google.com">
                            <img className="contributors__image contributors__image--google" src="resources/google.svg" alt="Google logo" />
                            </a>
                        </div>
                        <div className="contributors__image-container">
                            <a target="_blank" href="https://www.arm.com">
                            <img className="contributors__image contributors__image--arm" src="resources/arm.svg" alt="ARM logo" />
                            </a>
                        </div>
                        <div className="contributors__image-container">
                            <a target="_blank" href="https://www.ericsson.com">
                            <img className="contributors__image contributors__image--ericsson" src="resources/ericsson.svg" alt="Ericsson logo" />
                            </a>
                        </div>
                        <div className="contributors__image-container">
                            <a target="_blank" href="https://www.sap.com/">
                            <img className="contributors__image contributors__image--sap" src="resources/sap.svg" alt="Sap logo" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    </div>

        </Layout>
    )
}
