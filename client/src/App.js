import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import HomePage from './Pages/HomePage';
import Login from './features/User/components/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './features/User/components/SignUp';
import Protected from './features/User/components/utlity/Protected';
import Logout from './features/User/components/Logout';
import { Toaster } from 'react-hot-toast';
import AboutUsPage from './Pages/AboutUsPage';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected>  <HomePage></HomePage> </Protected> 
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/logout",
    element: <Logout></Logout>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "/about",
    element: <AboutUsPage></AboutUsPage>
  },
]);

function App() {
  return (
    <div className="App">
      <Toaster position='top-center' reverseOrder={false}>

      </Toaster>
            <RouterProvider router={router} />
    </div>
  );
}

export default App;
