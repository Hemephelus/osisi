import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from "./error-page";
import './index.css'
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './routes/pages/Form';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/family-tree",
        element: <Form />,
        errorElement: <ErrorPage />,
        children:[
          {
            path: "/family-tree/add",
            element: <Form />,
          },
          {
            path: "/family-tree/update",
            element: <Form />,
          },
          {
            path: "/family-tree/view",
            element: <Form />,
          },
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
