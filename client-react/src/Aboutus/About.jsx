import React from 'react';
import './about.css';
import Footer from "../../footerHeader/Footer.jsx"
import Navbar from '../user/edit/navbar.jsx';
const About = ({ name, role, imageUrl }) => (
  <div className="col-md-4 col-sm-6 team-wrap">
    <div className="team-member text-center">
      <div className="team-img">
        <img src={imageUrl} alt={name} />
        <div className="overlay">
          <div className="team-details text-center">
            <p>
              {`Hi, I'm ${name}. ${role}`}
            </p>
          </div>
        </div>
      </div>
      <h6 className="team-title">{name}</h6>
      <span>{role}</span>
    </div>
  </div>
);

const OurTeamPage = () => {
  const teamMembers = [
    { name: "marwa", role: "Scrum Master", imageUrl: "https://i.pinimg.com/originals/d3/dc/bc/d3dcbc63db58dd489cd62c77afdf6d79.png" },
    { name: "adib", role: "Product Owner", imageUrl: "https://media.istockphoto.com/id/670001240/vector/business-man-cartoon-character-young-handsome-smiling-businessman-in-smart-casual-clothes.jpg?s=612x612&w=0&k=20&c=vS7B-CvjcPJyitNZXySGELYnn7ohje_dVkCKo6bRtlE=" },
    { name: "wael", role: "Developer", imageUrl: "https://img.freepik.com/premium-vector/beard-man-glasses-shows-gesture-ok_47649-142.jpg" },
    { name: "aymen", role: "Developer", imageUrl: "https://previews.123rf.com/images/vectorkif/vectorkif1709/vectorkif170900028/85709542-business-man-cartoon-character-in-smart-clothes-office-style-young-handsome-businessman-in-suit.jpg" },
    { name: "chokri", role: " Developer", imageUrl: "https://cdn.vectorstock.com/i/preview-1x/14/58/man-thinking-vector-20481458.jpg" },
  ];

  return ( <div>
      <Navbar/>
    <div className='aboutus'>
    <div className='aboutt'>
    <p> <h2> You will find everything about camping here. Our group strives
                to provide the best quality and best price. </h2></p>
    <img src="https://socialnaturemovement.nz/wp-content/uploads/2021/09/Outdoor-Adventure-gear-hire-rental-Auckland-NZ-2.jpg" alt="" />                
    <img src="https://media.campsaround.com/mainweb/wp-content/uploads/elementor/thumbs/go-camping-with-your-family-q2tz37pjclvj7lsu055y7cdzyj3hmsmv55jutgpmy8.jpg" alt="" />
    </div>
    </div>
    <div className="container">
      <div className="row heading">
        <div className="col-md-6 col-md-offset-3">
          <h2 id="text-center">Team Work</h2>
        </div>
      </div>
      <div className="row team-row">
        {teamMembers.map((member, index) => (
          <About
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default OurTeamPage;
