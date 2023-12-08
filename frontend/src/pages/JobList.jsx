import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import { useQuery } from "react-query";
import { getJobs } from "../http";
import { useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";

const DEBOUNCE_TIME_MS = 800;
const STALE_TIME = 300000;

const JobList = () => {
  const [searchParams, setSerachParams] = useSearchParams({
    skip: 0,
    limit: 2,
    q: "",
  });
  const limit = parseInt(searchParams.get("limit")) || 2;
  const skip = parseInt(searchParams.get("skip")) || 0;
  const q = searchParams.get("q") || "";
  const { data, isLoading, error } = useQuery(
    ["jobs", skip, limit, q],
    async () => {
      return getJobs(limit, skip, q);
    },
    {
      staleTime: STALE_TIME,
      keepPreviousData: true,
    }
  );

  const handleMove = (moveCount) => {
    setSerachParams((prev) => {
      prev.set("skip", Math.max(skip + moveCount, 0));
      return prev;
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling effect
    });
  };

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (error) {
    return <h2>{error?.message}</h2>;
  }

  return (
    <div>
      <Navbar />
      <div className="heading text-center">
        <h1>List of Jobs</h1>
      </div>
      {/* START OF  SERACH BOX */}
      <div className="w-[500px]  text-center mx-auto my-4">
        <input
          type="text"
          className="input"
          placeholder="Search jobs here...."
          onChange={debounce((e) => {
            setSerachParams((prev) => {
              prev.set("q", e.target.value);
              prev.set("skip", 0);
              return prev;
            });
          }, DEBOUNCE_TIME_MS)}
        />
      </div>
      {q !== "" && (
        <div className="text-center">
          <span className="text-xl my-3">
            {`Showing results for "${q}" - Found ${data?.totalJobs} ${
              data?.totalJobs === 1 ? "job" : "jobs"
            }`}
          </span>
        </div>
      )}
      {/* END OF SEARCH BOX */}

      {/* START OF LIST OF CARDS */}
      {data?.jobs?.length > 0 ? (
        data?.jobs?.map((job) => {
          return <JobCard job={job} key={job._id} />;
        })
      ) : (
        <div className="text-center">
          <h1>No Job Found for serach "{q}"</h1>
        </div>
      )}
      {/* END OF LIST OF CARDS */}

      {/* START OF PAGINATION */}
      <div className="text-center my-8">
        <button
          className="btn btnDanger mr-4 w-32 disabled:bg-red-400 disabled:cursor-not-allowed"
          disabled={skip === 0}
          onClick={() => {
            handleMove(-limit);
          }}
        >
          Previous
        </button>
        <button
          className="btn btnDanger w-32  disabled:bg-red-400 disabled:cursor-not-allowed"
          disabled={limit + skip >= data?.totalJobs}
          onClick={() => {
            handleMove(limit);
          }}
        >
          Next
        </button>
      </div>
      {/* END OF PAGINATION */}
    </div>
  );
};

export default JobList;
