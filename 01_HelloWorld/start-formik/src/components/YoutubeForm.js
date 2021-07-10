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
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
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

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default YoutubeForm;
