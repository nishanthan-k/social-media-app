import { Link } from "react-router-dom";
import "./NavBar.scss";
import { Icon, Input, Segment } from "semantic-ui-react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const NavBar = () => {
  return (
    <Segment className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social Media</span>
        </Link>
        <HomeOutlinedIcon className="mui-icon" />
        <DarkModeOutlinedIcon className="mui-icon" />
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
          <img
            src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg"
            alt="user image"
          />
          <span>John Doe</span>
        </div>
      </div>
    </Segment>
  );
};

export default NavBar;

// bell outline    moon outline
