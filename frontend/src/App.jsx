import { Route, Routes } from "react-router-dom";
import { JobDetail, JobList } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/jobs/:_id" element={<JobDetail />} />
      </Routes>
    </div>
  );
};

export default App;
