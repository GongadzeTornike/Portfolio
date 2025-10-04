import "./App.css";
import ProfilePic from "./Profile.jpg";

function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header>
        <h1>Tornike Gongadze</h1>
        <p className="typing">Frontend Developer | React Enthusiast</p>
      </header>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <img src={ProfilePic} alt="Profile" className="profile-pic" />
          <div>
            <h2>About Me</h2>
            <p>
              Enthusiastic and motivated learner with a strong interest in
              technology and software development. Skilled in problem-solving
              and eager to expand knowledge in programming, design, and modern
              development tools. Committed to completing projects with attention
              to detail and open to feedback for continuous improvement. Strong
              team player with the ability to adapt quickly, collaborate
              effectively, and learn new skills in fast-paced environments
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>🎰 Slot Machine Game</h3>
            <p>
              A browser-based slot machine built with JavaScript.
              <br />
              <a
                href="https://gongadzetornike.github.io/BasicSlotMachine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </p>
          </li>

          <li>
            <h3>🏦 Bankist App</h3>
            <p>
              A banking app simulation with modern JavaScript.
              <br />
              <a
                href="https://github.com/GongadzeTornike/BankistApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </p>
          </li>

          <li>
            <h3>🎲 Dice Game</h3>
            <p>
              A fun two-player dice game built in JavaScript.
              <br />
              <a
                href="https://gongadzetornike.github.io/Dice-Game/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </p>
          </li>

          <li>
            <h3>🧮 React Calculator</h3>
            <p>
              A simple calculator built with React.
              <br />
              <a
                href="https://gongadzetornike.github.io/Calculator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </p>
          </li>
        </ul>
      </section>

      {/* Fun Facts */}
      <section>
        <h2>Fun Facts About Me</h2>
        <ul className="fun-facts">
          <li>⚡ I can debug faster when I drink coffee ☕.</li>
          <li>🎮 I love creating small browser games for fun.</li>
          <li>🌍 I’m learning Spanish and interested in languages.</li>
          <li>💡 I enjoy solving tricky coding problems like puzzles.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/GongadzeTornike">
            github.com/GongadzeTornike
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/tornike-gongadze-ab2314328/">
            https://www.linkedin.com/in/tornike-gongadze-ab2314328/
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Tornike Gongadze</p>
      </footer>
    </div>
  );
}

export default App;
