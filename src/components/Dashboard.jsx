import Mydate from "./Mydate";
import Quote from "./Quote";
import Myjoke from "./MyJoke";
import Event from "./Event";
import Myrecipe from "./Myrecipe";
import Mocktail from "./Mocktail";
import "./Dashboard.css";

// Dashboard
function Dashboard() {
  return (
    <>
      <div className="top">
        <Mydate />
        <Quote />
        <Myjoke />
      </div>

      <ul class="cards">
        <Event />
        <Myrecipe />
        <Mocktail />
      </ul>
    </>
  );
}

export default Dashboard;
