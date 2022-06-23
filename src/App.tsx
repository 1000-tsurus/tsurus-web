import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '@/Contexts/auth'
import { MainRoutes } from '@/Routes'

const App = () => {
    return (
        <AuthProvider>
            <MainRoutes />
        </AuthProvider>
    )
}

export default App
