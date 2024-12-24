import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Books from './pages/Books/Books';
import AddBooks from './pages/AddBooks/AddBooks';
import BorrowedBooks from './pages/BorrowedBooks/BorrowedBooks';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProviders from './providers/AuthProviders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books',
        element: <Books></Books>
      },
      {
        path: '/add-book',
        element: <AddBooks></AddBooks>
      },
      {
        path: '/borrowed-books',
        element: <BorrowedBooks></BorrowedBooks>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
