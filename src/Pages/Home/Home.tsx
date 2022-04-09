import Landing from '@/Components/Landing/Landing'
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
