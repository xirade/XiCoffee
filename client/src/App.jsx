import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidenav } from "materialize-css/dist/js/materialize.min.js";

// components
import Navbar from "./components/navbar/Navbar";

// views
import Admin from "./views/admin/Admin";
import NotFound from "./views/errors/NotFound";
import Home from "./views/home/Home";
import Stats from "./views/stats/Stats";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar Sidenav={Sidenav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
