import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Hydrate fully pre-rendered HTML rather than replacing its content at startup.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
