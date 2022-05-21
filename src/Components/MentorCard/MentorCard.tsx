import React, { useContext } from 'react'
import { All } from './style'
import pictureProfile from '../../Assets/img/profile-picture-card.jpg'
import { ThemeContext } from '@/Providers'
import { Link } from 'react-router-dom'

export default function Card({ user }: any) {
    return (
        <All>
            <div className='card'>
                <img
                    src={
                        user.icon_url ??
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'
                    }
                    alt='Foto de perfil do mentor'
                ></img>
                <aside>
                    <h1>{user.full_name.split(' ')[0]}</h1>
                    <div className='infos'>
                        {!!user.skill_category.length && (
                            <div className='infos_content'>
                                <h3>Minhas habilidades:</h3>
                                <div className='skills'>
                                    {user.skill_category.map((skill: any) => (
                                        <p key={skill.id}>{skill.skill_name}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                        {!!user.to_help[0] && (
                            <div className='infos_content'>
                                <h3>Como posso te ajudar:</h3>
                                <div className='help'>
                                    <span key={user.id}>{user.to_help[0].to_help_text}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to={'/user/' + user.id}>Ver Perfil</Link>
                </aside>
            </div>
        </All>
    )
}
