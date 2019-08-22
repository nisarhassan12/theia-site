import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Background from '../resources/background-image.png'
import TwitterLogo from '../resources/twitter.svg'
import GithubLogo from '../resources/github.svg'
import SpectrumLogo from '../resources/spectrum.svg'

const StyledFooter = styled.div`
    .footer {
        padding: 4rem 0;
        text-align: center;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-top: 10px solid #f8f8f8;

        &__icons {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
        }

        &__icon {
            height: 3rem;
            display: block;
        }

        a {
            &:not(:last-child) {
                margin-right: 3rem;
            }
        }

        &__copyright {
            margin-top: 5rem;
        }
    }
`

const Footer = ({background}) => (
    <StyledFooter>
        <footer className="footer" style={{background: background ? `url(${Background})` : null}}>
            <div className="footer__icons">
                <a href="https://twitter.com/theia_ide" target="_blank">
                    <img src={TwitterLogo} alt="Twitter Logo" className="footer__icon" />
                </a>
                <a href="https://github.com/theia-ide/theia" target="_blank">
                    <img src={GithubLogo} alt="Github Logo" className="footer__icon" />
                </a>
                <a href="https://spectrum.chat/theia" target="_blank">
                    <img src={SpectrumLogo} alt="Spectrum Logo" className="footer__icon" />
                </a>
            </div>
            <p>Any questions, feedback or requests? <a href="#">Please, get in touch.</a></p>
            <p className="footer__copyright">© 2019 by Typefox | <Link to="/imprint">Imprint</Link></p>
        </footer>
    </StyledFooter>
)

export default Footer