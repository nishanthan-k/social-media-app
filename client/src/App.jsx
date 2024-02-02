import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./style.scss";
import AuthContextProvider from "./contexts/AuthContext";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Profile from "./pages/profile/Profile";
import PropTypes from "prop-types";

// const PrivateRoute = ({ path, element }) => {
//   const { isLoggedIn } = useContext(AuthContext);

//   return isLoggedIn ? element : <Navigate to="/login" />;
// };

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <Outlet />
        <Rightbar />
      </div>
    </>
  );
};

const ProtectedRoute = ({ children }) => {
  const currentUser = true;
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
  children: PropTypes.node
}

export default App;
