import React from "react";
import debounce from "lodash.debounce";

const DEBOUNCE_TIME_MS = 800;

const SearchBox = ({ setSerachParams, data, q }) => {
  return (
    <div>
      <div className="w-[500px]  text-center mx-auto my-4">
        <input
          type="text"
          className="input"
          placeholder="Search jobs here...."
          onChange={debounce((e) => {
            setSerachParams((prev) => {
              prev.set("q", e.target.value);
              prev.set("limit", 2);
              prev.set("skip", 0);
              return prev;
            });
          }, DEBOUNCE_TIME_MS)}
        />
      </div>
      {q !== "" && (
        <div className="text-center">
          {data?.totalJobs > 0 && (
            <span className="text-xl my-3">
              {`Showing results for "${q}" - Found ${data?.totalJobs} ${
                data?.totalJobs === 1 ? "job" : "jobs"
              }`}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
