import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sectors from "./components/Sectors";
import AbrasivesPage from "./pages/AbrasivesPage";
import AgriculturePage from "./pages/AgriculturePage";
import AirConditionersPage from "./pages/AirConditionersPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Sectors} />
          <Route path="/abrasives" Component={AbrasivesPage} />
          <Route path="/agriculture" Component={AgriculturePage} />
          <Route path="/airConditioners" Component={AirConditionersPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
