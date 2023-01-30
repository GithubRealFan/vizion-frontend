import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Create from "./pages/Create";
import Home from './pages/Home';

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Footer />
      </Router>
    );
}

export default App;
