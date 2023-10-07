import React from "react";

export default function NavBar() {
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
