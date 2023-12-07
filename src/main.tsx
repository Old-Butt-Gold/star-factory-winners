import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './i18n.ts'
import { Suspense } from 'react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Suspense fallback="...loading">
        <App />
    </Suspense>

)
