import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div className="cardWrapper shadow-md rounded-md p-8 leading-7 border-2 border-gray-200">
      <div className="card">
        <div className="flex items-center my-3">
          <h2 className="font-bold text-xl mr-3">Vue.js Developer</h2>
          <span className="badge badgeSuccess">Open</span>
        </div>
        <p className="my-3">
          {" "}
          <span className="font-bold">Min. Experience</span> : 1-3 years
        </p>
        <p className="text-justify">
          We are in search of a talented Vue.js Developer to join our team. The
          ideal candidate will be responsible for building and implementing
          functional user interfaces for web applications using Vue.js. The role
          involves collaborating with cross-functional teams to define, design,
          and ship new features and ensuring the performance and responsiveness
          of applications.
        </p>
        <div className="flex flex-col md:flex-row  md:gap-10 ">
          <p>
            <span className="font-bold">Seats </span>: 2
          </p>
          <p>
            <span className="font-bold">Posted</span> : 06 December 2023
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 ">
          <p>
            <span className="font-bold">Location</span>: Jhelum
          </p>
          <p>
            <span className="font-bold">Apply before</span>: 30 December 2023
          </p>
        </div>
        <div className="mt-5">
          <Link to="/jobs/11" className="btn btnPrimaryOutline mr-4">
            View Details
          </Link>
          <Link to="/" className="btn btnPrimary">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
