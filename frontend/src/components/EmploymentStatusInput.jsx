const EmploymentStatusInput = ({ name, label, ...others }) => (
  <div className=" my-4">
    <label htmlFor="">{label}</label>
    <div className="flex items-center my-4">
      <input
        type="radio"
        id="employed"
        name={name}
        value="yes"
        {...others}
        className="mr-2 w-fit"
      />
      <label htmlFor="employed" className="text-gray-700">
        Yes
      </label>
    </div>
    <div className="flex items-center mt-2 my-4">
      <input
        type="radio"
        id="unemployed"
        name={name}
        {...others}
        value="no"
        className="mr-2 w-fit"
      />
      <label htmlFor="unemployed" className="text-gray-700">
        No
      </label>
    </div>
  </div>
);

export default EmploymentStatusInput;
