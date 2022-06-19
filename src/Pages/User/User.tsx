import { User } from '@/Models/interfaces'
import { api } from '@/Services/api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function User() {	
	const [userData, setUserData] = useState<User>(),
		[isLoading, setIsLoading] = useState<boolean>(true),
		{userId} = useParams()

	useEffect(() => {
		setIsLoading(true)
		api.get(`user/${userId}`)
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
		<div>User page</div>
	)
}
