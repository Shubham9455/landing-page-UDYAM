import "./style.css";
import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
// import EventFAB from "./EventFAB";
function Event() {
  const [active, setActive] = useState(false);
  const [choosed, setChoosed] = useState(-1);
  const [isinittial, setIsinittial] = useState(false);
  const toggle = () => {
    document
      .getElementsByClassName("event-detais-card")[0]
      .classList.toggle("event-detais-card-active");
    console.log("Single G clicked");
    document.getElementsByClassName("register-button")[0].classList.toggle("register-button-active");
  };
  const [content, setContent] = useState(-1);
  function ani(e) {
    //   e.currentTarget.classList.toggle("fab-button-active");
    console.log(e);
    document
      .getElementsByClassName("fab-button")[0]
      .classList.toggle("fab-button-active");
    document
      .getElementsByClassName("fab-item1")[0]
      .classList.toggle("fab-item1-active");
    document
      .getElementsByClassName("fab-item2")[0]
      .classList.toggle("fab-item2-active");
    document
      .getElementsByClassName("fab-item3")[0]
      .classList.toggle("fab-item3-active");
    document
      .getElementsByClassName("fab-circular-ring-off")[0]
      .classList.toggle("fab-circular-ring");

    // document.getElementsByClassName("fab-button-text").innerHTML = "X";
  }

  useEffect(() => {
    if(isinittial){
    toggle();
    }else{
      setIsinittial(true);
    }

  }, [active]);
  const handleClose = () => {
    if (active) {
              setActive(false);
              setChoosed(-1);
              setContent(-1);
            }
  }

  return (
    <>
      <div className="events">
        <table className="table">
          <thead>
            <th>EVENTS</th>
          </thead>
          <tbody>
            <div className="table-body">
              <a
                href="#"
                onClick={() => {
                  if (active && content === 0) {
                    setActive(false);
                    setChoosed(-1);
                    setContent(-1);
                  } else {
                    setContent(0);

                    setActive(true);
                  }
                }}
              >
                UDYAM
              </a>
              <a
                href="#"
                onClick={() => {
                  if (active && content === 1) {
                    setActive(false);
                    setChoosed(-1);
                    setContent(-1);
                  } else {
                    setContent(1);

                    setActive(true);
                  }
                }}
                id="event-dark"
              >
                UDGAM
              </a>
              <a
                href="#"
                onClick={() => {
                  if (active && content === 2) {
                    setActive(false);
                    setChoosed(-1);
                    setContent(-1);
                  } else {
                    setContent(2);

                    setActive(true);
                  }
                }}
                id="event-dark2"
              >
                MASHAL
              </a>
            </div>
          </tbody>
        </table>
        {/* <div>events</div>
        <div>
          <div></div>
        </div> */}
      </div>
      <EventCard data={content} close={handleClose} />
      <div
        style={{
          position: "fixed",
          width: "100%",
          aliginItems: "center",
          bottom: "4%",
          marginBottom: "40px",
          height: "10%",
        }}
        className="fab-container"
      >
        <div
          className="fab-button"
          onClick={(e) => {
            if (active) {
              setActive(false);
              setChoosed(-1);
              setContent(-1);
            }
            ani(e);
            console.log("clicked");
            
          }}
        >
          <h2
            className="fab-button-text"
            style={{
              position: "relative",
              fontSize: "18px",
              textAlign: "center",
              margin: "auto 0",
            }}
          >
            EVENTS
          </h2>
          <h3
            className="fab-button-textX"
            style={{
              position: "relative",
              fontSize: "18px",
              textAlign: "center",
              margin: "auto 0",
            }}
          >
            X
          </h3>
        </div>
        <div
          className="fab-item1"
          onClick={() => {
            if (active && content === 0) {
              setActive(false);
              setChoosed(-1);
              setContent(-1);
            } else {
              setContent(0);

              setActive(true);
            }

            console.log("clicked UDYAM");
          }}
        >
          <h2
            style={{
              position: "relative",
              fontSize: "18px",
              textAlign: "center",
              margin: "auto 0",
            }}
            onClick={() => {
              if (active && content === 1) {
                setActive(false);
                setChoosed(-1);
                setContent(-1);
              } else {
                setContent(1);

                setActive(true);
              }
            }}
          >
            UDYAM
          </h2>
        </div>
        <div
          className="fab-item2"
          onClick={() => {
            if (active && content === 2) {
              setActive(false);
              setChoosed(-1);
              setContent(-1);
            } else {
              setContent(2);

              setActive(true);
            }
          }}
        >
          <h2
            style={{
              position: "relative",
              fontSize: "18px",
              textAlign: "center",
              margin: "auto 0",
            }}
          >
            MASHAL
          </h2>
        </div>
        <div
          className="fab-item3"
          onClick={() => {
            if (active && content === 1) {
              setActive(false);
              setChoosed(-1);
              setContent(-1);
            } else {
              setContent(1);

              setActive(true);
            }
          }}
        >
          <h2
            style={{
              position: "relative",
              fontSize: "18px",
              textAlign: "center",
              margin: "auto 0",
            }}
          >
            UDGAM
          </h2>
        </div>
        {/* <div className="fab-circular-ring-off"></div> */}
      </div>
      <div className="register-button">
        <a href="#">Register</a>
      </div>
    </>
  );
}
export default Event;
