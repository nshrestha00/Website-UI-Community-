import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import Review from "./Review";
import Contact from "./Contact";
import Pagination from "../../components/Pagination";

const Website1Routes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="review" element={<Review />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Pagination totalPages={4} />
    </>
  );
};

export default Website1Routes;
