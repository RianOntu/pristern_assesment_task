import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from './components/Products/ProductDetails.jsx';
let url = import.meta.env.VITE_baseUrl
//routes
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path:'details/:id',
    element:<ProductDetails></ProductDetails>,
    loader:({params})=>fetch(url +"/"+ params.id)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
