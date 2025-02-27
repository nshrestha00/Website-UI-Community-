import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Website1Routes from "../websites/Website1/Website1Routes";
import MainNavbar from "../components/MainNavbar"; // Optional Global Navbar

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainNavbar />} /> 
        <Route path="/website1/*" element={<Website1Routes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
