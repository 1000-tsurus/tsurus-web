import Landing from '@/Components/Landing/Landing'
import React from 'react'
import Card from '@/Components/Card/Card'

export default function Home() {
    return (
        <>
            <Landing />
            <div className="mentors">
                <h2>Escolha seu mentor:</h2>
            </div>
            <Card />
        </>
    )
}
