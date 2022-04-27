import React, { useState } from "react";

function ActiveState() {
  const [color, setColor] = useState("white");

  return (
    <div id="card1" className="card">
      <img src="/images/icon-star.svg" alt="icon-star" />
      <h3>How did we do?</h3>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering
      </p>
      <div className="rating">
        <ul>
          <li onClick={() => setColor("orange")} style={{ color: color }}>
            1
          </li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <button className="btn">SUBMIT</button>
    </div>
  );
}

export default ActiveState;
