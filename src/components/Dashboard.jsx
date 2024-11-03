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
import heticLogo from "../assets/hetic.png";

// Dashboard
function Dashboard() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

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
          <li class="cards__item">
            <div class="card">
              <img src={heticLogo} alt="" />
              <div class="card__content">
                <div class="card__title">HETIC</div>
                <p class="card__text">
                  This website is sponsored by hetic ! A brand new school
                  founded this year.
                </p>
                <button onClick={() => openLink("https://www.hetic.net/")}>
                  See more
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dashboard;
