/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const JobDetail = () => {
  return (
    <div className="text-lg">
      <Navbar />
      <div className="cardWrapper shadow-md rounded-md p-8 leading-7 border-2 border-gray-200">
        <div className="heading text-center">
          <h1>Django Developer Required</h1>
        </div>
        <div className="my-4">
          <span className="font-bold mr-3">Status :</span>
          <span className="badge badgeSm badgeSuccess">Open</span>
        </div>
        <p className="my-3">
          <span className="font-bold mr-3">Level :</span>Mid
        </p>
        <p className="my-3 ">
          <span className="font-bold mr-3">Minimum Experience :</span>3 years
        </p>
        <h2 className="my-4 font-bold text-xl">Job Responsibilities</h2>
        <ul>
          <li>Minimum of 3 years of relevant experience</li>
          <li>Bachelor's degree in Computer Science or related field</li>
          <li>Proficient in programming languages such as Java or Python</li>
          <li>Excellent problem-solving skills</li>
        </ul>
        <h2 className="my-4 font-bold text-xl">Requirements</h2>
        <ul>
          <li>Develop and maintain software applications</li>
          <li>Collaborate with cross-functional teams</li>
          <li>Conduct code reviews and provide constructive feedback</li>
          <li>Troubleshoot and debug issues</li>
        </ul>
        <div className="flex flex-col md:flex-row  md:gap-10 my-4 ">
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
        <div className="mt-8">
          <Link to="/jobs/11" className="btn btnPrimaryOutline mr-4">
            Share
          </Link>
          <Link to="/" className="btn btnPrimary">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
