import { api } from '@/Services/api'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Card from '../MentorCard/MentorCard'
import Skeletons from './skeletons'
import { List } from './style'

export default function MentorList() {
    const [users, setUsers] = useState([]),
        [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        api.get('/user/index').then(res => {
            setUsers(res.data)
        }).catch(err => {
            console.log(err)
            toast.error('Erro ao carregar os mentores', {theme: 'colored'})
        }).finally(() => setIsLoading(false))
    }, [])

    return (
        <List>
            {!isLoading ? <>
                <h1>Escolha seu mentor:</h1>
                <div className='mentor_grid'>
                    {users && users.map((user, i) => 
                        <Card key={i} user={user} />
                    )}
                </div>
            </> : 
            <Skeletons/>}
        </List>
    )
}
