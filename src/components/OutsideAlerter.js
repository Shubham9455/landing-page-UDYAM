import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function ani() {
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
}
function useOutsideAlerter(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        const len =
          document.getElementsByClassName("fab-button")[0].classList.length;
        console.log(len);
        if (len === 2) {
          ani();
        }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideAlerter;
