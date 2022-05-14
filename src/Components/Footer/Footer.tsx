import { All } from './style'

import * as AiIcons from 'react-icons/ai'
import icon from '../../Assets/Logos/icon-comp.png'

export default function Footer() {
    return (
        <All>
            <div className='left-container'>{/* <img src={icon} alt="ícone Mil Tsurus"></img> */}</div>
            <div className='right-container'>
                <p className='title'>Aplicação feita por:</p>
                <div className='containerFooter'>
                    <div className='socialMedia'>
                        <p className='social-media'>Guilherme Iuri de Barros</p>
                        <div className='icons-row'>
                            <a
                                href='https://www.linkedin.com/in/guilherme-iuri-de-barros/'
                                target='_blank'
                                className='linkedinLink'
                            >
                                <AiIcons.AiFillLinkedin />
                            </a>
                            <a href='https://www.instagram.com/eu.guilhermeiuri' target='_blank'>
                                <AiIcons.AiOutlineInstagram />
                            </a>
                            <a href='https://www.twitter.com/GuilIuriDev' target='_blank'>
                                <AiIcons.AiOutlineTwitter />
                            </a>
                            <a href='https://github.com/guiliuri13' target='_blank'>
                                <AiIcons.AiOutlineGithub />
                            </a>
                        </div>
                    </div>
                    <div className='socialMedia'>
                        <p className='social-media'>José Manoel Sanches Malassise</p>
                        <a
                            href='https://www.linkedin.com/in/jos%C3%A9-malassise-353380227/?originalSubdomain=br'
                            target='_blank'
                            className='linkedinLink2'
                        >
                            <AiIcons.AiFillLinkedin />
                        </a>
                        <a href='https://www.instagram.com/josemanoelsanches' target='_blank'>
                            <AiIcons.AiOutlineInstagram />
                        </a>
                        <a href='#' target='_blank'>
                            <AiIcons.AiOutlineTwitter />
                        </a>
                        <a href='https://www.github.com/zesanches' target='_blank'>
                            <AiIcons.AiOutlineGithub />
                        </a>
                    </div>
                </div>
            </div>
        </All>
    )
}
