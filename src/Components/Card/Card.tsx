import React from 'react'
import { All } from './style';
import pictureProfile from '../../Assets/img/profile-picture-card.jpg'

export default function Card() {
  return (
    <All>
      <div className="card-container">
        <div className="card">
          <img src={pictureProfile} alt='Foto de perfil do mentor'></img>
          <h3>Nome do Mentor</h3>
          <div className="mentorsArea">Área do mentor</div>
          <a href="#"><button className="btn">Ver Perfil</button></a>
        </div>
      </div>
    </All>
  )
}
