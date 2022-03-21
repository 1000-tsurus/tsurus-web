import Landing from '@/Components/Landing/Landing'
import React from 'react'
import Card from '@/Components/MentorCard/MentorCard'
import MentorList from '@/Components/MentorList/MentorList'
import { All } from './style'

export default function Home() {
    return (
        <All>
            <Landing />
            <MentorList/>
        </All>
    )
}
