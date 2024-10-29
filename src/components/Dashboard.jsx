import Mydate from "./Mydate";
import Citation from "./Citation";
import Blague from "./Blague";
import Event from "./Event";
import "./Dashboard.css";

// Dashboard
function Dashboard() {
  return (
    <>
      <Mydate />
      <Citation />
      <Blague />
      <Event />
    </>
  );
}

export default Dashboard;
