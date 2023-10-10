import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [clicked, setClicked] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleClick(event) {
    event.preventDefault();
    setClicked(true);
  }

  function handleMenuClick(event) {
    event.preventDefault();
    setClicked(false);
  }

  if (width <= 576 && clicked === false) {
    return (
      <div className="NavBar shadow">
        <div className="row">
          <div className="col-10">
            <i className="fa-solid fa-otter"></i>
          </div>
          <div className="d-flex col-2 align-items-center">
            <i className="fa-solid fa-bars" onClick={handleClick}></i>
          </div>
        </div>
      </div>
    );
  } else if (width <= 576 && clicked === true) {
    return (
      <div className="NavBar shadow">
        <div className="row">
          <div className="col-9 mt-5">
            <i className="fa-solid fa-otter"></i>
          </div>
          <div
            className="col-3 align-items-center mt-3 mb-3 shadow pop-menu"
            onClick={handleMenuClick}
          >
            <h5>Home</h5>
            <h5>About</h5>
            <h5>Work</h5>
            <h5>Contact</h5>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="NavBar shadow">
        <div className="row">
          <div className="col-7">
            <i className="fa-solid fa-otter"></i>
          </div>
          <div className="d-flex col-5 align-items-center">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Work</h3>
            <h3>Contact</h3>
          </div>
        </div>
      </div>
    );
}
