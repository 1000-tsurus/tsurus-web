import { useAuth } from '@/Hooks/auth'
import { UserModel } from '@/Models/interfaces'
import { UserContainer } from '@/Pages/User/style'
import { api } from '@/Services/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import bkgd from '@/Assets/img/liquid-cheese.svg'

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
					</div>
				</header>
				{/* GRID */}
				<section>
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
					</aside>
				</section>
			</> : <h1>loading</h1>}
		</UserContainer>
	)
}
