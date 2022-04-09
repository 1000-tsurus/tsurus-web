import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { ThemeContextProvider } from '@/providers/Theme'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

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
