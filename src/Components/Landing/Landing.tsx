import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { All } from './style'
import business_chat from '../../Assets/ilustrations/business_chat.svg'
import online_stats from '../../Assets/ilustrations/online_stats.svg'
import financial_data from '../../Assets/ilustrations/financial_data.svg'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <All>
            <div className='container'>
                <Carousel showArrows={true} showStatus={false} showThumbs={false}>
                    <div className='carouselItem'>
                        <aside>
                            <h1>Conheça a 1000-Tsurus</h1>
                            <p>Projeto da secretaria do trabalho para empreendedores que desejam receber mentoria gratuita e recomendada</p>
                        </aside>
                        <img src={business_chat}/>
                    </div>
                    <div className='carouselItem'>
                        <aside>
                            <h1>Conheça nossos mentores!</h1>
                            <p>Pessoas que passaram por experiências na área a qual você busca sua mentoria e que estão dispostas a lhe ajudar!</p>
                        </aside>
                        <img src={online_stats}/>
                    </div>
                    <div className='carouselItem'>
                        <aside>
                            <Link to='/register'>
                                <h1>Cadastre-se já!</h1>
                            </Link>
                            <p>Está interessado em ser mentor pela Mil Tsurus?</p>
                        </aside>
                        <img src={financial_data}/>
                    </div>
                </Carousel>
            </div>
        </All>
    )
}
