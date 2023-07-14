
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Register, Login, Createtask,  Filter, Notification, Tracktask } from "./pages";

import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Createtask" element={<Createtask />} />
          <Route path="/Filter" element={<Filter />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Tracktask" element={<Tracktask />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
