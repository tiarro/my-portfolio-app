import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ThemeProvider} from "./ThemeContext.tsx";
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme CSS
import 'primereact/resources/primereact.min.css';         // Core CSS
import 'primeicons/primeicons.css';                       // Icons
import 'primeflex/primeflex.css';                         // Flex CSS for layout
import {PrimeReactProvider} from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <PrimeReactProvider value={{unstyled: true, pt: Tailwind}}>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </PrimeReactProvider>
    </StrictMode>,
)
