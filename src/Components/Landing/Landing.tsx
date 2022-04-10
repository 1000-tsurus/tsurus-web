import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { All } from './style'
import imgCarousel1 from '../../Assets/img/imgCarousel1.png'
import imgCarousel2 from '../../Assets/img/imgCarousel2.png'
import imgCarousel3 from '../../Assets/img/imgCarousel3.png'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <All>
            <div className='container'>
                <Carousel>
                    <div
                        className='carouselItem'
                        style={{
                            backgroundImage: `url(${imgCarousel1})`
                        }}
                    >
                        <div>
                            <h1 className='title'>Conheça o Mil Tsurus!</h1>
                            <p>Projeto de mentoria da secretaria do trabalho de Londrina.</p>
                        </div>
                    </div>
                    <div
                        className='carouselItem'
                        style={{
                            backgroundImage: `url(${imgCarousel2})`
                        }}
                    >
                        <div>
                            <h1 className='title'>Conheça nossos mentores!</h1>
                            <p>
                                Pessoas que passaram por experiências na área a qual você busca sua mentoria e que estão
                                dispostas a lhe ajudar!
                            </p>
                        </div>
                    </div>
                    <div
                        className='carouselItem'
                        style={{
                            backgroundImage: `url(${imgCarousel3})`
                        }}
                    >
                        <div>
                            <Link to='/register' style={{color: `#fff`}}>
                                <h1 className='title'>
                                    <strong>Cadastre-se</strong> já!
                                </h1>
                            </Link>
                            <p>Está interessado em ser mentor pela Mil Tsurus?</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </All>
    )
}
