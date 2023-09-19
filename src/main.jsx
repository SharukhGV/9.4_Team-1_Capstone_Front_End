import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {CookiesProvider} from 'react-cookie'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </LocalizationProvider>
  </CookiesProvider>
)
