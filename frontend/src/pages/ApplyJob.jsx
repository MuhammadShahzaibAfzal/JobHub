import { useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import EmploymentStatusInput from "../components/EmploymentStatusInput";
import FileInput from "../components/FileInput";
import ErrorMessage from "../components/ErrorMessage";
import { submitApplication } from "../http";

const validationSchema = Yup.object({
  name: Yup.string().required().label("Full Name"),
  email: Yup.string().email().required().label("Email"),
  contactNo: Yup.string()
    .matches(
      /^(?:\+92\d{10}|03\d{9})$/,
      "Contact No. should be in the format +92xxxxxxxxxx or 03xxxxxxxxx"
    )
    .required()
    .label("Contact Number"),
  coverLetter: Yup.string().required().label("Cover Letter"),
  currentlyEmployed: Yup.string().required().label("Employment Status"),
  cv: Yup.mixed().required().label("CV"),
});

const ApplyJob = () => {
  const { _id, title } = useParams();

  const submitForm = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("contactNo", values.contactNo);
    formData.append("cv", values.cv);
    formData.append("coverLetter", values.coverLetter);
    formData.append("currentlyEmployed", values.currentlyEmployed);

    const promise = submitApplication(_id, formData);
    toast.promise(promise, {
      loading: "Submitting Application....",
      success: (data) => {
        return data?.message;
      },
      error: (err) => {
        return (
          err?.response?.data?.message ||
          "Something went wrong! please try again"
        );
      },
    });
  };
  return (
    <div>
      <div className="cardWrapper shadow-md rounded-md p-8 leading-7 border-2 border-gray-200 text-md lg:text-xl text-gray-700">
        <div className="heading text-center">
          <h1>Submit Your Application</h1>
        </div>
        <div className="my-4">
          <span className="font-bold mr-3">Position :</span>
          {title}
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            contactNo: "",
            coverLetter: "",
            currentlyEmployed: "",
            cv: "",
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            handleBlur,
            touched,
            setFieldValue,
          }) => {
            return (
              <>
                <TextInput
                  label="Full Name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage error={errors.name} visible={touched.name} />
                <TextInput
                  label="Email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage error={errors.email} visible={touched.email} />
                <TextInput
                  label="Contact Number"
                  name="contactNo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  error={errors.contactNo}
                  visible={touched.contactNo}
                />
                <TextArea
                  label="Cover Letter"
                  name="coverLetter"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  error={errors.coverLetter}
                  visible={touched.coverLetter}
                />
                <EmploymentStatusInput
                  name="currentlyEmployed"
                  label="Are you currently employed?"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  error={errors.currentlyEmployed}
                  visible={touched.currentlyEmployed}
                />
                <FileInput
                  label="Attach your CV"
                  name="cv"
                  onChange={(e) => {
                    setFieldValue("cv", e.target.files[0]);
                  }}
                  onBlur={handleBlur}
                />
                <ErrorMessage error={errors.cv} visible={touched.cv} />

                <div className="text-center">
                  <button
                    className="btn btnPrimary px-10 my-5 "
                    type="submit"
                    onClick={handleSubmit}
                  >
                    APPLY
                  </button>
                </div>
              </>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ApplyJob;
