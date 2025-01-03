import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx'
import { TranslationProvider } from './contexts/LanguageContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </DarkModeProvider>
  </StrictMode>,
)
