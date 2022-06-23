import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import 'camsis-fonts/css/camsis-fonts.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from '@/Providers'

ReactDOM.render(
    <StrictMode>
        <ThemeContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeContextProvider>
    </StrictMode>,
    document.getElementById('root')
)
