import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";

import "./App.css";

function App() {

  const [email, setEmail] = useState(false);

  return (
    <div className="app">
      <div className="container">
        <div className="image">
          <img src={process.env.PUBLIC_URL + "/me.jpg"} alt='me'/>
        </div>
        <div className="type">
            <Typewriter
              options={{
                cursorClassName: "cursor",
                autoStart: true,
                loop: true,
                delay: 75,
              }}
              onInit={(typewriter) => {
                typewriter

                  .typeString("My name is Mateus Henrique")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString("I'm a undergrad NLP research")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString("I'm a computer science student")
                  .pauseFor(1500)
                  .start();
              }}
            />
        </div>

        <IconContext.Provider
          value={{ style: { hover: "blue", fontSize: "5vh" } }}
        >
          <nav>
            <a href="https://github.com/fullpistoladev" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mathenrifs" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/Fullpistoladev" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <button onClick={() => setEmail(!email)}>
              <FaEnvelope />
            </button>
          </nav>
        </IconContext.Provider>

          {email && <div className="type email">
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                cursorClassName: "cursor",
                delay: 75,
              }}
              onInit={(typewriter) => {
                typewriter

                .typeString("mathenrique@ufpi.edu.br")
                .start();
              }}
            />
        </div>
        }
       
      </div>
    </div>
  );
}

export default App;
