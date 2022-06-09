import React from "react";
// importing navbar and footer and making it common for all the pages using layout method
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* all the other components will render here */}
      {children} 
      <Footer />
    </div>
  );
};

export default Layout;
