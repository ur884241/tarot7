import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/main.css'

// Make sure the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  if (root) {
    createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  } else {
    console.error('Root element not found')
  }
}) 