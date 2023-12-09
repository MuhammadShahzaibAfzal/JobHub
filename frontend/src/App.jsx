import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { ApplyJob, JobDetail, JobList } from "./pages";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/jobs/:_id" element={<JobDetail />} />
        <Route path="/apply/:title/:_id" element={<ApplyJob />} />
      </Routes>
      <ScrollToTop />
      <Toaster />
    </div>
  );
};

export default App;

export const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
