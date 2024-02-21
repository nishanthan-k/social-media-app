import "./Post.scss";
import PropTypes from "prop-types";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import { useState } from "react";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="post">
      <Segment className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile:${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <div className="moreInfo">
            <MoreHorizIcon className="mui-icon more" />
          </div>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="interactions">
          <div className="item like" onClick={() => setLiked(!liked)}>
            {/* <div className="like" onClick={() => setLiked(!liked)}> */}
            {liked ? <FavoriteOutlinedIcon className="mui-icon"/> : <FavoriteBorderOutlinedIcon className="mui-icon"/>}
            <span>12 likes</span>
            {/* </div> */}
          </div>
          <div className="item comments">
            <TextsmsOutlinedIcon className="mui-icon"/> <span>12 comments</span>
          </div>
          <div className="item share">
            <ShareOutlinedIcon className="mui-icon"/> <span>Share</span>
          </div>
        </div>
      </Segment>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
