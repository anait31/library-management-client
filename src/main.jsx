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
import BookDetails from './pages/BookDetails/BookDetails';
import BooksCategories from './pages/BooksCategories/BooksCategories';
import PrivateRoutes from './routes/PrivateRoutes';

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
        path: '/books/',
        element: <PrivateRoutes><Books></Books></PrivateRoutes>,
        loader: () => fetch('https://b10a11-server-side-anait31.vercel.app/books')
      },
      {
        path:'/books/:categories',
        element: <BooksCategories></BooksCategories>,
        loader: ({params}) => fetch(`https://b10a11-server-side-anait31.vercel.app/books?category=${params.categories}`)
      },
      {
        path: '/book-details/:id',
        element: <PrivateRoutes><BookDetails></BookDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://b10a11-server-side-anait31.vercel.app/book/${params.id}`)
      },
      {
        path: '/add-books',
        element: <PrivateRoutes><AddBooks></AddBooks></PrivateRoutes>
      },
      {
        path: '/borrowed-books',
        element: <PrivateRoutes><BorrowedBooks></BorrowedBooks></PrivateRoutes>
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
