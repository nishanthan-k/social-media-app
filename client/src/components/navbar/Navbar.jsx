import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Icon, Input, Segment } from "semantic-ui-react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Navbar = () => {
  return (
    <Segment className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social Media</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        {/* <Icon name="home" size="large" />
        <Icon name="moon outline" size="large" />
        <Icon name="block layout" size="large" /> */}
        <div className="search">
          <Input icon iconPosition="left">
            <input type="text" placeholder="Search..." />
            <Icon name="search" />
          </Input>
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        {/* <Icon name="user outline" size="large" />
        <Icon name="mail outline" size="large" />
        <Icon name="bell outline" size="large" /> */}
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

export default Navbar;

// bell outline    moon outline
