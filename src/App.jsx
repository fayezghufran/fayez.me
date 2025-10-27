import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);

    AOS.init({ duration: 800, once: true });

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <div className="flex flex-col lg:flex-row gap-5">
        <Profile />
        <div className="flex-1">
          <Navbar />
          <div className="overflow-x-hidden overflow-y-hidden">
            <Content />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
