import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header";
import SideBar from "./components/UI/SideBar";
import BusquedaAlumnos from "./components/Routes/BusquedaAlumnos";
import BusquedaCandidatos from "./components/Routes/BusquedaCandidatos";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <div className="column">
          <Header />
          <Routes>
            <Route path="/busquedaAlumnos" element={<BusquedaAlumnos />} />
            <Route
              path="/busquedaCandidatos"
              element={<BusquedaCandidatos />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
