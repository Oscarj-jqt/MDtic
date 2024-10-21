import Mydate from "./components/Mydate";
import Citation from "./components/Citation";
import Blague from "./components/Blague";
import Event from "./components/Event";
import MarkdownManager from "./components/MarkdownManager";

// notre app
function App() {
  return (
    <main>
      <Mydate/>
      <Citation/>
      <Blague/>
      <Event/>
      <MarkdownManager/>
    </main>
  );
}


export default App
