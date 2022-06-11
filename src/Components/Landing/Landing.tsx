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
                        <div>
                            <h2>Conheça a 1000-Tsurus</h2>
                            <p>
                                Projeto da secretaria do trabalho para empreendedores que desejam receber <br />
                                mentoria gratuita e recomendada
                            </p>
                        </div>
                        <img src={business_chat}></img>
                    </div>
                    <div className='carouselItem'>
                        <img src={online_stats} className='' />
                    </div>
                    <div className='carouselItem'>
                        <img src={financial_data} className='' />
                    </div>
                </Carousel>
            </div>
        </All>
    )
}
