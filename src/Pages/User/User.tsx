import { useAuth } from '@/Hooks/auth'
import { UserModel } from '@/Models/interfaces'
import { UserContainer } from '@/Pages/User/style'
import { api } from '@/Services/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import bkgd from '@/Assets/img/liquid-cheese.svg'
import { UserSkeleton } from '@/Pages/User/UserSkeleton'

export default function User() {	
	const [userData, setUserData] = useState<UserModel>(),
		[isLoading, setIsLoading] = useState<boolean>(true),
		{userId} = useParams()

	useEffect(() => {
		setIsLoading(true)
		api.get(`user/show/${userId}`)
			.then((res) => {
				setUserData(res.data)
			})
			.catch((err) => {
				console.log(err);
				toast.error(
					'Erro ao caregar informações do usuário. Por favor, tente novamente mais tarde',
					{theme: 'colored'}
				)
			})
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<UserContainer>
			{!isLoading && userData ?
			<>
				<header style={{
					backgroundImage: `url(${bkgd})`,
				}}>
					<div className='first_profile_view'>
						<div className='avatar'>
							<img src={userData?.icon_url} alt='Imagem de perfil.'/>
						</div>
						<h1>{userData?.full_name}</h1>
						<footer title='Habilidades'>
							{userData?.skill_category.map(s => {
								return <p key={s.id}>{s.skill_name}</p>
							})}
						</footer>
					</div>
				</header>
				{/* GRID */}
				<section className='grid'>
					<aside>
						<h1>Contatos</h1>
						<ul>
							<li>Email: {userData.email}</li>
							{!!userData.phone[0].is_public &&
								<li>{
									!!userData.phone[0].is_wpp ?
										'WhatsApp' : 'Telefone'
								}: ({userData.phone[0].ddd}) {userData.phone[0].phone_number}</li>}
						</ul>
						<br/>
						<br/>
						{userData.employer.length && <>
							<h1>Profissional em:</h1>
							<ul>
								<li>Cargo: {userData.employer[0].employer}</li>
								<li>Desde: {new Date(userData.employer[0].entry_date_time).toLocaleDateString()}</li>
							</ul>
						</>}
					</aside>
					<div className='body'>
						<section className='text_container'>
							<h1>Um pouco sobre a minha trajetória:</h1>
							<p>{userData.trajectory[0].trajectory_text}</p>
						</section>
						<section className='text_container'>
							<h1>Como poderei te ajudar:</h1>
							<p>{userData.to_help[0].to_help_text}</p>
						</section>
					</div>
				</section>
			</> : <UserSkeleton/>}
		</UserContainer>
	)
}
