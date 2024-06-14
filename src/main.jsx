import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './provider/AuthProvider.jsx';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-2xl mx-3 sm:mx-10 2xl:mx-auto'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>

    </AuthProvider>
  </React.StrictMode>,
)
