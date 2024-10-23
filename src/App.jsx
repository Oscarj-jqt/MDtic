import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Editor from "./components/Editor";

// notre app
function App() {
  return (
    <BrowserRouter>
      <h1>Titre</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
