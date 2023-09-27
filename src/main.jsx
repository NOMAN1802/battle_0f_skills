import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthProvider from './Pages/providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <ThemeProvider>
      
      <RouterProvider router={router} />
   </ThemeProvider>
    </Provider>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

          
         
       