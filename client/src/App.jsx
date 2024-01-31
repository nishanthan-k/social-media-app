import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import "./style.scss";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";
import Home from "./pages/home/Home";
import { useContext } from "react";

const PrivateRoute = ({path, element}) => {
  const {isLoggedIn} = useContext(AuthContext)

  return isLoggedIn ? element : <Navigate to="/login" />
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/",
      // element: <PrivateRoute path="/" element={<Home />} />
      element: <Home />
    }
  ])

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App
