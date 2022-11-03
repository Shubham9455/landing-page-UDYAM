import React from "react";
import "./EventCard.css";

const paragraph = [
  "Udyam is the Annual Technological Festival of the department of Electronics Engineering, IIT (BHU) Varanasi. It brings a broad spectrum of events spanning Data Science, Machine Learning, Digital and Analog Electronics and others to boost the participant's skill sets. Since 2010, Udyam has provided a platform to develop and showcase the technical skills of Indian technocrats. And we are pleased to announce that the grand event is again returning this spring as UDYAM'23!",
  "Udgam is the Annual Cultural Festival of the department of Electronics Engineering, IIT (BHU) Varanasi. It brings you multifarious events that kindle your creative side and awaken your artistic self. EES introduced Udgam at the start of 2022 to provide a platform for participants to showcase their talents in non-technical fields like fine arts, dance, music, photography, and literature. Udgam is back again, bigger and brighter, and awaiting to witness the vigour its participants would bring to the stage. Get ready to manifest your artistry and let your creative self sparkle!",
  "Mashal is the sports festival of the department of Electronics Engineering, IIT (BHU) Varanasi. It offers a venue for all significant competitions and sports to foster good sportsmanship among the students. Even though it started last year, the event covers numerous sports, including Marathon, Chess, Valorant, Table Tennis, Basketball, Tennis, Football, Cricket, Badminton, Kabaddi, Athletics, and Tug of War. Mashal unleashes the competitive spirit of the nation's brightest minds and offers a perfect arena for sports enthusiasts to face off against one another. As said by Serena Williams, let's overpower, overtake and overcome!",
];
const heading = ["UDYAM", "UDGAM", "MASHAL"];

const EventCard = (props) => {
  const off = () => {
    props.close();
  };

  return (
    <div>
      <div className="event-detais-card">
        <div className="event-logo-container">
          <img src="./logo192.png" alt="" />
          <a href="#" className="close" onClick={off}></a>
        </div>
        <h1>{heading[props.data]}</h1>
        <div className="event-content">
          <p> {paragraph[props.data]}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
