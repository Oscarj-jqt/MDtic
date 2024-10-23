import Mydate from "./Mydate";
import Citation from "./Citation";
import Blague from "./Blague";
import Event from "./Event";
import MarkdownManager from "./MarkdownManager";

// Dashboard
function Dashboard() {
  return (
    <main>
      <Mydate />
      <Citation />
      <Blague />
      <Event />
    </main>
  );
}

export default Dashboard;
