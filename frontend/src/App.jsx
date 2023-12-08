import { Route, Routes } from "react-router-dom";
import { ApplyJob, JobDetail, JobList } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/jobs/:_id" element={<JobDetail />} />
        <Route path="/apply/:_id" element={<ApplyJob />} />
      </Routes>
    </div>
  );
};

export default App;
