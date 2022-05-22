import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from '@/Providers/Theme'

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
