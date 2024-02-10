// import './ProjectPopOut.css';
// import Popup from 'reactjs-popup';
// import mySVGURL from '../Assets/userDummy.svg';
// import ProfileCard from './ProfileCard';
// //import { FaHeart, FaUser, FaSearch } from "react-icons/fa";
// // s
// import wishlistSVGURL from '../Assets/heart.svg'
// import dollarSVG from '../Assets/dollar.svg'
// const ProjectPopOut = () => {
//   return (
//     <>
//       <div className="job_apply_card">
//         <div className="job_left_card_holder">
//           <div className="job_project_short_form">Jv</div>
//         </div>
//         <div className="job_right_card_holder">
//           <div className="owner_like_holder">
//             <div className="job_top_right_div">
//               <div className="project_owner">
//                 <div className='project_owner_name'>Mr.Nallakukkala</div>
//                 <div className="project-profile-button">
//                   <Popup trigger=
//                     {<div className="project-profile-button-circle"><img src={mySVGURL} alt="My SVG" className="project-profile-button-circle-img"/></div>}
//                     modal nested>
//                     {
//                       close => (
//                         <div className='modal'>
//                           <div className='content'>
//                             <ProfileCard/>
//                           </div>
//                         </div>
//                       )
//                     }
//                   </Popup>
//                 </div>
//               </div>
//               <div className="job_no_of_likes">3.6k</div>
//               <div className="navbar-right-circle"><img src={wishlistSVGURL} alt="My SVG" className="navbar-right-circle-img" /></div>
//             </div>
//           </div>
//           <div className="job_description_holder">
//             <span className="job_name">Frontend developer Job.</span>
//             <div className="horizontal_rule"></div>
//             <div className="job_description">
//               When they are segmented, many long text messages are displayed in
//               a random order. This can be extremely frustrating for the reader.
//               To help solve this problem, Text magic displays long text messages
//               as a single text. Unicode characters take up multiple GSM
//               characters. When a Unicode symbol appears in a text, it is usually
//               segmented at the 70-character mark, thus making it even harder for
//               the recipient to decipher the message. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam quidem, iusto at recusandae voluptatum accusamus consequuntur quos, ab fugiat quis impedit sapiente nostrum cumque dolorum nam cum quia ratione labore voluptatem omnis? Earum libero quidem ipsam eos placeat. Consectetur impedit, libero nobis ullam quod maiores rem. Nulla cumque, harum illum dolores quo pariatur sequi?
//             </div>
//           </div>
//           <div className="tags">
//             <span className="tag_span">Tags</span>
//             <div className="tag_storer">
//               <button className="tag">java</button>
//               <button className="tag">dev</button>
//               <button className="tag">HTML</button>
//               <button className="tag">CSS</button>
//               <button className="tag">jv</button>
//               <button className="tag">python</button>
//               <button className="tag">cpp</button>
//               <button className="tag">java</button>
//               <button className="tag">dev</button>
//               <button className="tag">HTML</button>
//               <button className="tag">CSS</button>
//               <button className="tag">jv</button>
//               <button className="tag">python</button>
//               <button className="tag">cpp</button>
//               <button className="tag">java</button>
//               <button className="tag">dev</button>
//               <button className="tag">HTML</button>
//               <button className="tag">CSS</button>
//               <button className="tag">jv</button>
//               <button className="tag">python</button>
//               <button className="tag">cpp</button>
//               <button className="tag">python</button>
//               <button className="tag">cpp</button>
//               <button className="tag">java</button>
//               <button className="tag">dev</button>
//               <button className="tag">HTML</button>
//               <button className="tag">CSS</button>
//               <button className="tag">jv</button>
//               <button className="tag">python</button>
//               <button className="tag">cpp</button>
//               <button className="tag">java</button>
//               <button className="tag">dev</button>
//               <button className="tag">HTML</button>
//               <button className="tag">CSS</button>
//               <button className="tag">jv</button>
//               <button className="tag">python</button>
//               <button className="tag">cpp</button>
//             </div>
//           </div>
//           <div className="requirements_to_apply">
//             <span className="no_of_contributors">
//               Contributors :<span className="credit_value">18</span>
//             </span>
//           </div>
//           <div className="join_bottom_div">
//             <div className='join_bottom_divCreditsDollar-container'><img src={dollarSVG} className="join_bottom_divCreditsDollar" alt="dollarsvg" /></div>
//             <div className="join_bottom_divCreditsAmount">25</div>
//             <button className="join_btn">Completed</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProjectPopOut;


import React, { useState, useEffect } from "react";
import "./ProjectPopOut.css";
import mySVGURL from "../Assets/userDummy.svg";
import FilledStarIcon from "../Assets/filledStarIcon.svg";
import EmptyStarIcon from "../Assets/emptyStarIcon.png";
import SubmitReviewIcon from "../Assets/submitReviewIcon.svg";

const ProjectPopOut = ({ projectData }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [projectComments, setProjectComments] = useState([]);
  const [tags, setTags] = useState([]); 
  const ensureFullURL = (link) => {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      return `https://${link}`;
    }
    return link;
  };
  const allusers=JSON.parse(localStorage.getItem("allUsers"));
  console.log('All Users:', allusers);
    const projectowner=allusers.filter(user => user._id === projectData.owner)[0];
    console.log('course Adder:', projectowner);
  const user = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    // Fetch all comments for the project
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://kriti-dev-backend.vercel.app/projects/getComment/${projectData._id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch project comments');
        }
        // console.log()
        const data = await response.json();
        setProjectComments(data.data); // Adjust according to your actual response structure
        setTags(projectData.tags)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchComments();
  }, [projectData.comments]); // Dependency array ensures this runs when projectData._id changes

  const submitReview = () => {
    console.log(reviewText, rating);

    fetch(`https://kriti-dev-backend.vercel.app/projects/addComment/${projectData._id}/${user._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user._id, // Corrected to use 'user' from state
        review: reviewText,
        rating: rating,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setProjectComments([...projectComments, { review: reviewText, rating: rating, user: user._id }]);
      setReviewText("");
      setRating(0);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <>
    {projectData && 
      <div className="project_popoutbody">
        {/* Project Information */}
        <div className="project_pop_left">
          <div className="project_pop_profile">
            <div className="project_profile_tag">
              <div className="project_pop_name">{projectowner.username}</div>
              <img src={mySVGURL} alt="" className="project_pop_profileIcon" />
            </div>
          </div>
          <div className="project_pop_projectTitle">{projectData.title}</div>
          <div className="project_pop_describe">{projectData.description}</div>
          <div className="project_pop_tags_contain">
            <div className="project_pop_tags_text">Tags:</div>
            {tags.map((tag, index) => (
              <div key={index} className="project_pop_individualTags">{tag}</div>
            ))}
          </div>
          <button className="project_pop_joinBtn">Join</button>
        </div>

        {/* Reviews Section */}
        <div className="project_pop_right">
          <div className="project_pop_reviewsHeading">Reviews</div>
          <div className="project_pop_reviewContainer">
            {projectComments && projectComments.map((projectComment, index) => (
              <div key={index} className="project_pop_singleReview">
                <div className="project_pop_reviewText">{projectComment.review}</div>
                <div className="project_pop_reviewStars">
                  {[...Array(projectComment.rating)].map((e, i) => (
                    <img key={i} src={FilledStarIcon} alt="Filled Star" />
                  ))}
                  {[...Array(5 - projectComment.rating)].map((e, i) => (
                    <img key={i} src={EmptyStarIcon} alt="Empty Star" />
                  ))}
                </div>
              </div>
            ))}

            {/* Add Review Form */}
            <div className="project_pop_addReview">
              <input
                type="text"
                placeholder="Write reviews"
                className="project_pop_inputReview"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <div className="project_pop_inputStars">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={i < rating ? FilledStarIcon : EmptyStarIcon}
                    alt={i < rating ? "Filled Star" : "Empty Star"}
                    className="star-img"
                    onClick={() => setRating(i + 1)}
                  />
                ))}
                <img
                  src={SubmitReviewIcon}
                  alt="Submit Review"
                  className="submitReviewIcon"
                  onClick={submitReview}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
};

export default ProjectPopOut;
