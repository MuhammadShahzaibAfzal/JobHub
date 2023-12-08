import { Link } from "react-router-dom";
import moment from "moment/moment";

const JobCard = ({ job }) => {
  return (
    <div className="cardWrapper shadow-md rounded-md p-8 leading-7 border-2 border-gray-200">
      <div className="card">
        <div className="flex items-center my-3">
          <h2 className="font-bold text-xl mr-3">{job?.title}</h2>
          <span
            className={`badge ${
              job?.status === "Open" ? "badgeSuccess" : "badgeDanger"
            }`}
          >
            {job?.status}
          </span>
        </div>
        <p className="my-3">
          {" "}
          <span className="font-bold">Min. Experience</span> :{" "}
          {job?.minExperience}
        </p>
        <p className="text-justify">{job?.description}</p>
        <div className="flex flex-col md:flex-row  md:gap-10 ">
          <p>
            <span className="font-bold">Seats </span>: {job?.numberOfSeats}
          </p>
          <p>
            <span className="font-bold">Posted</span> :{" "}
            {moment(job?.createdAt).format("DD MMMM YYYY")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 ">
          <p>
            <span className="font-bold">Location</span>: {job?.location}
          </p>
          <p>
            <span className="font-bold">Apply before</span>:{" "}
            {moment(job?.duedate).format("DD MMMM YYYY")}
          </p>
        </div>
        <div className="mt-5">
          <Link to={`/jobs/${job?._id}`} className="btn btnPrimaryOutline mr-4">
            View Details
          </Link>
          {job?.status === "Open" && (
            <Link to={`/apply/${job?._id}`} className="btn btnPrimary">
              Apply Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
