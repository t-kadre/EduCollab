import "./ProfileCard.css";
import EditProfileIcon from '../Assets/editprofileicon.svg'
import { useState } from "react";

const ProfileCard = () => {

  const [updateUser, setUpdateUser] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log("User Data in Profile Card : ", userData);

  const handleGithubLinkClick = () => {
    window.open(userData.githubID, '_blank');
  };

  const handleEditProfileClick = () => {
    const link = document.createElement('a');
    link.href = 'http://localhost:3000updateProfile';
    link.style.display = 'none'; // Hide the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove the link from the DOM once clicked
  };

  return (
    <div className="ProfileCardBox">
      <div className="ProfileCard-leftPart">
        <div className="ProfileCard-image-container">
          {/* <img src="" alt="Profile pic" className='ProfileCard-image'/> */}
        </div>
        <div className="ProfileCard-tag_storer-parent">
          <div className="ProfileCard-tag_storer">
            {userData.tags.map((tag, index) => (
              <span key={index} className="ProfileCard-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="ProfileCard-Github-id-container">
          <div className="ProfileCard-Github-id"  onClick={handleGithubLinkClick}>{userData.githubID}</div>
        </div>
        <div className="ProfileCard-Email-id-container">
          <div className="ProfileCard-Email-id">{userData.email}</div>
        </div>
      </div>
      <div className="ProfileCard-rightPart">
        <div className="ProfileCard-rightPart-upper-part">
          <div className="ProfileCard-rightPart-upper-part-name-side">
            <div className="ProfileCard-rightPart-upper-part-name">
              {userData.username}
              <img src={EditProfileIcon} alt="" className="editProfileIcon" onClick={handleEditProfileClick} />
            </div>

            <div className="ProfileCard-rightPart-upper-part-post">
              {userData.designation}
            </div>
          </div>
          <div className="ProfileCard-rightPart-upper-part-credits-side">
            <div className="ProfileCard-rightPart-upper-part-credits">{userData.creditScore}</div>
          </div>
        </div>
        <div className="ProfileCard-rightPart-project-space"></div>
      </div>
    </div>
  );
};

export default ProfileCard;
