import "./RightBar.scss";
import { Button, Segment } from "semantic-ui-react";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <Segment className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg"
                alt="user profile"
              />
              <span>Jane Doe</span>
            </div>

            <div className="buttons">
              <Button content="Follow" primary />
              <Button content="Dismiss" color="red" />
            </div>
          </div>
        </Segment>
        <Segment className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg"
                alt="user profile"
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>

            </div>
              <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg"
                alt="user profile"
              />
              <p>
                <span>Jane Doe</span> added story
              </p>

            </div>
              <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg"
                alt="user profile"
              />
              <p>
                <span>Jane Doe</span> liked a message
              </p>

            </div>
              <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg"
                alt="user profile"
              />
              <p>
                <span>Jane Doe</span> liked your post
              </p>

            </div>
              <span>1 min ago</span>
          </div>
        </Segment>
      </div>
    </div>
  );
};

export default RightBar;
