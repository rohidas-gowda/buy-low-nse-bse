import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AbrasivesPage from "./pages/AbrasivesPage";
import Sectors from "./components/Sectors";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Sectors} />
          <Route path="/abrasives" Component={AbrasivesPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
