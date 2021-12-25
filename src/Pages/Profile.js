import React from "react";
import "../App.css";
import MyCarousal from "../components/my-carousal/my-carousal"
import MyTitle from "../components/title-message/title-message.component"

const Profile = () => {
    return(
        <div>
          <MyCarousal/>
          <MyTitle />
      </div>
    )
}

export default Profile;