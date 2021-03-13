import "./App.css";
import { useState } from "react";
import JumboData from "./fixtures/jumbo.json";
import RefreshIcon from "@material-ui/icons/Refresh";
import ParticlesBg from "particles-bg";
import Mailchimp from "react-mailchimp-form";

function App() {
  const [random, setRandom] = useState(
    "Don't know what to write about, click generate"
  );

  const handleClick = () => {
    const values = Object.values(JumboData);
    const randomValue = values[parseInt(Math.random() * values.length)];

    setRandom(randomValue);
  };

  return (
    <>
      <div className="App">
        <div className="inspire">
          <div className="inspire-text">WRITING PROMPTS</div>
        </div>
        <div className="sidebar__stats generator">
          <div className="sidebar__stat">
            <div className="generator">
              <div className="text_button">
                <div className="generator__prompts">{random}</div>
                <button className="buttonPrompter" onClick={handleClick}>
                  <RefreshIcon />
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>

        <ParticlesBg type="circle" bg={true} />
      <div>
        <Mailchimp
          action="https://live.us1.list-manage.com/subscribe/post?u=2c676846d6f6b035474d0f194&amp;id=606e905d44"
          fields={[
            {
              name: "EMAIL",
              placeholder: "Subscribe for future updates",
              type: "email",
              required: true,
            },
          ]}
        />
        <div className="subscribe">
          Subscribe to receive updates about this new <br /> journaling App.
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
