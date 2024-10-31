import Mydate from "./Mydate";
import Quote from "./Quote";
import Myjoke from "./myJoke";
import Event from "./Event";
import Myrecipe from "./Myrecipe";
import Mocktail from "./Mocktail";
import "./Dashboard.css";

// Dashboard
function Dashboard() {
  return (
    <>
      <Mydate />
      <Quote />
      <Myjoke />
      <Event />
      <Myrecipe />
      <Mocktail />
      
    </>
  );
}

export default Dashboard;
