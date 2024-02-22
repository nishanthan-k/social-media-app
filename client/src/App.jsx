import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import Profile from "./pages/profile/Profile";
import PropTypes from "prop-types";
import "./style.scss"
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const Layout = () => {
  const {theme} = useContext(ThemeContext)

  console.log(theme);

  return (
    <div className={`theme-${theme}`} style={{height: "100vh", width: "100vw"}}>
      <NavBar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: "6" }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const {currentUser} = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default App;
