import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Messages from "./pages/messages/Messages";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Messages />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
