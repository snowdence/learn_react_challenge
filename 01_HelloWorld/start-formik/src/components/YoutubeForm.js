import React from "react";
import { useFormik } from "formik";

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "Tran Minh Duc",
      email: "admin@wifosoft.ccom",
      channel: "Wifosoft",
    },
    onSubmit: (values) => {
      console.log("onSubmit()");
      console.log(values);
    },
  });
  return (
    <div>
      <h1>Youtube Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name"> Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="name"> Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="name"> Name</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
