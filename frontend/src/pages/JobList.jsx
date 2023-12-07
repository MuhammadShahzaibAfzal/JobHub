import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";

const JobList = () => {
  return (
    <div>
      <Navbar />
      <div className="heading text-center">
        <h1>List of Jobs</h1>
      </div>
      <div className="w-[500px]  text-center mx-auto my-4">
        <input
          type="text"
          className="input"
          placeholder="Search jobs here...."
        />
      </div>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />

      <div className="text-center my-8">
        <button className="btn btnDanger mr-4 w-32">Previous</button>
        <button className="btn btnDanger w-32">Next</button>
      </div>
    </div>
  );
};

export default JobList;
