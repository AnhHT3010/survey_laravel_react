import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './contexts/ContextProvider.jsx'
import { StyledEngineProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </ContextProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
)
