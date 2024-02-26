import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import NhanvienModel from "../models/NhanvienModel";

const createSchema = Yup.object().shape({
  code: Yup.string().required("Required"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  age: Yup.number()
    .min(18, "Age must be at least 18")
    .max(100, "Age must be at most 100")
    .required("Required"),
  salary: Yup.number().min(0, "Salary cannot be negative").required("Required"),
  branch: Yup.string().required("Required"),
});

function NhanvienCreate(props) {
  let navigate = useNavigate();

  const [form, setForm] = useState({
    code: "",
    name: "",
    age: "",
    salary: "",
    branch: "",
  });
  const handSubmit = (values) => {
    console.log(values);
    NhanvienModel.store(values)
      .then(function (data) {
        alert("Them thanh cong");
        // Chuyen huong
        navigate("/");
      })
      .catch(function (error) {
        alert("Da co loi xay ra");
      });
  };
  return (
    <div class="mb-3"> 
      <Link to={"/"}> Back </Link>
      <h1> Create </h1>
      <Formik
        initialValues={form}
        validationSchema={createSchema}
        onSubmit={(values) => handSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="code">Code</label>
                  </td>
                  <td>
                    <Field name="code" placeholder="Enter code" />
                    {errors.code && touched.code ? (
                      <div style={{ color: "red" }}>{errors.code}</div>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="name">Name</label>
                  </td>
                  <td>
                    <Field name="name" placeholder="Enter name" />
                    {errors.name && touched.name ? (
                      <div style={{ color: "red" }}>{errors.name}</div>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="age">Age</label>
                  </td>
                  <td>
                    <Field name="age" placeholder="Enter age" />
                    {errors.age && touched.age ? (
                      <div style={{ color: "red" }}>{errors.age}</div>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="salary">salary</label>
                  </td>
                  <td>
                    <Field name="salary" placeholder="Enter salary" />
                    {errors.salary && touched.salary ? (
                      <div style={{ color: "red" }}>{errors.salary}</div>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="branch">Branch</label>
                  </td>
                  <td>
                    <Field as="select" name="branch">
                      <option value="">Select Branch</option>
                      <option value="IT">IT </option>
                      <option value="KD">KD </option>
                      <option value="MKT">MKT </option>
                      {/* Thêm các option khác nếu cần */}
                    </Field>
                    {errors.branch && touched.branch ? (
                      <div style={{ color: "red" }}>{errors.branch}</div>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NhanvienCreate;
