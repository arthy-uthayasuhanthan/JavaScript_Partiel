import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" />
    //   </Routes>
    // </Router>
  );
}

export default App;
