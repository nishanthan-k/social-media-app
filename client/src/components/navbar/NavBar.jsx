import { Link } from "react-router-dom";
import "./NavBar.scss";
import { Icon, Input, Segment } from "semantic-ui-react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {currentUser} = useContext(AuthContext)

  return (
    <Segment className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social Media</span>
        </Link>
        <HomeOutlinedIcon className="mui-icon" />
        {theme === "light" ? (
          <DarkModeOutlinedIcon
            className="mui-icon"
            onClick={() => toggleTheme()}
          />
        ) : (
          <WbSunnyOutlinedIcon
            className="mui-icon"
            onClick={() => toggleTheme()}
          />
        )}
        <GridViewOutlinedIcon className="mui-icon" />
        <div className="search">
          <Input icon iconPosition="left">
            <input type="text" placeholder="Search..." />
            <Icon name="search" />
          </Input>
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon className="mui-icon" />
        <EmailOutlinedIcon className="mui-icon" />
        <NotificationsOutlinedIcon className="mui-icon" />
        <div className="user">
          <img src={currentUser.profilePic} alt="user image" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </Segment>
  );
};

export default NavBar;

// bell outline    moon outline
