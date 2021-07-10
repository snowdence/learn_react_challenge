import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./custom-form/TextError";

const onSubmit = (values) => {
  console.log("onSubmit()");
  console.log(values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const initialValues = {
  name: "Tran Minh Duc",
  email: "admin@wifosoft.com",
  channel: "youtube",
  comments: "abds",
  address: "Viet nam",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
};
function YoutubeForm() {
  return (
    <div>
      <h1>Youtube Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="name"> Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component={TextError} />
          </div>
          <div className="form-control">
            <label htmlFor="name">Email</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email">
              {(errorMessage) => {
                return <div id="error"> {errorMessage}</div>;
              }}
            </ErrorMessage>
          </div>

          <div className="form-control">
            <label htmlFor="name">Channel</label>
            <Field type="text" id="channel" name="channel" />
            <ErrorMessage name="channel" component={TextError} />
          </div>
          <div className="form-control">
            <label htmlFor="comments">Comments</label>
            <Field as="textarea" id="comments" name="comments"></Field>
            <ErrorMessage name="comments" component={TextError} />
          </div>

          <div className="form-control">
            <label htmlFor="address">Address</label>
            <Field name="address">
              {(props) => {
                const { field, form, meta } = props;
                //console.log(props);
                return (
                  <div>
                    <input id="address" type="text" {...field} />
                    {meta.touched && meta.error ? (
                      <div>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>

          <div className="form-control">
            <label htmlFor="facebook">Facebook</label>
            <Field type="text" id="facebook" name="social.facebook" />
          </div>

          <div className="form-control">
            <label htmlFor="twitter">Twitter</label>
            <Field type="text" id="twitter" name="social.twitter" />
          </div>

          <div className="form-control">
            <label htmlFor="phone1">PhoneNumber 1</label>
            <Field type="text" id="phone1" name="phoneNumber[0]" />
          </div>

          <div className="form-control">
            <label htmlFor="phone2">PhoneNumber 2</label>
            <Field type="text" id="phone2" name="phoneNumber[1]" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default YoutubeForm;
