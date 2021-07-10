import React from "react";
import { useFormik } from "formik";

const onSubmit = (values) => {
  console.log("onSubmit()");
  console.log(values);
};
const validate = (values) => {
  let errors = {};
  //errors.name errors.email errors.channel

  if (!values.name) {
    errors.name = "Required";
  }
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) {
    errors.email = "Required";
  } else if (!re.test(String(values.email).toLowerCase())) {
    errors.email = "Invalid Email";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit,
    validate,
  });
  return (
    <div>
      <h1>Youtube Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div id="error"> {formik.errors.name}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name"> Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div id="error"> {formik.errors.email} </div>
          ) : (
            ""
          )}
        </div>

        <div className="form-control">
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div id="error"> {formik.errors.channel} </div>
          ) : (
            ""
          )}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
