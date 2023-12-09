const Pagination = ({ handleMove, limit, skip, data }) => {
  return (
    <div>
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

export default Pagination;
