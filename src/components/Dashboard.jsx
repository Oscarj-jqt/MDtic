import Mydate from "./Mydate";
import Quote from "./Quote";
import Myjoke from "./MyJoke";
import Event from "./Event";
import Myrecipe from "./Myrecipe";
import Mocktail from "./Mocktail";
import "./Dashboard.css";
import closeIcon from "../assets/Close.svg";
import maximiseIcon from "../assets/Maximize.svg";
import minimiseIcon from "../assets/Minimize.svg";

// Dashboard
function Dashboard() {
  return (
    <>
      <div className="top">
        <Mydate />
        <Quote />
        <Myjoke />
      </div>
      <div className="bottom">
        <div className="recent-files">
          <div className="banner">
            <h3>Welcome to MDtic</h3>
            <div>
              <img src={minimiseIcon} alt="" />
              <img src={maximiseIcon} alt="" />
              <img src={closeIcon} alt="" />
            </div>
          </div>
        </div>
        <ul class="cards">
          <Myrecipe />
          <Mocktail />
          <Event />
        </ul>
      </div>
    </>
  );
}

export default Dashboard;
