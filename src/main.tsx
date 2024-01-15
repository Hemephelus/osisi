import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from "./error-page";
import './index.css'
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from '@routes/pages/Form';
import AddProfile from '@routes/pages/family-tree/AddProfile';
import UpDateProfile from '@routes/pages/family-tree/UpDateProfile';
import ProfileDetail from '@routes/pages/family-tree/ProfileDetail';

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
            element: <AddProfile />,
          },
          {
            path: "/family-tree/update",
            element: <UpDateProfile />,
          },
          {
            path: "/family-tree/detail",
            element: <ProfileDetail />,
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
