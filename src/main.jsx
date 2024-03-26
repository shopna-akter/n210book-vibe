import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/Pages To read/Pagestoread'
import Bookdetails from './Components/BookDetails/Bookdetails';
import ErrorElement from './Components/err/ErrorElement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/Home',
        element: <Home></Home>
      },
      {
        path: '/ListedBooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/PagesToRead',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/Book/:id',
        element: <Bookdetails></Bookdetails>,
        loader: () => fetch('../books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
