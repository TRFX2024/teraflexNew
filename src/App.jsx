import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home';
import Layout from './layout/Layout';
import Quienes from './pages/Quienes/Quienes';

function App() {
  
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout/>,
        children: [
          {
            path: "/",
            element: <Home/>
          },
          {
            path: "quienes",
            element: <Quienes/>
          }
        ]
      }
    ]
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
