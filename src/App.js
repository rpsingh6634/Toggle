import React, { useState } from "react";
import "./App.css";

//☀︎ ☽
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
      <h2>Overreacted</h2>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      <div>
        <div className="content1">
        <h2 className="wet">The Wet Codbase</h2>
        <p>Lorem ipsum dolor sit,consectetur</p>
        <br/>
        <p>Lorem ipsum dolor sit,consectetur</p>
        <br/>
        <br/>
        <h2 className="wet">Goodby, Clean Code</h2>
        <p>Lorem ipsum dolor sit,consectetur</p>
        <br/>
        <p>Lorem ipsum dolor sit,consectetur</p>
        <br/>
        <br/>
        <h2 className="wet">My Decade In Review</h2>
        <p>Lorem ipsum dolor sit,consectetur</p>
        <br/>
        <p>Lorem ipsum dolor sit,consectetur</p>
        <br/>
        <br/>
        <h2 className="wet">What are the react Team Principles</h2>
        <p>Lorem ipsum dolor sit,consectetur</p>
        </div>
      </div>
    </div>
  );
}
