import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import {HashRouter} from 'react-router-dom'
import PlayerContextProvider from './Contexts/PlayerContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <PlayerContextProvider>
    <App />
    </PlayerContextProvider>
   
    </HashRouter>
  </React.StrictMode>
)