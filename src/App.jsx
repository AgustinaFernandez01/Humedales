import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import AboutHumedal from "./views/AboutHumedal";
import About from "./views/About";
import Methods from "./views/Methods";
import NavBar from "./components/NavBar"

function App() {
  return (
  <main className="bg-yellow-100">
    <NavBar/>
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/humedal" element={<AboutHumedal />} />
      <Route path="/about" element={<About />} />
      <Route path="/methods" element={<Methods />} />
    </Routes>
  </main>
  )
}

export default App
