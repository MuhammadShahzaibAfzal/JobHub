import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getJob } from "../http";
import moment from "moment";
import Loader from "../components/Loader";

const STALE_TIME = 300000;

const JobDetail = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery(
    ["jobs", _id],
    async () => {
      return getJob(_id);
    },
    {
      staleTime: STALE_TIME,
      keepPreviousData: true,
    }
  );
  const job = data?.job;
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <h2>{error?.message}</h2>;
  }
  return (
    <div className="text-lg">
      <div className="cardWrapper shadow-md rounded-md p-8 leading-7 border-2 border-gray-200">
        <div className="heading text-center">
          <h1>{job?.title}</h1>
        </div>
        <div className="my-4">
          <span className="font-bold mr-3">Status :</span>
          <span
            className={`badge badgeSm ${
              job?.status === "Open" ? "badgeSuccess" : "badgeDanger"
            }`}
          >
            {job?.status}
          </span>
        </div>
        <p className="my-3">
          <span className="font-bold mr-3">Level :</span>
          {job?.level}
        </p>
        <p className="my-3 ">
          <span className="font-bold mr-3">Minimum Experience :</span>
          {job?.minExperience}
        </p>
        <h2 className="my-4 font-bold text-xl">Job Responsibilities</h2>
        {job?.responsibilities}
        <h2 className="my-4 font-bold text-xl">Requirements</h2>
        {job?.requirements}
        <div className="flex flex-col md:flex-row  md:gap-10 my-4 ">
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
        <div className="mt-8">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn btnPrimaryOutline mr-4"
          >
            Go Back
          </button>
          <Link
            to={`/apply/${job?.title}/${job?._id}`}
            className="btn btnPrimary"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
