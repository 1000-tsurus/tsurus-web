import React from 'react'
import { All } from './style'
import mobile_encryption from '../../assets/ilustrations/mobile_encryption.svg'

export default function MobileScreen() {
    return (
        <All>
            <img src={mobile_encryption} />
            <h2>Ops! Você está adiantado...</h2>
            <p>
                Nosso time ainda está desenvolvendo o aplicativo para dispositivos Mobile. Por favor Aguarde nossos
                desenvolvedores.
                <br />
                <br />
                <strong>Agradecemos a paciência e compreensão!</strong>
            </p>
        </All>
    )
}
