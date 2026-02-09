import "./MainContainer.css";
import Flash from "../../../assets/images/flash.svg";
import Brain from "../../../assets/images/brain.svg";
import Eye from "../../../assets/images/eye.svg";
import Chat from "../../../assets/images/chat.svg";

function Main() {
  return (
    <div className="container">
      <div className="blue_div">
        <div className="header_div">
          <p className="header">Your Result</p>
        </div>
        <div className="result">
          <p className="result_box">
            <span className="sixseven">76</span> <br />
            of 100
          </p>
        </div>
        <div className="footer">
          <h1>Great</h1>
          <p className="performance">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </div>
      <div className="summary_box">
        <p className="sub_head">Summary</p>
        <div className="summary_1">
          <img src={Flash} alt="flash" />
          <p>
            <span className="reaction">Reaction</span>
            <span className="pre_number">80</span>
            <span className="hundred">/100</span>
          </p>
        </div>
        <div className="summary_2">
          <img src={Brain} alt="brain" />
          <p>
            <span className="memory">Memory</span>{" "}
            <span className="pre_number">92</span>
            <span className="hundred">/100</span>
          </p>
        </div>
        <div className="summary_3">
          <img src={Chat} alt="chat" />
          <p>
            <span className="verbal">Verbal</span>{" "}
            <span className="pre_number">81</span>
            <span className="hundred">/100</span>
          </p>
        </div>
        <div className="summary_4">
          <img src={Eye} alt="eye" />
          <p>
            <span className="visual">Visual</span>{" "}
            <span className="pre_number">73</span>
            <span className="hundred">/100</span>
          </p>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default Main;
