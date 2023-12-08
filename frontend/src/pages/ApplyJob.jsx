import Navbar from "../components/Navbar";
import cvIcon from "../assets/cv.svg";
const ApplyJob = () => {
  return (
    <div>
      <Navbar />
      <div className="cardWrapper shadow-md rounded-md p-8 leading-7 border-2 border-gray-200 text-md lg:text-xl text-gray-700">
        <div className="heading text-center">
          <h1>Submit Your Application</h1>
        </div>
        <div className="my-4">
          <span className="font-bold mr-3">Position :</span>
          Django Developer Required
        </div>
        <p className="my-3">
          <span className="font-bold mr-3">Level :</span>Mid
        </p>

        <form action="" className="mt-12">
          <div className="formControl">
            <label htmlFor="name">Full Name</label>
            <input type="text" />
          </div>
          <div className="formControl">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>

          <div className="formControl">
            <label htmlFor="name">Contact No.</label>
            <input type="text" />
          </div>
          <div className="formControl">
            <label htmlFor="name">Cover Letter</label>
            <textarea name="coverLetter" id="" cols="30" rows="3"></textarea>
          </div>
          <div className=" my-4">
            <label htmlFor="">Are you currently employed?</label>
            <div className="flex items-center my-4">
              <input
                type="radio"
                id="employed"
                name="employment_status"
                value="yes"
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
                name="employment_status"
                value="no"
                className="mr-2 w-fit"
              />
              <label htmlFor="unemployed" className="text-gray-700">
                No
              </label>
            </div>
          </div>

          <div className="formControl w-60">
            <label
              htmlFor="cv"
              className="cursor-pointer shadow-md border-2 border-primary rounded-md px-3 py-3 flex items-center gap-4"
            >
              <img src={cvIcon} alt="" /> Attach Your CV
            </label>
            <input type="file" className="hidden" id="cv" name="cv" />
          </div>

          <div className="text-center">
            <button className="btn btnPrimary px-10 my-5 ">APPLY</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
