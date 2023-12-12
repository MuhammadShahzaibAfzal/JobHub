import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getJobs } from "../../http";
import SearchBox from "../../components/SearchBox";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import JobCard from "../../components/JobCard";
const STALE_TIME = 300000;

const AdminHome = () => {
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
  if (error) {
    return <h2>{error?.message}</h2>;
  }
  return (
    <div>
      <div className="heading text-center">
        <h1>List of Jobs</h1>
        <SearchBox setSerachParams={setSerachParams} data={data} q={q} />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
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

          {data?.totalJobs > limit && (
            <Pagination
              handleMove={handleMove}
              skip={skip}
              limit={limit}
              data={data}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AdminHome;
